// add-new.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("table-form");
  const tableTitle = document.getElementById("table-title");

  const urlParams = new URLSearchParams(window.location.search);
  const tableName = urlParams.get("table");

  if (tableName) {
    tableTitle.innerHTML = `Add New ${tableName}`;

    // Fetch attribute names dynamically from your backend
    fetch("http://localhost:3000/api/v1/student/attributes") // Replace with your actual endpoint
      .then((response) => response.json())
      .then((attributes) => {
        attributes.forEach((attribute) => {
          // Create form field based on the attribute name
          const label = document.createElement("label");
          label.textContent = `${attribute}:`;

          const input = document.createElement("input");
          input.type = "text"; // You might need to adjust the type based on the attribute type
          input.name = attribute.toLowerCase(); // Use lowercase attribute name as the input name
          input.required = true; // Add required attribute if necessary

          // Append label and input to the form
          form.appendChild(label);
          form.appendChild(input);
        });
      })
      .catch((error) => {
        console.error("Error fetching attributes:", error);
      });

    // Event listener for form submission
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Fetch attribute values and submit to your backend
      const formData = new FormData(form);
      const attributeValues = {};

      formData.forEach((value, key) => {
        attributeValues[key] = value;
      });

      console.log("Attribute values:", attributeValues);

      // Implement logic to submit the form data to your backend
      // You might use fetch or another method depending on your setup
      // fetch("http://localhost:3000/api/v1/student", {
      //   method: "POST",
      //   body: JSON.stringify(attributeValues),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
      // .then(response => response.json())
      // .then(data => console.log(data))
      // .catch(error => console.error("Error submitting form:", error));
    });
  }
});
