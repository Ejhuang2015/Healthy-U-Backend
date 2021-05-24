// Dependencies
// =============================================================
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Model
// =============================================================
const healthTipSchema = new Schema(
    {
        id: {
            type: Number,
        },
        body: {
            type: String,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const HealthTips = mongoose.model("Habit", healthTipSchema);

// Export
// =============================================================
module.exports = HealthTips;