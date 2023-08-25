const router = require('express').Router();

const controller= require('../controller/employeeController.js');

router.get('/employee', controller.getAllEmployees);
router.post('/employee', controller.createEmployee);

module.exports= router;