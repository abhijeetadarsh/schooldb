import express from "express";
import studentController from "../controllers/studentController.js";
import teacherController from "../controllers/teacherController.js";
import classroomController from "../controllers/classroomController.js";
import subjectController from "../controllers/subjectController.js";
const router = express.Router();

router.route("/students").get(studentController.getAllStudents);
router.route("/students/desc").get(studentController.getStudentDesc);
router.route("/students/:id").get(studentController.getStudentById);
router.route("/students").post(studentController.addStudent);
router.route("/students/:id").put(studentController.updateStudent);
router.route("/students/:id").delete(studentController.deleteStudent);

router.route("/teachers").get(teacherController.getAllTeachers);
router.route("/teachers/:id").get(teacherController.getTeacherById);
router.route("/teachers").post(teacherController.addTeacher);
router.route("/teachers/:id").put(teacherController.updateTeacher);
router.route("/teachers/:id").delete(teacherController.deleteTeacher);

router.route("/classrooms").get(classroomController.getAllClassrooms);
router.route("/classrooms/:id").get(classroomController.getClassroomById);
router.route("/classrooms").post(classroomController.addClassroom);
router.route("/classrooms/:id").put(classroomController.updateClassroom);
router.route("/classrooms/:id").delete(classroomController.deleteClassroom);

router.route("/subjects").get(subjectController.getAllSubjects);
router.route("/subjects/:id").get(subjectController.getSubjectById);
router.route("/subjects").post(subjectController.addSubject);
router.route("/subjects/:id").put(subjectController.updateSubject);
router.route("/subjects/:id").delete(subjectController.deleteSubject);

export { router };
