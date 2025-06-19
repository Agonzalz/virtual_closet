// This file will be what creates teh server and listens.
// run node --watch server.js for automatic refresh of server. 

const express = require('express');
const app = express();
const port = 3000;
const clothingRoutes = require('./routes/clothingRoutes.js');
const path = require('path');

//middleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use('/api/clothing', clothingRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html')); 
});


app.listen(port, () => {
    console.log(`server listening on port ${port}`)
});