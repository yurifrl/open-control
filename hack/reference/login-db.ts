import type { NextApiRequest, NextApiResponse } from "next";
import db from "@lib/db";
import { generateSessionId } from "@lib/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const user = req.body;
  const sessionId = generateSessionId();
  await db.insertSession({
    sessionId,
    userId: user.id,
    createdAt: new Date(),
  });

  // res.status(200).json({ sessionId });
  // res.status(500).json({ error: "Internal Server Error" });
}
