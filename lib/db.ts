// lib/db.js
import { Pool } from "pg";

// Set up a PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // e.g. 'postgresql://username:password@localhost:5432/database_name'
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

// Insert a session into the database
async function insertSession({ sessionId, userId, createdAt }) {
  const query = `
    INSERT INTO sessions (session_id, user_id, created_at)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  const values = [sessionId, userId, createdAt];

  try {
    const res = await pool.query(query, values);
    return res.rows[0];
  } catch (err) {
    console.error("Error executing query:", err.stack);
    throw err;
  }
}

export default {
  insertSession,
};
