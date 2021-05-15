const router = require('express').Router();

const testRoute = require('./getTest');

router.use('/', testRoute);

module.exports = router;