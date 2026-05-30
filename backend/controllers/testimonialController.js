const Testimonial = require('../models/Testimonial');

exports.getAllTestimonials = async (req, res, next) => {
  try {
    const testimonials = await Testimonial.find().sort('order');
    res.json(testimonials);
  } catch (err) {
    next(err);
  }
};
