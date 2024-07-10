const path= require("path");
const express = require("express");

const app = express();

app.use(express.json());

require("dotenv").config();

const PORT = process.env.PORT || 5555;

// middleware
const checkDate=require('./middleware/checkDate');
// app.use(checkDate);

app.listen(PORT, (error) => {
  error
    ? console.log("error")
    : console.log(`the server is running at http://127.0.0.1:${PORT}`);
});

 
//template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
  res.render("home");
});
app.get("/contact", function (req, res) {
  res.render("contact");
});
app.get("/services", function (req, res) {
  res.render("services");
});
