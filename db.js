// db.js
import mysql from "mysql2/promise";

const db = await mysql.createPool({
  host: "mysql.railway.internal",
  user: "root",
  password: "skPnJlPFlzhhMycuFTacqFokokbrXcLt", 
  database: "rideshare",
  port: "3306",
});

// mysql://root:skPnJlPFlzhhMycuFTacqFokokbrXcLt@mysql.railway.internal:3306/rideshare
export default db;

