// Function to map MySQL data types to HTML input types
function getInputType(dataType) {
  switch (dataType) {
    case "int":
      return "number";
    case "date":
      return "date";
    case "blob":
      return "file";
    default:
      return "text";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("table-form");
  const tableTitle = document.getElementById("table-title");

  const urlParams = new URLSearchParams(window.location.search);
  const tableName = urlParams.get("table");
  const tupleId = urlParams.get("id");

  if (tableName) {
    tableTitle.innerHTML = `Update ${tableName}`;

    fetch(`http://localhost:3000/api/v1/${tableName}s/${tupleId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // Fetch attribute names dynamically from your backend
        return fetch(`http://localhost:3000/api/v1/${tableName}s/desc`)
          .then((response) => response.json())
          .then((attributes) => {
            attributes.forEach((attribute) => {
              const label = `<label>${attribute.Field}</label><br>`;
              const inputType = getInputType(attribute.Type);
              const requiredAttribute =
                attribute.Null === "NO" ? "required" : "";
              const input = `<input type="${inputType}" name="${
                attribute.Field
              }" value="${data[attribute.Field]}" ${requiredAttribute}>`;
              // console.log(attribute);
              form.innerHTML += `${label}${input}`;
            });
            form.innerHTML +=
              '<button id="form-submit" type="submit">Submit</button>';
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

      // console.log(JSON.stringify(attributeValues));
      // Implement logic to submit the form data to your backend
      // You might use fetch or another method depending on your setup
      fetch(`http://localhost:3000/api/v1/${tableName}s/${tupleId}`, {
        method: "PUT",
        body: JSON.stringify(attributeValues),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error submitting form:", error));
      window.history.go(-1);
    });
  }
});
