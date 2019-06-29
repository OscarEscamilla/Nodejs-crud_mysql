const express = require('express');

const router = express.Router(); //modulo de express al que le podemos ir agregando rutas

const controller = require('../controllers/customerController.js');




//responde la peticion get de l ruta /
router.get('/', controller.list);

router.post('/add', controller.save);

router.get('/delete/:id', controller.delete);

router.get('/edit/:id', controller.edit);

router.post('/update/:id', controller.update);


module.exports = router; //exportamos las rutas 
