
const { Book, Client } = require('../models/model'); 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_secret = "##%adafasdsadasd##";



// creacion del un objeto controlador  del modelo clientes   donde estaran todas nuestras funciones  para realizar las consultas

// enste onjecto usamos  module.exports.clientControl={}  para ir importando todo ala ves

module.exports.clientControl= {

    createClient: async (req, res) => {
        try {
            const clients = new Client(req.body);
            clients.password = await bcrypt.hash(clients.password, 10);
            await clients.save();
            res.status(201).json({
                query:'OK',
                success: true,
                status: 200,
                message: "client created successfully",
                data: clients
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: " failed to create client",
                message: error.message
            });
        }
    },
    login: async (req, res) => {
        try {
            
            const { email, password } = req.body;

            const user = await Client.find({email: email});

            if (!user) {
            return res.status(400).json({message: "Invalid username or password"});
            }
            // comparando la contraseña encriptada con bcrypt.hash  y la ingresada por el usuario con bcrypt.compare
            const isPasswordValid = await bcrypt.compare(password, user[0].password);
            // si las contraseñas no coinciden nos retorna un status 400  que nos indica que  la contraseña no conciden
            if (!isPasswordValid) {
                return res.status(400).json({message: "Invalid username or password"});
            }
            // si las contraseñas coinciden generamos un token que nos servira en este caso por 1 hora
            const token = jwt.sign({userid: user.id }, jwt_secret, {
                expiresIn: "1h"
            })
            // mensaje que indica que el usuario inicio secion exitosamente
            res.json({message: "Logged in successfully", token})


        } catch (error) {
            console.error('Error al loguear el usuario:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    getAllClient:async (req, res) => {
        try {
            const clients =  await Client.find();
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client get successfully",
                data: clients
            });
            
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: error.message

            })
            
        }
        
    },

    getById: async (req, res) => {
        try {
            const clients = await Client.findById(req.params._id);
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client found successfully",
                data: clients
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: error.message
            });
        }
    },

    getByName: async (req, res) => {
        try {
            const clients = await Client.find({email:req.params.email});
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client  name found successfully",
                data: clients
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: error.message
            });
        }
    },
    getByage: async (req, res) => {
        try {
            const edad = await Client.find({age:req.params.age});
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client by age  found successfully",
                data: edad
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: error.message
            });
        }
    },

    getByGender: async (req, res) => {
        try {
            const data = await Client.find({gender:req.params.gender});
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client by gender found successfully",
                data: data
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: error.message
            });
        }
    },

    updateClient: async (req, res) => {
        try {
            const clients = await Client.findByIdAndUpdate(req.params._id, req.body, { new: true });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client updated successfully",
                data: clients
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: error.message
            });
        }
    },
    deleteClient: async (req, res) => {
        try {
            const clients = await Client.findByIdAndDelete(req.params._id);
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client deleted successfully",
                data: clients
            });
        } catch (error) {         
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: error.message
            });
        }
    }
    



}


// creacion del un objeto controlador  del modelo libros   donde estaran todas nuestras funciones  para realizar las consultas

// enste onjecto usamos  module.exports.bookControl={}  para ir importando todo ala ves

module.exports.bookControl = {
    
    createBook: async (req, res) => {
        try {
            const books = new Book(req.body);
            await books.save();
            res.status(201).json({
                query:'OK',
                success: true,
                status: 200,
                message: "book  created successfully",
                data: books
            });
       } catch (error) {
           res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: " failed to create book",
                message: error.message
           });
       }
   },
    getAllBook:async (req, res)=> {
         try {
            
             const books = await Book.find();
             res.json({
                 query:'OK',
                 success: true,
                 status: 200,
                 message: "getAllBook  successfully",
                 data: books
             });


         }catch (error) {
             res.status(500).json({
                 query:'failed',
                 success: false,
                 status: 500,
                 message: error.message

             })
         }
    },
    
    getByIdBook: async (req, res) => {
        try {
            const books = await Book.findById(req.params._id);
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "getByIdBook found successfully",
                data: books
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: error.message
            });
        }
    },
    updateBook: async (req, res) => {
        try {
            const book = await books.findByIdAndUpdate(req.params._id, req.body, { new: true });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "updateBook  successfully",
                data: book
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: error.message
            });
        }
    },
    deleteBook: async (req, res) => {
        try {
            const books = await Book.findByIdAndDelete(req.params._id);
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "deleteBook  successfully",
                data: books
            });
        } catch (error) {         
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: error.message
            });
        }
    },
    getByAthor: async (req, res) => {
        try {
            const books = await Book.find({name:req.params.author});
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "getByAuthor found successfully",
                data: books
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: error.message
            });
        }
    },
    getByNames: async (req, res) => {
        try {
            const books = await Book.find({name:req.params.name});
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "getByNames found successfully",
                data: books
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: error.message
            });
        }
    },
    getByPages: async (req, res) => {
        try {
            const books = await Book.find({pages:req.params.pages});
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "getByPages found successfully",
                data: books
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: error.message
            });
        }
    }

}



  