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


// Start seed
// =============================================================
db.HabitTips.deleteMany({})
  .then(() => db.HabitTips.collection.insertMany(habitTip))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });