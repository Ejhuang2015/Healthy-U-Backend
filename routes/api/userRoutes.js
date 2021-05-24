// Dependencies
// =============================================================
const router = require('express').Router();
const Users = require('../../models/Users');
const { checkJwt } = require("../../utils/check-jwt");
const { upload } = require("../../utils/upload");

// Create Data (Post)
// =============================================================
// Create user data from Auth0 and return message
router.post("/callback", checkJwt, async (req, res, next) => {
   try {
      const user = req.body;
      const existingUser = await Users.find({ id: user.id });

      if (existingUser && existingUser.length > 0) {
         res.status(200).send({ message: `Welcome back ${existingUser[0].name}!` });
      } else {
         const newUser = await Users.create({
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar
         })
         res.status(200).send({ message: `Greetings ${user.name}, welcome to Healthy U!` });
      }
   } catch (err) {
      res.status(400).json(err);
   }
});

// Read Data (Get)
// =============================================================
router.get("/:id", checkJwt, async (req, res, next) => {
   try {
      const userData = await Users.findOne({ id: req.params.id });
      res.status(200).send(userData);
   } catch (err) {
      res.status(400).json(err);
   }
})

// Update Data (Put)
// =============================================================
router.put("/:id", upload.single('avatar'), async (req, res, next) => {
   try {
      await Users.updateOne(
         { id: req.params.id },
         { 
            name: req.body.name,
            email: req.body.email,
            avatar: req.file.location,
         }
      )
      res.status(200).send({ message: "Profile successfully updated" });
   } catch (err) {
      res.status(400).json(err);
   }
})

// Export
// =============================================================
module.exports = router;
