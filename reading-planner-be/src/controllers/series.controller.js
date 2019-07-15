const Series = require('../models/series.model');

module.exports = {
  async index(req, res) {
    const series = await Series.find().sort('title');
    return res.status(200).json(series);
  },

  async store(req, res) {
    const serie = await Series.create({
      title: req.body.title
    });
    req.io.emit('serie-create', serie);
    return res.status(201).json(serie);
  },

  async remove(req, res) {
    const serie = await Series.findByIdAndDelete(req.params.id);
    req.io.emit('serie-remove', serie);
    return res.status(200).json(serie);
  }
};
