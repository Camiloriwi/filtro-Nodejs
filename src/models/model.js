
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    pages: Number,
    describe: String,
});

const ClientSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    age: Number,
    gender: String,
    email: String,
    password: String,
});

const Book = mongoose.model("Books", BookSchema);
const Client = mongoose.model("Clients", ClientSchema);

module.exports = {
    Book,
    Client
};
