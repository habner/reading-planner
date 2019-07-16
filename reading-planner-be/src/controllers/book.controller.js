const Book = require('../models/book.model');

module.exports = {
  async index(req, res) {
    await Book
    .find(req.query)
    .populate('series')
    .sort('author')
    .exec((error, books) => {
      if (error) {return res.status(500).send(error); }
      return res.status(200).json(books);
    });
  },

  async store(req, res) {
    await Book
    .create(req.body, (error, book) => {
      if (error) { return res.status(500).send(error); }
      req.io.emit('book-create', book);
      return res.status(201).json(book);
    });
  },

  async update(req, res) {
    await Book
    .findByIdAndUpdate(req.params.id, req.body)
    .exec((error, book) => {
      if (error) { return res.status(500).send(error); }
      return res.status(200).json(book);
    });
  },

  async remove(req, res) {
    await Book
    .findByIdAndDelete(req.params.id)
    .exec((error, book) => {
      if (error) { return res.status(500).send(error); }
      req.io.emit('book-remove', book);
      return res.status(204).send();
    });
  }
};
