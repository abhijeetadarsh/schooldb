import fs from "fs";
import { __dirname, tables } from "../constants.js";
import db from "./connectDB.js";

const data = fs.readFileSync(`${__dirname}/db/sql/initTables.sql`, "ascii");

data.split("$").forEach((query) => {
  db.query(query);
});

tables.forEach((table) => {
  const query = fs.readFileSync(
    `${__dirname}/db/sql/init${table}.sql`,
    "ascii"
  );
  // console.log(query.slice(0, 100));

  db.query(query, (result, err) => {
    console.log(result, err);
  });
});
