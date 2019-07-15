const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  isbn: Number,
  title: String,
  author: [String],
  pages: Number,
  format: String,
  length: Number,
  series: {
    title: String,
    number: Number
  },
  status: String,
  own: Boolean,
  wish: Boolean
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);
