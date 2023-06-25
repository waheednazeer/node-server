const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const validation = require('../middleware/validate');

router.get('/', studentController.getMsg);
router.get('/students', studentController.getAll);

router.post('/students', validation.saveStudent, studentController.createStudent);
router.put('/:id', validation.saveStudent, studentController.updateStudent);

router.delete('/:id', studentController.deleteStudent);



module.exports = router;