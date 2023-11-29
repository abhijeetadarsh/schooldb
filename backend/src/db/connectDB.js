import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "me",
  password: "password",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database");
  }
});

export default db;
