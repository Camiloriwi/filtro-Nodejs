const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/database');
const routes = require('./src/routes/ruter');


const app = express();
// definiendo el puerto que utilizaremos 
const port = 3000;
// llamando la funcion que exportamos de connetion con la base de datos
connectDB();

// Analiza las solicitudes entrantes con el tipo de contenido application/json.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configura las rutas
app.use('/api', routes);
app.listen(port,()=>{console.log(`connected at http://localhost:${port}`)});





















