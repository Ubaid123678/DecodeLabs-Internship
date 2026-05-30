const express = require('express');
const { getAllClasses, getClassById } = require('../controllers/classController');

const router = express.Router();

router.get('/', getAllClasses);
router.get('/:id', getClassById);

module.exports = router;
