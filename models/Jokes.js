// Dependencies
// =============================================================
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Model
// =============================================================
const jokeSchema = new Schema(
    {
        id: {
            type: Number,
        },
        question: {
            type: String,
        },
        answer: {
            type: String,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const Jokes = mongoose.model("Joke", jokeSchema);

// Export
// =============================================================
module.exports = Jokes;