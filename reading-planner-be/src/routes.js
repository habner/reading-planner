const express = require('express');
const BooksController = require('./controllers/book.controller');
const SeriesController = require('./controllers/series.controller');

const routes = new express.Router();

routes.get('/books', BooksController.index);
routes.post('/books', BooksController.store);
routes.put('/books/:id', BooksController.update);
routes.delete('/books/:id', BooksController.remove);

routes.get('/series', SeriesController.index);
routes.post('/series', SeriesController.store);
routes.delete('/series/:id', SeriesController.remove);

module.exports = routes;
