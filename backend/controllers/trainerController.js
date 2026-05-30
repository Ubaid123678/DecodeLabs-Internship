const Trainer = require('../models/Trainer');

exports.getAllTrainers = async (req, res, next) => {
  try {
    const { category } = req.query;
    let filter = {};
    if (category) {
      filter.filterTags = category;
    }
    const trainers = await Trainer.find(filter).sort('order');
    res.json(trainers);
  } catch (err) {
    next(err);
  }
};

exports.getTrainerById = async (req, res, next) => {
  try {
    const trainer = await Trainer.findById(req.params.id);
    if (!trainer) {
      return res.status(404).json({ message: 'Trainer not found' });
    }
    res.json(trainer);
  } catch (err) {
    next(err);
  }
};
