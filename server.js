var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var db = require("./models");

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//require("./controllers/ingredients_controller.js")(app)

db.sequelize.sync({ force: true }).then(function() {
	app.listen(PORT, function() {
		console.log("Connected to Port: " + PORT)
	});
});
