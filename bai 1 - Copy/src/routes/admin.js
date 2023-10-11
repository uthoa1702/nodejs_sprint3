const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController')

router.post('/save', adminController.saveJson)
router.get('/', adminController.listJson)

module.exports = router;

