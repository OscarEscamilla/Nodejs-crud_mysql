const express = require('express');// mandamos traer el modulo express
const path = require('path');//modulo para unir paths
const morgan = require('morgan');//middlewares
const mysql = require('mysql');//modulo para conectar a mysql
const myConnection = require('express-myconnection');
const body_parser = require('body-parser');





const app = express();//asiganmos el modulo a la constante app


//importando rutas de routes

const customerRoutes = require('./routes/customers');


//CONFIGURACIONES DE EXPRESS

// con proceess busca un puerto en el sistema operativo de no encontrar se ejecuta en el 3000
app.set('port', process.env.PORT || 3000);

//establecemos el motor de platillas de la app que es ejs
app.set('view engine', 'ejs');
//establecemos la ruta donde se va encontrar las vistas de la app con ayuda del modulo path
app.set('views', path.join(__dirname, 'views'));
// __dirname nos da la ubicacion de el archivo donde se ejecuta y lo concatenamos con views, con funcion join


//MIDDLEWARES
/*Los middlewares son funciones que se ejecutan antes de una peticion de usuario 
las peticiones son las rutas de nuestra app*/


//nos ayuda a ver que tipo de peticion llega 
app.use(morgan('dev'));

// configuracion de base de datos
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'crud_node'
}, 'single'));

//app.use(express.urlencoded({extended: false}));
//metodo para entender los datos que vienen de el formulario
app.use(body_parser.urlencoded({extended:true}));

//ROUTES

app.use('/', customerRoutes);

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// inicializacion del servidor
app.listen(app.get('port'), () =>{// le decimos a la app que va ejecutarse en el puerto que se obtuvo de set 'port'
    console.log('esta jalando el server');
});

