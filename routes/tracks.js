const express = require('express');
const router = express.Router();
const  { getItems, createItem } = require('../controllers/tracks');

// TODO: Se creara la ruta de http://localhost:3000/users/ GET, POST, DELETE, PUT

// NOTA: Si el archivo se llama "tracks", la ruta se debe llamar igual, es por motivos de orden y practicos;

router.get('/', getItems);
router.post('/', createItem);

module.exports = router