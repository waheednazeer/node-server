const express = require('express');
const router = express.Router();
const { auth, requiresAuth } = require('express-openid-connect');
const studentController = require('../controllers/studentController');
const validation = require('../middleware/validate');
const utilities = require('../utilities/index.js');

//utilities.Util.handleErrors(studentController.deleteStudent)

router.get('/', utilities.Util.handleErrors(studentController.getMsg) );
router.get('/students', requiresAuth(), utilities.Util.handleErrors(studentController.getAll));

router.post('/students', requiresAuth(), validation.saveStudent, utilities.Util.handleErrors(studentController.createStudent) );
router.put('/:id', requiresAuth(), validation.saveStudent, utilities.Util.handleErrors(studentController.updateStudent) );

router.delete('/:id', requiresAuth(), utilities.Util.handleErrors(studentController.deleteStudent));



module.exports = router;