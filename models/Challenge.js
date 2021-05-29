// Dependencies
// =============================================================
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Model
// =============================================================
const daysSchema = new Schema(
    {
        day: {
            type: Number,
        },
        date: {
            type: Date,
            default: Date(new Date().setHours(0,0,0,0)),
        },
        finish: {
            type: Boolean,
            default: false,
        }
    }
);

const challengeSchema = new Schema(
    {
        user: {
            type: String,
        },
        date: {
            type: Date,
            default: Date(new Date().setHours(0,0,0,0)),
        },
        title: {
            type: String,
        },
        desc: {
            type: String,
        },
        days: [daysSchema]
    }
);

const Challenge = mongoose.model("Challenge", challengeSchema);

// Export
// =============================================================
module.exports = Challenge;