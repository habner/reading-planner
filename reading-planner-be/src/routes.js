const express = require('express');
const BooksController = require('./controllers/book.controller');

const routes = new express.Router();

routes.get('/books', BooksController.index);
routes.post('/books', BooksController.store);
routes.delete('/books/:id', BooksController.remove);

module.exports = routes;
