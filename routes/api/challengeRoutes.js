// Dependencies
// =============================================================
const router = require('express').Router();
const Challenges = require('../../models/Challenge');
const { checkJwt } = require("../../utils/check-jwt");

// Create Data (Post)
// =============================================================
router.post("/:userID", checkJwt, async (req, res, next) => {
    try {
        // 49 days array
        const daysArr = [];
        // Loop 49 times 
        for (i=0; i < 49; i++) {
            // Get today's date + i days
            const nextDate = new Date(req.body.date);
            nextDate.setDate(nextDate.getDate() + i);
            const dayObj = {
                day: i+1,
                date: nextDate,
                finish: false,
            };
            daysArr.push(dayObj);
        }

        // Create new challenge
        await Challenges.create({
            user: req.params.userID,
            date: req.body.date,
            title: req.body.title,
            desc: req.body.desc,
            days: daysArr,
        })
        res.status(200).send({ message: `'${req.body.title}' challenge created!` });

    } catch (err) {
        res.status(400).json(err);
    }
});

// Check if challenge is over
router.post("/finished/:userID", checkJwt, async (req, res, next) => {
    try {
        // Get the latest challenge
        const latestChallenge = await Challenges.findOne({ user: req.params.userID }).sort({ date: -1 });
        // Get today's date
        const today = req.body.date;
        // Check if user has challenge
        if (latestChallenge){
            // Return true if latest challenge is older than 49 days...
            if (latestChallenge.days[48].date < today) {
                res.status(200).send({challenge: true});
            } else {
                // Else return false (challenge is still in effect)
                res.status(200).send({challenge: false});
            }
        } else {
            res.status(200).send({challenge: true})
        }
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
})

// Read Data (Get)
// =============================================================
// Get latest Challenge
router.get("/:userID", checkJwt, async (req, res, next) => {
    try {
        const latestChallenge = await Challenges.findOne({ user: req.params.userID }).sort({ date: -1 });
        res.status(200).send(latestChallenge);
    } catch (err) {
        res.status(400).json(err);
    }
})

// Update Data (Put)
// =============================================================
router.put("/:userID", checkJwt, async (req, res, next) => {
    const today = req.body.date;
    try {
        // Update current tile
        const currentTile = await Challenges.updateOne(
            { user: req.params.userID, 'days.date': today },
            {
                "$set": {"days.$.finish": req.body.finish}
            }
        ).sort({ date: -1 });
        res.status(200).send(currentTile);
    } catch (err) {
        res.status(400).json(err);
    }
})

// Export
// =============================================================
module.exports = router;
