// Dependencies
// =============================================================
const router = require('express').Router();
const { checkJwt } = require("../../utils/check-jwt");

// Get (Read)
// =============================================================
// Non-auth route example
router.get("/public-message", (req, res) => {
   const message = "The API doesn't require an access token to share this message.";
   res.status(200).send(message);
});

// Auth required example
router.get("/protected-message", checkJwt, (req, res) => {
   const message = "The API successfully validated your access token.";
   res.status(200).send(message);
});
 
 module.exports = router;
 