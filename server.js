// This file will be what creates teh server and listens.
//Additionally it will communicate with the database

const express = require('express');
const app = express();
const port = 3000;

//middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('index.html') 
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
});