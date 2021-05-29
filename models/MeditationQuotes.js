// Dependencies
// =============================================================
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Model
// =============================================================
const meditationQuoteSchema = new Schema(
    {
        id: {
            type: Number,
        },
        body: {
            type: String,
        },
    }
);

const MeditationQuotes = mongoose.model("Meditation", meditationQuoteSchema);

// Export
// =============================================================
module.exports = MeditationQuotes;