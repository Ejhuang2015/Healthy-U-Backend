const router = require('express').Router();
const quoteRoutes = require('./quoteRoutes');
const goalRoutes = require('./goalRoutes');
const challengeRoutes = require('./challengeRoutes');
const userRoutes = require('./userRoutes');

router.use('/quote', quoteRoutes);
router.use('/goal', goalRoutes);
router.use('/challenge', challengeRoutes);
router.use('/', userRoutes);

module.exports = router;