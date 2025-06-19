const express = require('express');
const router = express.Router();
const controller = require('../controllers/clothingController');

router.get('/', controller.getClothing);
router.post('/', controller.createClothing);

module.exports = router;

