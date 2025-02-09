//require dotenv to use variables
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const { dbConnect } = require("./config/mongo");

dbConnect();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

//app.use("/images", express.static(path.join(__dirname, "images")));

//front end
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, "client")));

// Define routes for different pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "about.html"));
});

app.get("/negocio", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "negocio_template.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "contact.html"));
});
//front end

app.use("/api/", require("./routes"));
app.listen(PORT, () => {
  console.log("api is ready");
  console.log(`Server running on port ${PORT}`);
});
