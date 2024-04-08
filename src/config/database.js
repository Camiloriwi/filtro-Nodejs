
const mongoose = require("mongoose");

let books;
let clients;

const connectDB = async ()=>{
    try {
        
        if (!books) {
            books = mongoose.model('books'),require('../models/model'.schema);
        }  
        if (!clients) {
            clients= mongoose.model('clients', require('../models/model').schema);
        }
        await  mongoose.connect('mongodb+srv://camilo:C23JlXoLIvokyukw@filtro.xq3dxlh.mongodb.net/').
        then(()=>{console.log('conneted database')})
        .catch((err)=>{console.log(err)});
    } catch (error) {
        console.error('Failed to connect database:', err);
        process.exit(1);
    }

}


module.exports = connectDB;

// pasword C23JlXoLIvokyukw

// mongodb+srv://camilo:C23JlXoLIvokyukw@filtro.xq3dxlh.mongodb.net/

