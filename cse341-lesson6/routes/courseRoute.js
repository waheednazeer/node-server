const express = require('express');
const router = express.Router();
const validation = require('../middleware/validate');
const courseController = require('../controllers/courseController');

router.get('/', courseController.getAllCourse);

router.post('/', validation.saveCourse, courseController.createCourse);


router.put('/:id', validation.saveCourse, courseController.updateCourse);

router.delete('/:id', courseController.deleteCourse);


module.exports = router;