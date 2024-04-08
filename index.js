const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./src/config/database');
const routes = require('./src/routes/ruter');
// const auth = require("./src/midleware/auth");


const app = express();

const port = 3000;
// llamando la funcion que exportamos de connetion con la base de datos
connectDB();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Configura las rutas
app.use('/api', routes);
app.listen(port,()=>{console.log(`connected at http://localhost:${port}`)});




















