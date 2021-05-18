// Dependencies
// =============================================================
let mongoose = require("mongoose");
let db = require("../models");
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/HealthyU", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Seed
// =============================================================
let habitTip = [
  {
    id: 1,
    body: "Tip number one"
  },
  {
    id: 2,
    body: "Tip number two"
  },
]

let user = [
  {
    id: "test-id-1",
    email: "testUser1@user.com",
    name: "Test User 1",
    avatar: "Avatar URL"
  }
]


// Start seed
// =============================================================
// Seed Habit Tips
db.HabitTips.deleteMany({})
  .then(() => db.HabitTips.collection.insertMany(habitTip))
  .then(data => {
    console.log(data.result.n + " habit tip records inserted!");
  }).catch(err => {
    console.error(err);
});

// Seed Users
db.Users.deleteMany({})
  .then(() => db.Users.collection.insertMany(user))
  .then(data => {
    console.log(data.result.n + " user records inserted!");
    process.exit(0);
  }).catch(err => {
    console.error(err);
    process.exit(1);
});