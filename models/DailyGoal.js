// Dependencies
// =============================================================
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Model
// =============================================================
const goalSchema = new Schema(
    {
        user: {
            type: String,
        },
        date: {
            type: Date,
            default: Date(new Date().setHours(0,0,0,0)),
        },
        water: {
            type: Number,
        },
        food: {
            type: Number,
        },
        bad: {
            type: Number,
        },
    },
);

const DailyGoal = mongoose.model("DailyGoal", goalSchema);

// Export
// =============================================================
module.exports = DailyGoal;