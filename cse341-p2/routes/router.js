const express = require('express');
const router = express.Router();

router.use('/', require('./students'));
router.use('/students', require('./students'));
router.use('/courses', require('./courseRoute.js'));

module.exports = router;