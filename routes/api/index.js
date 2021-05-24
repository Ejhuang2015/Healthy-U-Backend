const router = require('express').Router();
const userRoutes = require('./userRoutes');
const quoteRoutes = require('./quoteRoutes');

router.use('/quote', quoteRoutes);
router.use('/', userRoutes);

module.exports = router;