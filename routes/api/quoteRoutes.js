// Dependencies
// =============================================================
const router = require('express').Router();
const HealthTips = require('../../models/HealthTips');
const MeditationQuotes = require('../../models/MeditationQuotes');
const Jokes = require('../../models/Jokes');

// Read Data (Get)
// =============================================================
// Health Tips
router.get("/health/random", async (req, res, next) => {
    try {
        await HealthTips.estimatedDocumentCount().exec(function (err, count) {
            var random = Math.floor(Math.random() * count);
            HealthTips.findOne().skip(random).exec(function (err, result) {
                res.status(200).send({ message: result.body });
            });
        });
    } catch (err) {
        res.status(400).json(err);
    }
})

// Meditation Quotes
router.get("/meditation/random", async (req, res, next) => {
    try {
        await MeditationQuotes.estimatedDocumentCount().exec(function (err, count) {
            var random = Math.floor(Math.random() * count);
            MeditationQuotes.findOne().skip(random).exec(function (err, result) {
                res.status(200).send({ message: result.body });
            });
        });
    } catch (err) {
        res.status(400).json(err);
    }
})

// Jokes
router.get("/joke/random", async (req, res, next) => {
    try {
        await Jokes.estimatedDocumentCount().exec(function (err, count) {
            var random = Math.floor(Math.random() * count);
            Jokes.findOne().skip(random).exec(function (err, result) {
                res.status(200).send({ question: result.question, answer: result.answer });
            });
        });
    } catch (err) {
        res.status(400).json(err);
    }
})

// Export
// =============================================================
module.exports = router;
