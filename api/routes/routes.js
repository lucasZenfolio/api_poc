const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');

router.get('/', testController.home);
router.get('/api/v1/test', testController.getTest);

module.exports = router;
