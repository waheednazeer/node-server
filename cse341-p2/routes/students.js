const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.get('/', studentController.getMsg);
router.get('/students', studentController.getAll);


router.post('/students', studentController.createStudent);


module.exports = router;