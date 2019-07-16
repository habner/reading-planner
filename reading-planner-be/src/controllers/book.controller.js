const mongoose = require('mongoose');
const Book = require('../models/book.model');
const Series = require('../models/series.model');

module.exports = {
  async index(req, res) {
    await Book
      .find()
      .populate('series')
      .sort('author')
      .exec((error, books) => {
        if (error) {return res.status(500).send(error); }
        return res.status(200).json(books);
      });
  },

  async store(req, res) {
    // const book = new Book(req.body)
    const series = undefined;
    try {
      series = await Series.findById(new mongoose.Types.ObjectId(req.body.series));
    } catch(e) { return res.status(500).send(e); }
    return res.status(200).send(series);

    // await book
    //   .save()
    //   .exec(async (error, book) => {
    //     if (error) { return res.status(500).send(error); }
    //     series.books.push(book);
    //     await series.save();
    //     req.io.emit('book-create', book);
    //     return res.status(201).json(book);
    //   });
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
