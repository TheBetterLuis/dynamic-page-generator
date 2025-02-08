document.addEventListener("DOMContentLoaded", () => {
  const pageForm = document.getElementById("pageForm");
  const newPagesDiv = document.getElementById("newPages");

  pageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const pageTitle = document.getElementById("pageTitle").value;
    const pageContent = document.getElementById("pageContent").value;

    // Generate new page content
    const newPage = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>${pageTitle}</title>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <h1>${pageTitle}</h1>
        <p>${pageContent}</p>
        <a href="index.html">Back to Home</a>
      </body>
      </html>
    `;

    // Save new page to localStorage (for demonstration purposes)
    localStorage.setItem(pageTitle, newPage);

    // Create button to access new page
    const newPageButton = document.createElement("button");
    newPageButton.textContent = pageTitle;
    newPageButton.onclick = () => {
      const newWindow = window.open();
      newWindow.document.write(newPage);
    };
    newPagesDiv.appendChild(newPageButton);
  });
});
