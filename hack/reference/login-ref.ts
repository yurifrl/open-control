import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

// const url = "https://proxy.open-control.orb.local:4441/v1/auth/";
const url = "https://proxy:4441/v1/auth/";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: req.body.username,
      password: req.body.password,
    }),
    mode: "cors",
  });

  if (!response.ok) {
    return res.status(response.status).json({ message: "Login failed" });
  }

  const { token } = await response.json();

  // Encrypt the token before setting it in the cookie (Assuming you have an encrypt function)
  // const encryptedToken = encrypt(token);
  const encryptedToken = token;

  const cookie = serialize("token", encryptedToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  res.setHeader("Set-Cookie", cookie);

  return res.status(200).json({ message: "Login successful" });
}
