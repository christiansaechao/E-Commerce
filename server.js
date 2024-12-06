import express from 'express';
import { pool } from './database/index.js';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM shirt_fabrics');
    res.status(200).send(`Database connected successfully: ${result.rows[0].type}`);
  } catch (err) {
    console.error(err.stack);
    res.status(500).send('Database connection failed');
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});