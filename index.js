const express = require("express");
const app = express();
require("dotenv").config();
const expressLayouts = require("express-ejs-layouts");
const PORT = process.env.port || 8000;
var bodyparser = require("body-parser");

app.set("view engine", "ejs");

//body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(express.static(__dirname + "/public"));
app.use(expressLayouts);
app.use(require("./server/routes"));

app.listen(PORT, () => {
  console.log(`server is running at port number ${PORT}`);
});
