// express api to recieve data being posted from the client webbreowser
const bodyparser = require('body-parser');
const { json } = require('body-parser');
const express = require('express');

// create express app
const app = express();


// parse requests of content-type - application/json
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // replace * with the domain that's allowed to access the resource
    res.header('Access-Control-Allow-Methods', 'POST'); // add the HTTP methods that are allowed
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // add the allowed request headers
    next();
  });

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to the api" });
});

app.post('/data', (req, res) => {
    console.log(json.toString(req.body));
    res.json({ "message": "Data recieved" });
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});