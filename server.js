var express = require("express");

//this was not part of our initial intructions, but after looking at several answers on stackoverflow and github, 
//I ended up including this to work out some errors kept popping up with the way I was writing things
//The documentation for the npm package is pretty good, but I'm still fuzzy on why my api routes and orm weren't working right before
var methodOverride = require("method-override"); 

var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var router = require("./controllers/burgers_controller.js");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8000; //not nearly as 80s as last week

app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static('public')); 

app.use("/", router);

app.listen(PORT, function() {
	console.log("Listening on PORT " + PORT);
});