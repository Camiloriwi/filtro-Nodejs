const express = require('express');
const ruter = express.Router();
const { clientControl, bookControl } = require('../controllers/control');




// empoints de el modelo clientes

ruter.post("/newClient",clientControl.createClient);
ruter.post('/login',clientControl.login);
ruter.get('/allClient',clientControl.getAllClient);
ruter.get('/id/:_id',clientControl.getById);
ruter.get('/name/:email',clientControl.getByName);
ruter.get("/age/:age",clientControl.getByage);
ruter.get('/gender/:gender',clientControl.getByGender);
ruter.put('/update/:_id',clientControl.updateClient);
ruter.delete("/delete/:_id",clientControl.deleteClient);


// empoints del modelo libros

ruter.post("/newBook",bookControl.createBook);
ruter.get('/allBook',bookControl.getAllBook);
ruter.get('/idBook/:_id',bookControl.getByIdBook);
ruter.put('/update/:_id',bookControl.updateBook);
ruter.delete("/delete/:_id",bookControl.deleteBook);
ruter.get('/author/:author',bookControl.getByAthor);
ruter.get("/pages/:pages",bookControl.getByPages);
ruter.get('/nameBook/:name',bookControl.getByNames);



module.exports = ruter;






