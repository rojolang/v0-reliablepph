import { Pool } from 'pg';
import { sql } from '@vercel/postgres';

// Create a new pool for direct Postgres connections
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Function to get the appropriate database client
export async function getDb() {
  if (process.env.POSTGRES_URL?.includes('vercel.app')) {
    // Use Vercel Postgres if we're on Vercel
    return sql;
  }
  // Use direct Postgres connection otherwise
  return {
    async query(text: string, params: any[]) {
      return pool.query(text, params);
    },
    async sql(strings: TemplateStringsArray, ...values: any[]) {
      return sql(strings, ...values);
    }
  };
}

export async function createTables() {
  const db = await getDb();

  if ('sql' in db) {
    await db.sql`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        ip TEXT,
        referer TEXT,
        user_agent TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await db.sql`
      CREATE TABLE IF NOT EXISTS messages (
        id TEXT PRIMARY KEY,
        user_id TEXT,
        text TEXT,
        is_user BOOLEAN,
        timestamp BIGINT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `;

    await db.sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name TEXT,
        email TEXT,
        phone TEXT,
        message TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await db.sql`
      CREATE TABLE IF NOT EXISTS hero_form_submissions (
        id SERIAL PRIMARY KEY,
        name TEXT,
        phone TEXT,
        email TEXT,
        accounts TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;
  }
}

export { sql };
