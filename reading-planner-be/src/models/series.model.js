const mongoose = require('mongoose');

const SeriesSchema = new mongoose.Schema({
  title: String
});

module.exports = mongoose.model('Series', SeriesSchema);
