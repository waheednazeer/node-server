const express = require('express');
const router = express.Router();
const controller= require('../controllers/controller.js');


router.get('/', controller.printName);
router.get('/story', controller.story);
router.get('/students', controller.getAll);

module.exports= router;