// Dependencies
// =============================================================
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Model
// =============================================================
const userSchema = new Schema(
    {
        id: {
            type: String,
        },
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        avatar: {
            type: String,
        },
    }
);

const Users = mongoose.model("User", userSchema);

// Export
// =============================================================
module.exports = Users;