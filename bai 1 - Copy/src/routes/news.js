    const express = require('express');
    const router = express.Router();

    const newsControllers = require('../app/controllers/NewsControllers');

    // newsControllers.index
    router.get('/:slug', newsControllers.detail);

    router.get('/', newsControllers.index);

    module.exports = router;
