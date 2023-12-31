DELIMITER //
CREATE TRIGGER before_delete_student
BEFORE DELETE
ON Student FOR EACH ROW
BEGIN
  DELETE FROM Class WHERE TeacherID = OLD.StudentID;
  DELETE FROM StudentClasses WHERE StudentID = OLD.StudentID;
END;
//

DELIMITER ;
DELIMITER //

CREATE TRIGGER before_delete_subject
BEFORE DELETE
ON Subject FOR EACH ROW
BEGIN
  DELETE FROM Class WHERE SubjectID = OLD.SubjectID;
END;

//

DELIMITER ;
DELIMITER //

CREATE TRIGGER before_delete_classroom
BEFORE DELETE
ON Classroom FOR EACH ROW
BEGIN
  DELETE FROM Class WHERE ClassroomID = OLD.ClassroomID;
END;

//

DELIMITER ;
DELIMITER //

CREATE TRIGGER before_delete_teacher
BEFORE DELETE
ON Teacher FOR EACH ROW
BEGIN
  DELETE FROM Class WHERE TeacherID = OLD.TeacherID;
  DELETE FROM StudentClasses WHERE ClassID IN (SELECT ClassID FROM Class WHERE TeacherID = OLD.TeacherID);
END;

//

DELIMITER ;
