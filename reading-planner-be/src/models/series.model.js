const mongoose = require('mongoose');

const SeriesSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Series', SeriesSchema);
