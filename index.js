// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Set up a route to serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server on port 8080
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

// Do the real
let j = 1;
while(j!=0) {
    console.log(j);
    j++;
}