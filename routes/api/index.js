const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tipRoutes = require('./tipRoutes');

router.use('/tips', tipRoutes);
router.use('/', userRoutes);

module.exports = router;