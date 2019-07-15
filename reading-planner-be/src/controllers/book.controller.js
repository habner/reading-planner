const Book = require('../models/book.model');

module.exports = {
  async index(req, res) {
    const books = await Book.find().sort('author');
    return res.status(200).json(books);
  },

  async store(req, res) {
    const book = await Book.create({
      author: req.body.author,
      format: req.body.format,
      isbn: req.body.isbn,
      length: req.body.length,
      own: req.body.own,
      pages: req.body.pages,
      series: {
        title: req.body.series.title,
        number: req.body.series.number
      },
      status: req.body.status,
      title: req.body.title,
      wish: req.body.wish
    });
    req.io.emit('book-create', book);
    return res.status(201).json(book);
  },

  async remove(req, res) {
    const book = await Book.findByIdAndDelete(req.params.id);
    req.io.emit('book-remove', book);
    return res.status(200).json(book);
  }
};
