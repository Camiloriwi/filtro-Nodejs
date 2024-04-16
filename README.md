
---
# Book and Client Management Project with Node.js and MongoDB

This project is a simple application for managing books and clients using Node.js and MongoDB. It provides an API for creating, updating, retrieving, and deleting books and clients, as well as user authentication.

## Folder Structure

```plaintext
project/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   |── routes/
|
|── index.js
├── createclient.html
├── createbook.html
├── login.html
├── README.md
```

- `src/`: Contains the main project files.
    - `config/`: Database configuration.
    - `controllers/`: Business logic controllers.
    - `models/`: Data models for the database.
    - `routes/`: API routes.
    - `index.js`: Main server file.
- `createclient.html`: HTML form for creating a client.
- `createbook.html`: HTML form for creating a book.
- `login.html`: HTML form for logging in.

## Requirements

- Node.js
- MongoDB
- express
- npm or yarn

## Installation

1. Clone the repository:

    ```bash
    git clone `https://github.com/Camiloriwi/filtro-Nodejs.git`
    ```

2. Install dependencies:

    ## bash
    cd project
    `npm install`
   

## Configuration

Edit the `src/config/database.js` file to configure the connection to your MongoDB database.

## Execution

1. Start the server:

    ## bash
    initialize
   ` npm start`
   

The server will start at `http://localhost:3000`.

## Endpoints

### Clients

- `POST /api/newClient`: Create a new client.
- `POST /api/login`: Log in.
- `GET /api/allClient`: Get all clients.
- `GET /api/id/:_id`: Get a client by ID.
- `GET /api/name/:email`: Get a client by email.
- `GET /api/age/:age`: Get clients by age.
- `GET /api/gender/:gender`: Get clients by gender.
- `PUT /api/update/:_id`: Update a client.
- `DELETE /api/delete/:_id`: Delete a client.

### Books

- `POST /api/newBook`: Create a new book.
- `GET /api/allBook`: Get all books.
- `GET /api/idBook/:_id`: Get a book by ID.
- `PUT /api/update/:_id`: Update a book.
- `DELETE /api/delete/:_id`: Delete a book.
- `GET /api/author/:author`: Get books by author.
- `GET /api/pages/:pages`: Get books by number of pages.
- `GET /api/nameBook/:name`: Get books by name.



## collection  curl

## Books
curl --location `http://localhost:3000/api/allBook`
curl --location `http://localhost:3000/api/idBook/66148eed6acecb9dae8c3f68`
curl --location `http://localhost:3000/api/nameBook/esteban`
curl --location `http://localhost:3000/api/author/esteban`
curl --location `http://localhost:3000/api/pages/23`
curl --location --request PUT `http://localhost:3000/api/pages/23`


## clients
curl --location '`ttp://localhost:3000/api/allclient`
curl --location `http://localhost:3000/api/id/6615bde81dde7cf254e65737`
curl --location `http://localhost:3000/api/name/esteban@riwi.io`
curl --location `http://localhost:3000/api/age/18`
curl --location `http://localhost:3000/api/gender/femenino`
curl --location --request GET `http://localhost:3000/api/id/6615bd931dde7cf254e65731` 
curl --location --request PUT `http://localhost:3000/api//update/`



## Contribution

If you want to contribute, please open an issue or send a pull request.

## License

This project is under the MIT License. See the `LICENSE` file for more details.

---