import db from "../../db/connectDB.js";

const classroomController = {
  getAllClassrooms: (req, res) => {
    db.query("SELECT * FROM Classroom", (err, results) => {
      if (err) {
        console.error("Error querying the database:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(results);
      }
    });
  },

  getClassroomById: (req, res) => {
    const classroomId = req.params.id;
    db.query(
      "SELECT * FROM Classroom WHERE ClassroomID = ?",
      [classroomId],
      (err, results) => {
        if (err) {
          console.error("Error querying the database:", err);
          res.status(500).send("Internal Server Error");
        } else {
          if (results.length > 0) {
            res.json(results[0]);
          } else {
            res.status(404).send("Classroom not found");
          }
        }
      }
    );
  },

  addClassroom: (req, res) => {
    const newClassroom = req.body;
    db.query("INSERT INTO Classroom SET ?", [newClassroom], (err) => {
      if (err) {
        console.error("Error inserting into the database:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(201).send("Classroom added successfully");
      }
    });
  },

  updateClassroom: (req, res) => {
    const classroomId = req.params.id;
    const updatedClassroom = req.body;
    db.query(
      "UPDATE Classroom SET ? WHERE ClassroomID = ?",
      [updatedClassroom, classroomId],
      (err, results) => {
        if (err) {
          console.error("Error updating the database:", err);
          res.status(500).send("Internal Server Error");
        } else {
          if (results.affectedRows > 0) {
            res.send("Classroom updated successfully");
          } else {
            res.status(404).send("Classroom not found");
          }
        }
      }
    );
  },

  deleteClassroom: (req, res) => {
    const classroomId = req.params.id;
    db.query(
      "DELETE FROM Classroom WHERE ClassroomID = ?",
      [classroomId],
      (err, results) => {
        if (err) {
          console.error("Error deleting from the database:", err);
          res.status(500).send("Internal Server Error");
        } else {
          if (results.affectedRows > 0) {
            res.send("Classroom deleted successfully");
          } else {
            res.status(404).send("Classroom not found");
          }
        }
      }
    );
  },
};

export default classroomController;
