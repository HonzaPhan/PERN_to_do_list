import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();
const dbPort = parseInt(process.env.DB_PORT!, 10)

export const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: dbPort,
  database: process.env.DTB,
});

