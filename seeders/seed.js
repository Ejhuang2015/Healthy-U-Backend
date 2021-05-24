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
let healthTip = [
  {
    id: 1,
    body: "A Great pre-workout fuel: A peanut butter and banana or PBJ sandwich"
  },
  {
    id: 2,
    body: "Powered by the Peel: Bananas are snacks ready to roll"
  },
  {
    id: 3,
    body: "Include protein with every meal. Including some protein with every meal can help balance blood sugar."
  },
  {
    id: 4,
    body: "Eat oily fish. According to researchTrusted Source, omega-3 fatty acids in oily fish are essential for cell signaling, gene expression, and brain and eye development."
  },
  {
    id: 5,
    body: "Eat nuts. According to the AHA, eating one serving of nuts daily in place of red or processed meat, french fries, or dessert may benefit health and prevent long-term weight gain."
  },
  {
    id: 6,
    body: "Eating different combinations of foods can be very satisfying and help to curb hunger. Snacks that include fruit can also satisfy a craving for something sweet."
  },
  {
    id: 7,
    body: "Try crunchy vegetables instead of chips with your favorite low-fat salad dressing for dipping"
  },
  {
    id: 8,
    body: "Blend a breakfast smoothie with low-fat milk, frozen strawberries and a banana."
  },
  {
    id: 9,
    body: "Get enough sleep. The importance of getting enough quality sleep cannot be overstated."
  },
  {
    id: 10,
    body: "A Great pre-workout fuel: Greek yogurt with berries"
  },
  {
    id: 11,
    body: "Get enough fiber. According to the AHA, fiber can help improve blood cholesterol levels and lower the risk of heart disease, obesity, and type 2 diabetes."
  },
  {
    id: 12,
    body: "Give your body a rest by fasting. Intermittent fasting involves not eating either overnight or some days of the week. This may reduce energy intake and can have health benefits."
  },
  {
    id: 13,
    body: "Hold the bread or chips until your meal is served. Hunger may drive you to fill up on these foods before your meal arrives."
  },
  {
    id: 14,
    body: "Snacking only when you’re hungry. Eating out of boredom or for emotional reasons can lead to weight gain. Rate your hunger before reaching for a snack and avoid mindless eating."
  },
  {
    id: 15,
    body: "Take care of your gut health with probiotics and fiber. The bacteria in your gut, collectively called the gut microbiota, are incredibly important for overall health."
  },
  {
    id: 16,
    body: "Make sure to eat enough protein. Eating enough protein is vital for optimal health."
  },
  {
    id: 17,
    body: "Drink some water, especially before meals. Drinking enough water can have numerous benefits. Surprisingly, it can boost the number of calories you burn."
  },
  {
    id: 18,
    body: "Avoid bright lights before sleep. When you’re exposed to bright lights in the evening, it may disrupt your production of the sleep hormone melatonin"
  },
  {
    id: 19,
    body: "Use plenty of herbs and spices. Many incredibly healthy herbs and spices exist."
  },
  {
    id: 20,
    body: "A Great pre-workout fuel: Oatmeal with low-fat milk and fruit"
  },
  {
    id: 21,
    body: "Use extra virgin olive oil. Extra virgin olive oil is one of the healthiest vegetable oils."
  },
  {
    id: 22,
    body: "Avoid processed junk food (eat real food instead) Processed junk food is incredibly unhealthy. These foods have been engineered to trigger your pleasure centers, so they trick your brain into overeating — even promoting food addiction in some people (15Trusted Source)."
  },
  {
    id: 23,
    body: "Don’t overcook or burn your meat. Meat can be a nutritious and healthy part of your diet. It’s very high in protein and contains various important nutrients."
  },
  {
    id: 24,
    body: "Track your food intake every now and then. The only way to know exactly how many calories you eat is to weigh your food and use a nutrition tracker."
  },
  {
    id: 25,
    body: "Take care of your relationships. Social relationships are incredibly important not only for your mental well-being but also your physical health."
  },
  {
    id: 26,
    body: "Eat eggs, yolk and all. Whole eggs are so nutritious that they’re often termed “nature’s multivitamin.” 27."
  },
  {
    id: 28,
    body: "Lift Things and Move Around. Using your muscles is extremely important for optimal health. Health/Nutrition Tips29. Reduce sugar. According to researchTrusted Source, dietary sugar, dextrose, and high fructose corn syrup may increase the risk of cardiovascular disease and metabolic syndrome."
  },
  {
    id: 30,
    body: "A Great pre-workout fuel: Apple and peanut or almond butter"
  },
  {
    id: 31,
    body: "Eat varied meals. Many people eat the same meals regularly. Varying foods and trying different cuisines can help someone achieve their required nutrient intakeTrusted Source."
  },
  {
    id: 32,
    body: "Don’t drink coffee late in the day."
  },
  {
    id: 33,
    body: "Try to go to bed and wake up at similar times each day."
  },
  {
    id: 34,
    body: "Eat without electronics: Eat at least one meal today without any electronics. Eating without these distractions is a great way to be mindful, savor your food, and tap into your hunger and fullness cues."
  },
  {
    id: 35,
    body: "Compare labels to limit items high in sodium, saturated fat and added sugars."
  },
  {
    id: 36,
    body: "Take a break: Battling a really strong craving? Tell yourself you can have whatever you’re craving if you are still hungry in 15-20 minutes. In the meantime, have a glass of water"
  },
  {
    id: 37,
    body: "Skip the added sugar: Forego the flavored yogurt at the grocery store! Instead, toss some frozen berries in a container of plain yogurt the night before."
  },
  {
    id: 38,
    body: "Sleep in complete darkness, with no artificial lighting."
  },
  {
    id: 39,
    body: "Go meatless on Mondays: Challenge yourself to go meatless on Mondays as a way to incorporate more plants protein and produce into your diet."
  },
  {
    id: 40,
    body: "Nourish Your Body With Real Foods. The simplest and most effective way to eat healthy is to focus on real foods. Choose unprocessed, whole foods that resemble what they looked like in nature."
  },
  {
    id: 41,
    body: "Flavor your water: Struggling to drink more water? Try adding fresh lemon and lime slices or a small handful of berries to your water to add a refreshing burst of flavor!"
  },
  {
    id: 42,
    body: "Eat the skin: Stop peeling your produce! Did you know that the skin contains a lot of important vitamins, minerals and fiber?"
  },
  {
    id: 43,
    body: "Swap n’ save: Forget the old sandwich breads, buns, pitas, and tortillas. Serve up your favorite protein and veggies in a collard green wrap or romaine lettuce bun."
  },
  {
    id: 44,
    body: "Put your fork down: Mindful eating is a great way to help you focus on your hunger and satiety cues and eat less calories overall."
  },
  {
    id: 45,
    body: "Turn up the tea: Craving sweets? Warm up with a nice cup of herbal tea. With flavors like apple cinnamon, pumpkin pie, and peppermint bark, you’ll curb your sweet tooth in no time!"
  },
  {
    id: 46,
    body: "Don’t skip meals: While people often skip meals to lose weight, it can often have the opposite effect."
  },
  {
    id: 47,
    body: "Chew your food: … not just enough to swallow. Take the time to chew each bite at least 20 times. Not only will this help improve your digestion, but this will also help slow you"
  },
  {
    id: 48,
    body: "Eat something first: Going grocery shopping? Make sure to have a small meal or snack before heading out the door."
  },
  {
    id: 49,
    body: "A Great pre-workout fuel: Handful of nuts and raisins (two parts raisins: one part nuts)"
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
db.HealthTips.deleteMany({})
  .then(() => db.HealthTips.collection.insertMany(healthTip))
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