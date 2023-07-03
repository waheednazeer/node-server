const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');
const router = express.Router();
const utilities = require('../utilities/index.js');
const validation = require('../middleware/validate');
const courseController = require('../controllers/courseController');

router.get('/', requiresAuth(), utilities.Util.handleErrors(courseController.getAllCourse));
//utilities.Util.handleErrors(courseController.deleteCourse)

router.post('/', requiresAuth(), validation.saveCourse, utilities.Util.handleErrors(courseController.createCourse));


router.put('/:id', requiresAuth(), validation.saveCourse, utilities.Util.handleErrors(courseController.updateCourse));

router.delete('/:id', requiresAuth(), utilities.Util.handleErrors(courseController.deleteCourse));


module.exports = router;