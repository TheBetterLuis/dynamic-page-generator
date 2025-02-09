//http://localhost:3001/test/67a8dd237afc07a3d622da0b
/*
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id"); // Assuming the ID is passed as a query parameter

  if (id) {
    fetchNegocioPageData(id);
  } else {
    console.error("No ID provided in URL");
  }
});

function fetchNegocioPageData(id) {
  fetch(`http://localhost:3001/api/negociopage/single/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Populate the slider with the fetched data
      populateSlider(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      const dataContainer = document.querySelector(".data-container");
      dataContainer.textContent = "Failed to load data";
    });
}

function populateSlider(data) {
  const dataContainer = document.querySelector(".data-container");

  dataContainer.innerHTML = `
  <h1>${data.product1}</h1>
  `;
}
*/

const param = "67a8dd237afc07a3d622da0b";
const url = `http://localhost:3001/api/negociopage/single/${param}`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // Handle the data received from the endpoint
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
