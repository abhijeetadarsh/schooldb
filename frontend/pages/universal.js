document.addEventListener("DOMContentLoaded", function () {
  const tableTitle = document.getElementById("table-title");
  const entriesList = document.getElementById("entries-list");

  // Extract the table name from the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const tableName = urlParams.get("table");

  if (tableName) {
    // Set the title of the page
    tableTitle.textContent = `${tableName} List`;

    // Add "Add New" button
    const addNewBtn = document.getElementById("add-new-btn");
    addNewBtn.textContent = `Add New ${tableName}`;
    addNewBtn.addEventListener("click", function () {
      // Redirect to the add new page or implement your add new logic
      window.location.href = `add-new.html?table=${tableName}`;
    });

    // Fetch entries for the selected table from your Node.js backend
    fetch(`http://localhost:3000/api/v1/${tableName}s`)
      .then((response) => response.json())
      .then((entries) => {
        entries.forEach((entry) => {
          // Create a list item for each entry
          const listItem = document.createElement("li");
          let htmlContent = "";
          for (const [key, value] of Object.entries(entry)) {
            htmlContent += `<strong>${key}:</strong> ${value}<br>`;
          }
          listItem.innerHTML = `
            ${htmlContent}
            <button class="delete-btn">Delete</button>
            <button class="update-btn">Update</button>
          `;

          const entryId = entry[`${tableName}ID`];
          // Add click event for the delete button
          const deleteBtn = listItem.querySelector(".delete-btn");
          deleteBtn.addEventListener("click", function () {
            // Call your delete API endpoint with the entry ID
            fetch(`http://localhost:3000/api/v1/${tableName}s/${entryId}`, {
              method: "DELETE",
            })
              .then((response) => response.json())
              .then((result) => {
                console.log(result);
                // Optionally, you can remove the list item from the DOM upon successful deletion
                listItem.remove();
              })
              .catch((error) => {
                console.error("Error deleting entry:", error);
              });
          });

          // Add click event for the update button (redirect to update page or open a modal, etc.)
          const updateBtn = listItem.querySelector(".update-btn");
          updateBtn.addEventListener("click", function () {
            // Redirect to the update page or implement your update logic
            window.location.href = `update.html?table=${tableName}&id=${entryId}`;
          });

          entriesList.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error("Error fetching entries:", error);
      });
  } else {
    // Handle the case where the table name is not provided
    console.error("Table name not provided in the URL");
  }
});
