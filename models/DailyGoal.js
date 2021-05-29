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
            default: 0,
        },
        food: {
            type: Number,
        },
        sin: {
            type: Number,
        },
    },
);

const DailyGoal = mongoose.model("DailyGoal", goalSchema);

// Export
// =============================================================
module.exports = DailyGoal;