// script.js

document.addEventListener("DOMContentLoaded", function () {
  const studentList = document.getElementById("student-list");

  // Fetch data from your Node.js backend
  fetch("http://localhost:3000/api/v1/students/")
    .then((response) => response.json())
    .then((students) => {
      students.forEach((student) => {
        // Create a detailed list item for each student
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <strong>ID:</strong> ${student.StudentID}<br>
          <strong>Name:</strong> ${student.First_Name} ${student.Last_Name}<br>
          <strong>Year Group:</strong> ${student.Year_Group}<br>
          <strong>Date of Birth:</strong> ${student.Date_of_Birth}<br>
          <strong>School Team:</strong> ${
            student.School_Team || "Not specified"
          }<br>
        `;
        studentList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
