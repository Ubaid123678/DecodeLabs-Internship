const express = require('express');
const { getAllTrainers, getTrainerById } = require('../controllers/trainerController');

const router = express.Router();

router.get('/', getAllTrainers);
router.get('/:id', getTrainerById);

module.exports = router;
