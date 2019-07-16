const mongoose = require('mongoose');

const SeriesSchema = new mongoose.Schema({
  title: { type: String, unique: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Series', SeriesSchema);
