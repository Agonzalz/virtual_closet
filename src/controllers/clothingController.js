const model = require('../models/clothingModel');

async function getClothing(req, res) {
    const clothes = await model.getAllClothing();
    res.json(clothes);   
}

async function createClothing(req, res) {
    const item = await model.addClothing(req.body);
    res.status(201).json(item);
}

module.exports = { getClothing, createClothing };