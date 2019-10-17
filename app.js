const express = require('express'),
 app = express(),
 bodyParser = require('body-parser'),
 path = require('path'),
 bikeRentals = require('./data/bikerentals');

 // configure the app to use bodyParser
 app.use(bodyParser.urlencoded({
   extended: true
 }));
 // parse application/json
 app.use(bodyParser.json());

 app.use(express.static(path.join(__dirname, '/public')));

 // Fetch the bike rentals inventory
app.get('/bikerentals',  (req, res) => res.send(bikeRentals));

app.listen(3000);
