const Series = require('../models/series.model');

module.exports = {
  async index(req, res) {
    await Series
    .find()
    .populate('books')
    .sort('title')
    .exec((error, series) => {
      if (error) { return res.status(500).send(error); }
      return res.status(200).json(series);
    });
  },

  async store(req, res) {
    await Series
    .create(req.body)
    .exec((error, serie) => {
      if (error) { return res.status(500).send(error); }
      req.io.emit('serie-create', serie);
      return res.status(201).json(serie);
    });
  },

  async remove(req, res) {
    await Series
    .findByIdAndDelete(req.params.id)
    .exec((error, serie) => {
      if (error) { return res.status(500).send(error); }
      req.io.emit('serie-remove', serie);
      return res.status(204).send();
    });
  }
};
