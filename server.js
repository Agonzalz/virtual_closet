// This file will be what creates teh server and listens.
//Additionally it will communicate with the database
// run node --watch server.js for automatic refresh of server. 

const express = require('express');
const app = express();
const port = 3000;
const clothingRoutes = require('./routes/clothing');

//middleware
app.use(express.static('public'));
app.use(express.json());
// app.use('./api', clothingRoutes);

app.get('/', (req, res) => {
    res.sendFile('./index.html'); 
});


app.listen(port, () => {
    console.log(`server listening on port ${port}`)
});