// Dependencies
// =============================================================
const router = require('express').Router();
const DailyGoals = require('../../models/DailyGoal');
const { checkJwt } = require("../../utils/check-jwt");

// Create Data (Post)
// =============================================================
router.post("/", checkJwt, async (req, res, next) => {
    try {
        // Get user's latest recorded goal
        const userID = req.body.id;
        const latestGoal = await DailyGoals.findOne({ id: userID }).sort({ x:1 });
        // Get today's date
        const today = new Date(new Date().setHours(0, 0, 0, 0));

        // Check if latest goal is earlier than today...
        if (latestGoal.date < today) {
            const newGoal = await DailyGoals.create({
                user: userID,
                date: today,
                water: 0,
                food: 0,
                sin: 0,
            })
            res.status(200).send({ message: `Welcome to a new day!` });
            // ...Else GET toda's goal
        } else {
            const latestGoal = await DailyGoals.findOne({ id: req.params.userID }).sort({ x: 1 });
            console.log(latestGoal);
            res.status(200).send(latestGoal);
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

// Read Data (Get)
// =============================================================
router.get("/:userID", checkJwt, async (req, res, next) => {
    try {
        const latestGoal = await DailyGoals.findOne({ id: req.params.userID }).sort({ x: 1 });
        console.log(latestGoal);
        res.status(200).send(latestGoal);
    } catch (err) {
        res.status(400).json(err);
    }
})

// Update Data (Put)
// =============================================================

// Export
// =============================================================
module.exports = router;
