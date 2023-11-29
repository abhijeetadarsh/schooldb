import db from "../../db/connectDB.js";

const studentController = {
  getAllStudents: (req, res) => {
    db.query("SELECT * FROM Student", (err, results) => {
      if (err) {
        console.error("Error querying the database:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(results);
      }
    });
  },

  getStudentDesc: (req, res) => {
    db.query("DESC Student", (err, results) => {
      if (err) {
        console.error("Error querying the database:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(results);
      }
    });
  },

  getStudentById: (req, res) => {
    const studentId = req.params.id;
    db.query(
      "SELECT * FROM Student WHERE StudentID = ?",
      [studentId],
      (err, results) => {
        if (err) {
          console.error("Error querying the database:", err);
          res.status(500).send("Internal Server Error");
        } else {
          if (results.length > 0) {
            res.json(results[0]);
          } else {
            res.status(404).send("Student not found");
          }
        }
      }
    );
  },

  addStudent: (req, res) => {
    const newStudent = req.body;
    db.query("INSERT INTO Student SET ?", [newStudent], (err, result) => {
      if (err) {
        console.error("Error inserting into the database:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(201).send(`Student added successfully`);
      }
    });
  },

  updateStudent: (req, res) => {
    const studentId = req.params.id;
    const updatedStudent = req.body;
    db.query(
      "UPDATE Student SET ? WHERE StudentID = ?",
      [updatedStudent, studentId],
      (err, results) => {
        if (err) {
          console.error("Error updating the database:", err);
          res.status(500).send("Internal Server Error");
        } else {
          if (results.affectedRows > 0) {
            res.send("Student updated successfully");
          } else {
            res.status(404).send("Student not found");
          }
        }
      }
    );
  },

  deleteStudent: (req, res) => {
    const studentId = req.params.id;
    db.query(
      "DELETE FROM Student WHERE StudentID = ?",
      [studentId],
      (err, results) => {
        if (err) {
          console.error("Error deleting from the database:", err);
          res.status(500).send("Internal Server Error");
        } else {
          if (results.affectedRows > 0) {
            res.send("Student deleted successfully");
          } else {
            res.status(404).send("Student not found");
          }
        }
      }
    );
  },
};

export default studentController;
