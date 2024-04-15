
// llamando la biblioteca mongoose oasignandosela a una  constante
const mongoose = require("mongoose");


// funcion para realizar la conexion ala base de datos

const connectDB = async ()=>{
    try {
        
        // if (!Book) {
        //     Book = mongoose.model('books');
        // }
        // if (!Client) {
        //     Client= mongoose.model('clients');
        // }
        await  mongoose.connect('mongodb+srv://camilo:C23JlXoLIvokyukw@filtro.xq3dxlh.mongodb.net/').
        then(()=>{console.log('conneted database')})
        .catch((err)=>{console.log(err)});
    } catch (error) {
        console.error('Failed to connect database:', error);
        process.exit(1);
    }

};

// exportando la funcion de  connectDB
module.exports = connectDB;

