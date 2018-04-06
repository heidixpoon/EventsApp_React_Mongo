const express = require('express');
// const db = require('../database/index.js');
const parser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const config = require ('../config.js')

let app = express();

app.use(cors());
app.use(parser.json());
app.use(express.static(__dirname + '/../client/dist'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


app.post('/search', function(req,res) {
  console.log(req)
  axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=${config.API_KEY}&keyword=${req.body.data}`)
  .then(function (response) {
    res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });


});

app.post('/events', function (req, res) {

});

app.get('/events', function (req, res) {

});

let port = 8000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

