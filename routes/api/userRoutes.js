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
      const checkUserExist = await Users.find({ id: user.id });

      if (checkUserExist && checkUserExist.length > 0) {
         res.status(200).send({ message: `Welcome back ${user.name}!` });
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


// TESTING STUFF
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

module.exports = router;


// Notes: When user clicks submit, the image is taken and buffered via multer. Take that image and upload it to the aws s3. Grab the url from s3 and save the url as the new avatar. Update the model as normal.