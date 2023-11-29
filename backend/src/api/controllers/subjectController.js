import db from "../../db/connectDB.js";

const subjectController = {
  getAllSubjects: (req, res) => {
    db.query("SELECT * FROM Subject", (err, results) => {
      if (err) {
        console.error("Error querying the database:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(results);
      }
    });
  },

  getSubjectById: (req, res) => {
    const subjectId = req.params.id;
    db.query(
      "SELECT * FROM Subject WHERE SubjectID = ?",
      [subjectId],
      (err, results) => {
        if (err) {
          console.error("Error querying the database:", err);
          res.status(500).send("Internal Server Error");
        } else {
          if (results.length > 0) {
            res.json(results[0]);
          } else {
            res.status(404).send("Subject not found");
          }
        }
      }
    );
  },

  addSubject: (req, res) => {
    const newSubject = req.body;
    db.query("INSERT INTO Subject SET ?", [newSubject], (err) => {
      if (err) {
        console.error("Error inserting into the database:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(201).send("Subject added successfully");
      }
    });
  },

  updateSubject: (req, res) => {
    const subjectId = req.params.id;
    const updatedSubject = req.body;
    db.query(
      "UPDATE Subject SET ? WHERE SubjectID = ?",
      [updatedSubject, subjectId],
      (err, results) => {
        if (err) {
          console.error("Error updating the database:", err);
          res.status(500).send("Internal Server Error");
        } else {
          if (results.affectedRows > 0) {
            res.send("Subject updated successfully");
          } else {
            res.status(404).send("Subject not found");
          }
        }
      }
    );
  },

  deleteSubject: (req, res) => {
    const subjectId = req.params.id;
    db.query(
      "DELETE FROM Subject WHERE SubjectID = ?",
      [subjectId],
      (err, results) => {
        if (err) {
          console.error("Error deleting from the database:", err);
          res.status(500).send("Internal Server Error");
        } else {
          if (results.affectedRows > 0) {
            res.send("Subject deleted successfully");
          } else {
            res.status(404).send("Subject not found");
          }
        }
      }
    );
  },
};

export default subjectController;
