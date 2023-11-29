import db from "../../db/connectDB.js";

const getTableFromUrl = (url) => {
  url = url.split("/")[1];
  return url.charAt(0).toUpperCase() + url.slice(1, -1);
};

const controller = {
  getAllTuples: (req, res) => {
    const tableName = getTableFromUrl(req.url);
    console.log(tableName);
    if (req.url)
      db.query("SELECT * FROM ??", [tableName], (err, results) => {
        if (err) {
          console.error("Error querying the database:", err);
          res.status(500).send("Internal Server Error");
        } else {
          res.json(results);
        }
      });
  },

  getTableDesc: (req, res) => {
    const tableName = getTableFromUrl(req.url);
    console.log(tableName);
    db.query("DESC ??", [tableName], (err, results) => {
      if (err) {
        console.error("Error querying the database:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(results);
      }
    });
  },

  getTupleById: (req, res) => {
    const tableName = getTableFromUrl(req.url);
    const tableId = tableName + "ID";
    const id = req.params.id;
    db.query(
      "SELECT * FROM ?? WHERE ?? = ?",
      [tableName, tableId, id],
      (err, results) => {
        if (err) {
          console.error("Error querying the database:", err);
          res.status(500).send("Internal Server Error");
        } else {
          if (results.length > 0) {
            res.json(results[0]);
          } else {
            res.status(404).send(`${tableName} not found`);
          }
        }
      }
    );
  },

  addTuple: (req, res) => {
    const tableName = getTableFromUrl(req.url);
    const newTuple = req.body;
    db.query("INSERT INTO ?? SET ?", [tableName, newTuple], (err, result) => {
      if (err) {
        console.error("Error inserting into the database:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(201).send(`${tableName} added successfully`);
      }
    });
  },

  updateTuple: (req, res) => {
    const tableName = getTableFromUrl(req.url);
    const tableId = tableName + "ID";
    const id = req.params.id;
    const updatedTuple = req.body;
    db.query(
      "UPDATE ?? SET ? WHERE ?? = ?",
      [tableName, updatedTuple, tableId, id],
      (err, results) => {
        if (err) {
          console.error("Error updating the database:", err);
          res.status(500).send("Internal Server Error");
        } else {
          if (results.affectedRows > 0) {
            res.send(`${tableName} updated successfully`);
          } else {
            res.status(404).send(`${tableName} not found`);
          }
        }
      }
    );
  },

  deleteTuple: (req, res) => {
    const tableName = getTableFromUrl(req.url);
    const tableId = tableName + "ID";
    const id = req.params.id;
    db.query(
      "DELETE FROM ?? WHERE ?? = ?",
      [tableName, tableId, id],
      (err, results) => {
        if (err) {
          console.error("Error deleting from the database:", err);
          res.status(500).send("Internal Server Error");
        } else {
          if (results.affectedRows > 0) {
            res.send(`${tableName} deleted successfully`);
          } else {
            res.status(404).send(`${tableName} not found`);
          }
        }
      }
    );
  },
};

export default controller;
