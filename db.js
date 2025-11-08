// db.js
import mysql from "mysql2/promise";

const db = await mysql.createPool({
  host: "mysql.railway.internal:3306",
  user: "root",
  password: "skPnJlPFlzhhMycuFTacqFokokbrXcLt", 
  database: "rideshare",
});

// mysql://root:skPnJlPFlzhhMycuFTacqFokokbrXcLt@mysql.railway.internal:3306/rideshare
export default db;
