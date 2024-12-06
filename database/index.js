import pg from 'pg'
import dotenv from 'dotenv';
dotenv.config();

// pool vs client.
// pool is multiple connections at the same time, that tracks a users connection(s).
// client is a single connection.
const { Pool } = pg;
 
export const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  });

// Test the connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }

  console.log('Connected to the database');
  release(); // Release the client back to the pool
});