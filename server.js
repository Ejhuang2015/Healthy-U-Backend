// Dependencies
// =============================================================
const path = require('path');
const express = require('express');
const routes = require('./routes');
const cors = require("cors");
const helmet = require("helmet");
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

app.use(function (err, req, res, next) {
    console.log(err);
    res.status(500).send(err.message);
});

// Start
// =============================================================
sequelize.sync({ force: false }).then(() => {
    app.listen(serverPort, () => console.log(`API Server listening on port ${serverPort}`));
});