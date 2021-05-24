// Dependencies
// =============================================================
const router = require('express').Router();
const HealthTips = require('../../models/HealthTips');
const { checkJwt } = require("../../utils/check-jwt");

// Read Data (Get)
// =============================================================
router.get("/random", async (req, res, next) => {
    try {
        await HealthTips.estimatedDocumentCount().exec(function (err, count) {
            var random = Math.floor(Math.random() * count);
            HealthTips.findOne().skip(random).exec(function (err, result) {
                res.status(200).send({message: result.body});
            });
        });
    } catch (err) {
        res.status(400).json(err);
    }
})

// Export
// =============================================================
module.exports = router;
