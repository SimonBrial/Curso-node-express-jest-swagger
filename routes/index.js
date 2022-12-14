const express = require('express');
const fs = require('fs');
const router = express.Router();

const PATH_ROUTES = __dirname; // Ruta de la carpeta en el equipo

const removeExtension = (fileName) => {
    // TODO: tracks.js [tracks.js]
    return fileName.split('.').shift()
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file) // TODO: index, tracks
    if(name !== 'index') {
        console.log(`cargando ruta ${name}`);
        // TODO: esto es para realizar una carga dinamica de los archivos
        router.use(`/${name}`, require(`./${file}`)); // TODO: http://localhost:3000/ api/tracks
    }
});

module.exports = router;