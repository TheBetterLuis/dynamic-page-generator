document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

function fetchData() {
  const dataContainer = document.getElementById("SECTION_CARDS");

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
/*
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
  */
function createBusinessCard(data) {
  const card = document.createElement("div");
  card.id = "Card";
  card.className = "business-card";

  const imgBox = document.createElement("div");
  imgBox.className = "Img_Box";
  card.appendChild(imgBox);

  const img = document.createElement("img");
  img.className = "Img_Negocio";
  img.src = data.image; // Adjusted path based on your update
  img.alt = data.name;
  imgBox.appendChild(img);

  const textBox = document.createElement("div");
  textBox.className = "Text_Box";
  card.appendChild(textBox);

  const title = document.createElement("h1");
  title.className = "TITLE_Negocio";
  title.textContent = data.name;
  textBox.appendChild(title);

  const description = document.createElement("h3");
  description.className = "DESCRIPTION_Negocio";
  description.textContent = data.description;
  textBox.appendChild(description);

  const buttonBox = document.createElement("div");
  buttonBox.id = "Button_Box";
  card.appendChild(buttonBox);

  const buttonIcon = document.createElement("div");
  buttonIcon.className = "button-icon";
  buttonBox.appendChild(buttonIcon);

  const icon = document.createElement("div");
  icon.className = "icon";
  buttonIcon.appendChild(icon);

  const i = document.createElement("i");
  i.id = "style_icon_negocio";
  i.className = "fa-solid fa-store fa-bounce";
  icon.appendChild(i);

  const cube = document.createElement("div");
  cube.className = "cube";
  buttonIcon.appendChild(cube);

  const front = document.createElement("span");
  front.className = "side front";
  front.textContent = "Ver mas..";
  cube.appendChild(front);

  const top = document.createElement("span");
  top.className = "side top";
  cube.appendChild(top);

  return card;
}
