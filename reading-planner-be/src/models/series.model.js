const mongoose = require('mongoose');

const SeriesSchema = new mongoose.Schema({
  title: { type: String, unique: true }
}, {
  timestamps: true
});

SeriesSchema.post('remove', (next) => {
  mongoose
  .model('Book')
  .updateMany({ series: this._id }, { $unset: { series: 1, number: 1 }})
  .then(() => next());
});

module.exports = mongoose.model('Series', SeriesSchema);
