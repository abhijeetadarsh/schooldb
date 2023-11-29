import db from "../../db/connectDB.js";

const teacherController = {
  getAllTeachers: (req, res) => {
    db.query("SELECT * FROM Teacher", (err, results) => {
      if (err) {
        console.error("Error querying the database:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(results);
      }
    });
  },

  getTeacherById: (req, res) => {
    const teacherId = req.params.id;
    db.query(
      "SELECT * FROM Teacher WHERE TeacherID = ?",
      [teacherId],
      (err, results) => {
        if (err) {
          console.error("Error querying the database:", err);
          res.status(500).send("Internal Server Error");
        } else {
          if (results.length > 0) {
            res.json(results[0]);
          } else {
            res.status(404).send("Teacher not found");
          }
        }
      }
    );
  },

  addTeacher: (req, res) => {
    const newTeacher = req.body;
    db.query("INSERT INTO Teacher SET ?", [newTeacher], (err) => {
      if (err) {
        console.error("Error inserting into the database:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(201).send("Teacher added successfully");
      }
    });
  },

  updateTeacher: (req, res) => {
    const teacherId = req.params.id;
    const updatedTeacher = req.body;
    db.query(
      "UPDATE Teacher SET ? WHERE TeacherID = ?",
      [updatedTeacher, teacherId],
      (err, results) => {
        if (err) {
          console.error("Error updating the database:", err);
          res.status(500).send("Internal Server Error");
        } else {
          if (results.affectedRows > 0) {
            res.send("Teacher updated successfully");
          } else {
            res.status(404).send("Teacher not found");
          }
        }
      }
    );
  },

  deleteTeacher: (req, res) => {
    const teacherId = req.params.id;
    db.query(
      "DELETE FROM Teacher WHERE TeacherID = ?",
      [teacherId],
      (err, results) => {
        if (err) {
          console.error("Error deleting from the database:", err);
          res.status(500).send("Internal Server Error");
        } else {
          if (results.affectedRows > 0) {
            res.send("Teacher deleted successfully");
          } else {
            res.status(404).send("Teacher not found");
          }
        }
      }
    );
  },
};

export default teacherController;
