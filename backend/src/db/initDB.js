import db from "./connectDB.js";

db.query("DROP DATABASE IF EXISTS schooldb;", (err, result) => {
  console.log(err, result);
});

db.query("CREATE DATABASE IF NOT EXISTS schooldb;", (err, result) => {
  console.log(err, result);
});

db.query("USE schooldb;");
