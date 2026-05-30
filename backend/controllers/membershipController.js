const Membership = require('../models/Membership');

exports.getAllMemberships = async (req, res, next) => {
  try {
    const memberships = await Membership.find().sort('order');
    res.json(memberships);
  } catch (err) {
    next(err);
  }
};
