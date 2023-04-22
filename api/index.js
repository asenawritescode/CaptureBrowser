//Import the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//use dotenv to read .env vars into Node
// require('dotenv').config();

//Create an instance of the Express app
const app = express();

//Enable CORS by using the cors middleware
app.use(cors());

//Enable JSON parsing by using the body-parser middleware
app.use(bodyParser.json());

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to the api" });
});

app.post('/data', (req, res) => {
    console.log(req.body);
    res.json({ "message": "Data recieved" });
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});