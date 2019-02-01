"use strict";

const PORT        = 8080;
const ENV         = "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));


// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/form1", (req, res) => {
  res.render("form1");
});

app.get("/form2", (req, res) => {
  res.render("form2");
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});