// Dependencies
// =============================================================
const router = require('express').Router();
const DailyGoals = require('../../models/DailyGoal');
const { checkJwt } = require("../../utils/check-jwt");

// Create Data (Post)
// =============================================================
router.post("/:userID", checkJwt, async (req, res, next) => {
    try {
        const userID = req.params.userID;

        const newGoal = await DailyGoals.create({
            user: userID,
            date: req.body.date,
            water: 0,
            food: 0,
            bad: 0,
        });
        res.status(200).send(newGoal);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Read Data (Get)
// =============================================================
router.get("/:userID", checkJwt, async (req, res, next) => {
    try {
        const latestGoal = await DailyGoals.findOne({ user: req.params.userID }).sort({ date: 'desc' });
        if (!latestGoal) {
            res.status(200).send(false);
        } else {
            console.log(latestGoal);
            res.status(200).send(latestGoal);
        }
    } catch (err) {
        res.status(400).json(err);
    }
})

// Update Data (Put)
// =============================================================
router.put("/:goalID", checkJwt, async (req, res, next) => {
    try {
        const key = req.body.key;
        const value = req.body.value;
        const currentGoal = await DailyGoals.updateOne(
            { _id: req.params.goalID },
            { [key]: value }
        );
        res.status(200).send(currentGoal);
    } catch (err) {
        res.status(400).json(err);
    }
})

// Export
// =============================================================
module.exports = router;
