const { validationResult } = require('express-validator');
const Contact = require('../models/Contact');

exports.submitContact = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Validation error', errors: errors.array() });
    }

    const { name, email, phone, subject, message } = req.body;

    await Contact.create({ name, email, phone, subject, message });

    res.status(201).json({ message: 'Message received. We will be in touch soon.' });
  } catch (err) {
    next(err);
  }
};
