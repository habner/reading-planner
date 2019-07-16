const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  isbn: { type: Number, unique: true },
  title: { type: String, required: true },
  author: { type: [String], required: true },
  pages: { type: Number, required: true },
  format: { type: String, enum: ['e-book', 'paperback', 'hardcover', 'audiobook'], required: true },
  length: Number,
  series: { type: mongoose.Schema.Types.ObjectId, ref: 'Series' },
  number: { type: Number, required: function() { return !!this.series } },
  status: { type: String, default: 'not read', enum: ['not read', 'reading', 'read'] },
  own: { type: Boolean, default: false },
  wish: { type: Boolean, default: function() { return !this.own } }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);
