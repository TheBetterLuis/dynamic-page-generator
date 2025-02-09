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
    .then((response) => response.json())
    .then((data) => {
      // Populate the slider with the fetched data
      populateSlider(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      const dataContainer = document.querySelector(".slider");
      dataContainer.textContent = "Failed to load data";
    });
}

function populateSlider(data) {
  const slider = document.querySelector(".slider .list");
  const thumbnail = document.querySelector(".slider .thumbnail");
  slider.innerHTML = ""; // Clear previous content
  thumbnail.innerHTML = ""; // Clear previous thumbnails

  const products = [
    {
      image: data.image1,
      product: data.product1,
      description: data.description1,
    },
    {
      image: data.image2,
      product: data.product2,
      description: data.description2,
    },
    {
      image: data.image3,
      product: data.product3,
      description: data.description3,
    },
    {
      image: data.image4,
      product: data.product4,
      description: data.description4,
    },
  ];

  products.forEach((product, index) => {
    if (product.image) {
      const item = document.createElement("div");
      item.className = "item";
      item.innerHTML = `
        <img src="${product.image}" alt="">
        <div class="content">
          <div class="title">${data.title}</div>
          <div class="type">${product.product}</div>
          <div class="description">${product.description}</div>
          <div class="button">
            <div class="button-socials">
              <a class="socials" href="mailto:${data.email}">
                <i class="fa-regular fa-envelope"></i>
              </a>
              <a class="socials" href="${data.instagram}">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a class="socials" href="${data.whatsapp}">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a class="socials" href="${data.addressBook}">
                <i class="fa-regular fa-address-book"></i>
              </a>
            </div>
            <a href="${data.location}">
              <div class="Ubicaion-Button">
                <i class="fa-solid fa-map-location-dot location"></i>
                <h1 class="Ubicaion_text">Ubicaion</h1>
              </div>
            </a>
          </div>
        </div>
      `;
      slider.appendChild(item);

      const thumbnailItem = document.createElement("div");
      thumbnailItem.className = "item";
      thumbnailItem.innerHTML = `<img src="${product.image}" alt="">`;
      thumbnail.appendChild(thumbnailItem);
    }
  });
}
