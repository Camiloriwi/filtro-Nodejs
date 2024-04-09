
const mongoose = require("mongoose");



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

module.exports = connectDB;

