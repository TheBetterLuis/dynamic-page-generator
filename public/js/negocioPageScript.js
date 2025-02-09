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
    .then((response) => response.json())
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
  dataContainer.innerHTML = ""; // Clear previous content

  const slider = document.createElement("div");
  slider.className = "slider";

  const list = document.createElement("div");
  list.className = "list";
  slider.appendChild(list);

  const thumbnail = document.createElement("div");
  thumbnail.className = "thumbnail";
  slider.appendChild(thumbnail);

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
      list.appendChild(item);

      const thumbnailItem = document.createElement("div");
      thumbnailItem.className = "item";
      thumbnailItem.innerHTML = `<img src="${product.image}" alt="">`;
      thumbnail.appendChild(thumbnailItem);
    }
  });

  // Append the slider to the data container
  dataContainer.appendChild(slider);
}

/*
oo
ooo
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
*/
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
    .then((response) => response.json())
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
    <div class="list">
      <div class="item">
        <img src="${data.image1}" alt="">
        <div class="content">
          <div class="title">${data.title}</div>
          <div class="type">${data.product1}</div>
          <div class="description">${data.description1}</div>
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
      </div>
      <div class="item">
        <img src="${data.image2}" alt="">
        <div class="content">
          <div class="title">${data.title}</div>
          <div class="type">${data.product2}</div>
          <div class="description">${data.description2}</div>
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
      </div>
      <div class="item">
        <img src="${data.image3}" alt="">
        <div class="content">
          <div class="title">${data.title}</div>
          <div class="type">${data.product3}</div>
          <div class="description">${data.description3}</div>
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
      </div>
      <div class="item">
        <img src="${data.image4}" alt="">
        <div class="content">
          <div class="title">${data.title}</div>
          <div class="type">${data.product4}</div>
          <div class="description">${data.description4}</div>
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
      </div>
    </div>

    <div class="thumbnail">
      <div class="item"><img src="${data.image1}" alt=""></div>
      <div class="item"><img src="${data.image2}" alt=""></div>
      <div class="item"><img src="${data.image3}" alt=""></div>
      <div class="item"><img src="${data.image4}" alt=""></div>
    </div>

    <div class="nexPrevArrows">
      <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
      <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
  `;
}*/

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
    <div class="list">
      <div class="item">
        <img src="${data.image1}" alt="">
        <div class="content">
          <div class="title">${data.title}</div>
          <div class="type">${data.product1}</div>
          <div class="description">${data.description1}</div>
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
      </div>
      <div class="item">
        <img src="${data.image2}" alt="">
        <div class="content">
          <div class="title">${data.title}</div>
          <div class="type">${data.product2}</div>
          <div class="description">${data.description2}</div>
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
      </div>
      <div class="item">
        <img src="${data.image3}" alt="">
        <div class="content">
          <div class="title">${data.title}</div>
          <div class="type">${data.product3}</div>
          <div class="description">${data.description3}</div>
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
      </div>
      <div class="item">
        <img src="${data.image4}" alt="">
        <div class="content">
          <div class="title">${data.title}</div>
          <div class="type">${data.product4}</div>
          <div class="description">${data.description4}</div>
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
      </div>
    </div>

    <div class="thumbnail">
      <div class="item"><img src="${data.image1}" alt=""></div>
      <div class="item"><img src="${data.image2}" alt=""></div>
      <div class="item"><img src="${data.image3}" alt=""></div>
      <div class="item"><img src="${data.image4}" alt=""></div>
    </div>

    <div class="nexPrevArrows">
      <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
      <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
  `;
}
