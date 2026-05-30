const express = require('express');
const { getAllMemberships } = require('../controllers/membershipController');

const router = express.Router();

router.get('/', getAllMemberships);

module.exports = router;
