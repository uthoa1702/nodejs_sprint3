const express = require('express');
const router = express.Router();

const newsControllers = require('../app/controllers/SiteControllers');

// newsControllers.index
router.get('/list', newsControllers.list);

router.get('/:slug', newsControllers.detail);
router.get('/', newsControllers.home);

module.exports = router;
