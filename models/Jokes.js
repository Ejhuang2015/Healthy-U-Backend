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
    }
);

const Jokes = mongoose.model("Joke", jokeSchema);

// Export
// =============================================================
module.exports = Jokes;