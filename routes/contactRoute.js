const express = require('express');
const { getAllContacts } = require('../controllers/contactContoller');

const router = express.Router();

router.get('/', getAllContacts);

module.exports = router;
