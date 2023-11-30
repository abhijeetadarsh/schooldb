import db from "./connectDB.js";

// db.query("DROP DATABASE IF EXISTS schooldb;", (err, result) => {
//   if (err) {
//     console.error(err);
//   }
// });

db.query("CREATE DATABASE IF NOT EXISTS schooldb;", (err, result) => {
  if (err) {
    console.error(err);
  }
});

db.query("USE schooldb;");
