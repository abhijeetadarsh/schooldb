$(document).ready(function () {
  $(".drag-me").draggable({ containment: "window" });
  $(".list-big").scrollbar();
});

$("#student").click(() => {
  console.log("clikced");
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class 'table'
  const tables = document.querySelectorAll(".title");

  // Add a click event listener to each table
  tables.forEach((table) => {
    table.addEventListener("click", function () {
      console.log(table);
      // Get the table name from the data attribute
      const tableName = table.getAttribute("data-tableName");

      // Redirect to the common URL and pass the table name as a parameter
      window.location.href = `pages/table.html?table=${tableName}`;
    });
  });
});
