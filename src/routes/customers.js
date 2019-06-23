const express = require('express');

const router = express.Router(); //modulo de express al que le podemos ir agregando rutas

const controller = require('../controllers/customerController.js');




//responde la peticion get de l ruta /
router.get('/', controller.list);

module.exports = router; //exportamos las rutas 
