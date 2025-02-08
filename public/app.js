document.addEventListener("DOMContentLoaded", () => {
  const pageForm = document.getElementById("pageForm");
  const newPagesDiv = document.getElementById("newPages");

  // Fetch existing pages from the server
  fetch("/pages")
    .then((response) => response.json())
    .then((pages) => {
      pages.forEach((page) => {
        createPageButton(page.title, page.content);
      });
    })
    .catch((error) => console.error("Error fetching pages:", error));

  pageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const pageTitle = document.getElementById("pageTitle").value;
    const pageContent = document.getElementById("pageContent").value;

    // Save new page to the server
    fetch("/create-page", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: pageTitle, content: pageContent }),
    })
      .then((response) => response.json())
      .then((data) => {
        createPageButton(pageTitle, pageContent);
      })
      .catch((error) => console.error("Error creating page:", error));
  });

  function createPageButton(title, content) {
    const newPageButton = document.createElement("button");
    newPageButton.textContent = title;
    newPageButton.onclick = () => {
      const newWindow = window.open();
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>${title}</title>
          <link rel="stylesheet" href="styles.css">
        </head>
        <body>
          <h1>${title}</h1>
          <p>${content}</p>
          <a href="index.html">Back to Home</a>
        </body>
        </html>
      `);
    };
    newPagesDiv.appendChild(newPageButton);
  }
});
