// Dependencies
// =============================================================
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Model
// =============================================================
const tipSchema = new Schema(
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

const HabitTips = mongoose.model("Habit", tipSchema);

// Export
// =============================================================
module.exports = HabitTips;