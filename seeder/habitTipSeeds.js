// Dependencies
// =============================================================
let mongoose = require("mongoose");
let db = require("../models");
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/healthyu", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Seed
// =============================================================
let seed = [
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
db.HealthyU.deleteMany({})
  .then(() => db.HealthyU.collection.insertMany(seed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });