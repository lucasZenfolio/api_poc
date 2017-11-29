const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.home);
router.get('/api/v1/getAll', userController.getAll);

router.post('/api/v1/create', userController.create);

module.exports = router;
