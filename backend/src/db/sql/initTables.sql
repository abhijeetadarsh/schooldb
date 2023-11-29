CREATE TABLE IF NOT EXISTS  Student (
    StudentID INT PRIMARY KEY,
    First_Name VARCHAR(255),
    Last_Name VARCHAR(255),
    Year_Group INT,
    Date_of_Birth DATE,
    Student_Image BLOB,
    School_Team VARCHAR(255)
);
$
CREATE TABLE IF NOT EXISTS Teacher (
    TeacherID INT PRIMARY KEY,
    First_Name VARCHAR(255),
    Last_Name VARCHAR(255),
    Title VARCHAR(50),
    Subjects_Taught VARCHAR(255),
    Level VARCHAR(50)
);
$
CREATE TABLE IF NOT EXISTS Classroom (
    ClassroomID INT PRIMARY KEY,
    Capacity INT,
    Room_Type VARCHAR(255),
    Facilities VARCHAR(255)
);
$
CREATE TABLE IF NOT EXISTS Subject (
    SubjectID INT PRIMARY KEY,
    Requirements TEXT,
    Max_Capacity INT
);
$
CREATE TABLE IF NOT EXISTS Class (
    ClassID INT PRIMARY KEY,
    ClassroomID INT,
    SubjectID INT,
    TeacherID INT,
    Period VARCHAR(50),
    Time TIME,
    FOREIGN KEY (ClassroomID) REFERENCES Classroom(ClassroomID),
    FOREIGN KEY (SubjectID) REFERENCES Subject(SubjectID),
    FOREIGN KEY (TeacherID) REFERENCES Teacher(TeacherID)
);
$
CREATE TABLE IF NOT EXISTS Student_Classes (
    ClassID INT,
    StudentID INT,
    PRIMARY KEY (ClassID, StudentID),
    FOREIGN KEY (ClassID) REFERENCES Class(ClassID),
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID)
);