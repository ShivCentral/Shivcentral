const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000; // Change if needed

// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, JS, Images)
app.use(express.static("public"));

// Route to render the homepage
app.get("/", (req, res) => {
  res.render("index");
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
