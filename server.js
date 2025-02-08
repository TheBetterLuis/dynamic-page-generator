const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const connectDB = require("./database");
const Page = require("./models/Page");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Route for the home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Endpoint to create a new page
app.post("/create-page", async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPage = new Page({ title, content });
    await newPage.save();
    res.json(newPage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to get all pages
app.get("/pages", async (req, res) => {
  try {
    const pages = await Page.find();
    res.json(pages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
