const express = require('express');

const router = express.Router();
const StudentsController = require('../controllers/StudentsController');
const AppController = require('../controllers/AppController');

router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
