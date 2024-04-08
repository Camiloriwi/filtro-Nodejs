
const cliente = require('../models/model');
const books = require('../models/model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_secret = "##%dasdsadasd##";





const clientControl = {

    createClient: async (req, res) => {
        try {
            const client = new cliente(req.body);
            client.password = await bcrypt.hash(client.password, 10);
            await client.save();
            res.status(201).json({
                query:'OK',
                success: true,
                status: 200,
                message: "Student created successfully",
                data: client
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: " failed to create student",
                message: error.message
            });
        }
    },
    login: async (req, res) => {
        try {
            
            const { email, password } = req.body;

            const user = await cliente.find({email: email});

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
            const client =  await cliente.find();
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client get successfully",
                data: client
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
            const client = await cliente.findById(req.params._id);
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client found successfully",
                data: client
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
            const client = await cliente.find(req.params.email);
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client found successfully",
                data: client
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
            const hombre = await cliente.find(req.params.age);
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client found successfully",
                data: hombre,
                data:mujer
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
            const hombre = await cliente.find(req.params,{gender: "masculino"});
            const mujer = await cliente.find(req.params,{gender: "femenino"});
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client found successfully",
                data: hombre,
                data:mujer
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
            const client = await cliente.findByIdAndUpdate(req.params._id, req.body, { new: true });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client updated successfully",
                data: client
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: "client not updated",
                message: error.message
            });
        }
    },
    deleteClient: async (req, res) => {
        try {
            const client = await cliente.findByIdAndDelete(req.params._id);
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client deleted successfully",
                data: client
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



const bookControl = {
    
    createBook: async (req, res) => {
        try {
            const book = new books(req.body);
            await book.save();
            res.status(201).json({
                query:'OK',
                success: true,
                status: 200,
                message: "Student created successfully",
                data: book
            });
       } catch (error) {
           res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: " failed to create student",
                message: error.message
           });
       }
   },
    getAllBook:async (req, res)=> {
         try {
            
             const book = await books.find();
             res.json({
                 query:'OK',
                 success: true,
                 status: 200,
                 message: "Student created successfully",
                 data: book
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
            const book = await books.findById(req.params._id);
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client found successfully",
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
    updateBook: async (req, res) => {
        try {
            const book = await books.findByIdAndUpdate(req.params._id, req.body, { new: true });
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client updated successfully",
                data: book
            });
        } catch (error) {
            res.status(500).json({
                query:'failed',
                success: false,
                status: 500,
                message: "client not updated",
                message: error.message
            });
        }
    },
    deleteBook: async (req, res) => {
        try {
            const book = await books.findByIdAndDelete(req.params._id);
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client deleted successfully",
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
    getByAthor: async (req, res) => {
        try {
            const book = await books.find(req.params.author);
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client found successfully",
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
    getByName: async (req, res) => {
        try {
            const book = await books.find(req.params.name);
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client found successfully",
                data: client
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
            const book = await books.find(req.params.pages);
            res.json({
                query:'OK',
                success: true,
                status: 200,
                message: "client found successfully",
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
    }

}

module.exports = {
    clientControl,
    bookControl
}