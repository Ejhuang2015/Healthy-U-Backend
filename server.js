// Dependencies
// =============================================================
const path = require('path');
const express = require('express');
const routes = require('./routes');
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const { clientOrigins, serverPort, sequelize } = require("./config/connections");

// App Variables
// =============================================================
const app = express();

// App Config
// =============================================================
app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(function (err, req, res, next) {
    console.log(err);
    res.status(500).send(err.message);
});

// Start
// =============================================================
sequelize.sync({ force: false }).then(() => {
    app.listen(serverPort, () => console.log(`API Server listening on port ${serverPort}`));
});