
const mongoose = require('mongoose');

const bookSchema= new mongoose.Schema({
    name: String,
    author: String,
    pages: Number,
    describe: String,
});

const clientSchema= new mongoose.Schema({
    name: String,
    lastName: String,
    age: Number,
    gender:String,
    email:String,
    password:String,
});


const client = mongoose.model("clients", clientSchema);
const book = mongoose.model("books",bookSchema);

module.exports = {
    client,
    book
}