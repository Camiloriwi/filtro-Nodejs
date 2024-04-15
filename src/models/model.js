
const mongoose = require('mongoose');

// creando el schema o modelo libros todos los requerimientos necesarios
const BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    pages: Number,
    describe: String,
});

// creando el schema o modelo clientes con todos los requerimientos necesarios
const ClientSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    age: Number,
    gender: String,
    email: String,
    password: String,
});

// asignadole el modelo que creamos antes a nuestra coleccion de mongodb
const Book = mongoose.model("Books", BookSchema);
const Client = mongoose.model("Clients", ClientSchema);

// exportando las los modelos
module.exports = {
    Book,
    Client
};
