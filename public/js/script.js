document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

function fetchData() {
  const dataContainer = document.getElementById("dataContainer");

  fetch("http://localhost:3001/api/negocios/all") // Replace with the URL of your data
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const businessCard = createBusinessCard(item);
        dataContainer.appendChild(businessCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      dataContainer.textContent = "Failed to load data";
    });
}

function createBusinessCard(data) {
  const card = document.createElement("div");
  card.className = "business-card";

  const name = document.createElement("h2");
  name.textContent = data.name;
  card.appendChild(name);

  const description = document.createElement("p");
  description.textContent = data.description;
  card.appendChild(description);

  const image = document.createElement("img");
  image.src = data.image;
  image.alt = data.name;
  card.appendChild(image);

  const createdAt = document.createElement("p");
  createdAt.textContent = `Created At: ${new Date(
    data.createdAt
  ).toLocaleString()}`;
  card.appendChild(createdAt);

  const updatedAt = document.createElement("p");
  updatedAt.textContent = `Updated At: ${new Date(
    data.updatedAt
  ).toLocaleString()}`;
  card.appendChild(updatedAt);

  return card;
}
