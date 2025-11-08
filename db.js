// db.js
import mysql from "mysql2/promise";

const db = await mysql.createPool({
  host: "hopper.proxy.rlwy.net",
  user: "root",
  password: "skPnJlPFlzhhMycuFTacqFokokbrXcLt", 
  database: "rideshare",
  port: "58654",
});

// mysql://root:skPnJlPFlzhhMycuFTacqFokokbrXcLt@hopper.proxy.rlwy.net:58654/rideshare
export default db;


