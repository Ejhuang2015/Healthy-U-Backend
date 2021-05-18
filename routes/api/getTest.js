// Dependencies
// =============================================================
const router = require('express').Router();
const Users = require('../../models/Users');
const { checkJwt } = require("../../utils/check-jwt");

// Get (Read)
// =============================================================
// User Information from Callback
router.post("/callback", checkJwt, async (req, res, next) => {
   try {
      const user = req.body;
      const checkUserExist = await Users.find({ id: user.id });
      
      if (checkUserExist && checkUserExist.length > 0) {
         res.status(200).send({message: "User already exists"});
      } else {
         const newUser = await Users.create({
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar
         })
         res.status(200).send({message: `${user.name} has been recorded.`});
      }
   } catch (err) {
      res.status(400).json(err);
      console.log("err" + err);
   }
});

// Non-auth route example
router.get("/public-message", (req, res) => {
   const message = { message: "The API doesn't require an access token to share this message." };
   res.status(200).send(message);
});

// Auth required example
router.get("/protected-message", checkJwt, (req, res) => {
   const message = { message: "The API successfully validated your access token. Edit" };
   res.status(200).send(message);
});
 
 module.exports = router;
 