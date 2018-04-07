const express = require('express');
const db = require('../database/index.js');
const parser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const config = require ('../config.js')

let app = express();

app.use(cors());
app.use(parser.json());
app.use(express.static(__dirname + '/../client/dist'));


app.post('/search', function(req,res) {
  axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=3&apikey=${config.API_KEY}&keyword=${req.body.data}`)
  .then(function (response) {
    res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });


});

app.post('/events', function (req, res) {
  db.save(JSON.stringify(req.body.data)).then(() => {res.status(200).send();})
});

app.get('/events', function (req, res) {

});

let port = 8000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

