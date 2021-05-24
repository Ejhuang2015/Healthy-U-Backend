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
// Health Tips
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

// Meditation Quotes
let meditationQuote = [
  {
    id: 1,
    body: '“Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.” -Viktor E. Frankl',
  },
  {
    id: 2,
    body: '“Healing comes from letting there be room for everything: room for grief, for relief, for misery, for joy.” - Pema Chodron',
  },
  {
    id: 3,
    body: '“Stop all of your doing-ness, all of your thinking. Just be for a while. Even for only a moment. It can change everything.” - Neale D. Walsch',
  },
  {
    id: 4,
    body: '“All the elements for your happiness are already here. There’s no need to run, strive, search or struggle. Just be.” - Thich Nhat Hanh',
  },
  {
    id: 5,
    body: '“Attachment constrains our vision so that we are not able to see things from a wider perspective.” - Dalai Lama',
  },
  {
    id: 6,
    body: '“By letting it go it all gets done. The world is won by those who let it go. But when you try and try. The world is beyond the winning.” -Lao-Tzu',
  },
  {
    id: 7,
    body: '“The more and more you listen, the more and more you hear; the more and more you hear, the deeper and deeper your understanding becomes.” -Dudjom Rinpoche',
  },
  {
    id: 8,
    body: '“Let us always meet each other with smile, for the smile is the beginning of love.” - Mother Teresa',
  },
  {
    id: 9,
    body: '“If you want to be great, make others feel great.” - Ralph Marston',
  },
  {
    id: 10,
    body: '“Have patience. Wait until the mud settles and the water is clear.Remain unmoving until right action arises by itself.” -Lao Tzu',
  },
  {
    id: 11,
    body: '“Adopt the pace of nature: her secret is patience.” -Ralph Waldo Emerson',
  },
  {
    id: 12,
    body: '“Have patience with all things, But, first of all with yourself.” -Saint Francis de Sales',
  },
  {
    id: 13,
    body: '“Man is the only creature that refuses to be what he is.” -Albert Camus',
  },
  {
    id: 14,
    body: '“Where ignorance is our master, there is no possibility of real peace.” -Dalai Lama',
  },
  {
    id: 15,
    body: '“Constant effort and frequent mistakes are the stepping stones to genius.” -Elbert Hubbard',
  },
  {
    id: 16,
    body: '“Work joyfully and peacefully, knowing that right thoughts and right efforts will inevitably bring about right results.” -James Allen',
  },
  {
    id: 17,
    body: '“When we are no longer able to change a situation – we are challenged to change ourselves.” -Viktor E. Frankl',
  },
  {
    id: 18,
    body: '“Difficulties and obstacles, if properly understood and used, can turn out to be an unexpected source of strength.” -Sogyal Rinpoche',
  },
  {
    id: 19,
    body: '“The best way out is always through.” - Robert Frost',
  },
  {
    id: 20,
    body: '“Love is an act of endless forgiveness, a tender look which becomes a habit.” - Peter Ustinov',
  },
  {
    id: 21,
    body: '“There is no revenge so complete as forgiveness.” - Josh Billings',
  },
  {
    id: 22,
    body: '“Appreciate everything, even the ordinary. Especially the ordinary.” - Pema Chodron',
  },
  {
    id: 23,
    body: '“True happiness comes from the joy of deeds well done, the zest of creating things new.” - Antoine de Saint-Exupery',
  },
  {
    id: 24,
    body: '“Perfect happiness is the absence of striving for happiness.” - Chuang Tzu',
  },
  {
    id: 25,
    body: '“Discovering real goodness comes from appreciating very simple experiences.” – Chögyam Trungpa',
  },
  {
    id: 26,
    body: '“Appreciation is an excellent thing. It makes what is excellent in others belong to us, as well.” - Voltaire',
  },
  {
    id: 27,
    body: '“One action produces a reaction; that is karma.” -Lama Yeshe',
  },
  {
    id: 28,
    body: '“Today tell yourself every word I utter will be chosen consciously. I will refrain from complaints, criticism and condemnation.” - D. Chopra',
  },
  {
    id: 29,
    body: '“If you want peace, then let it be the peace of wisdom. That’s enough!”- Ajahn Chah',
  },
  {
    id: 30,
    body: '“If in our daily life we can smile, if we can be peaceful and happy, not only we, but everyone will profit from it.” - Thich Nhat Hanh',
  },
  {
    id: 31,
    body: '“Wherever you go, there you are.” - Jon Kabat-Zinn',
  },
  {
    id: 32,
    body: '“You can’t stop the waves but you can learn how to surf ” – Jon Kabat-Zinn',
  },
  {
    id: 33,
    body: '“When you’re feeling frazzled, put all of your attention on the breath. It’s a portal into the present moment, the best remedy for stress.” - Ellen Barrett',
  },
  {
    id: 34,
    body: '“Remember the blue sky. It may at times be obscured by clouds, but it is always there.” — Andy Puddicombe',
  },
  {
    id: 35,
    body: '“Worrying is stupid. It’s like walking around with an umbrella waiting for it to rain.” - Wiz Khalifa',
  },
  {
    id: 36,
    body: '“Nature does not hurry, yet everything is accomplished.” – Lao Tzu',
  },
  {
    id: 37,
    body: '“A mind is like a parachute. It doesn’t work if it isn’t open.” – Frank Zappa',
  },
  {
    id: 38,
    body: '“Slow down, you’ll get there faster.” — Katherine King',
  },
  {
    id: 39,
    body: '“Almost everything will work again if you unplug it for a few minutes … including you.” — Anne Lamott',
  },
  {
    id: 40,
    body: '“As soon as we wish to be happier, we are no longer happy.” – Walter Landor',
  },
  {
    id: 41,
    body: '“Looking at beauty in the world is the first step of purifying the mind.” – Amit Ray',
  },
  {
    id: 42,
    body: '“When we allow ourselves to embrace the moment, we allow ourselves to live.” — Lisa Bien',
  },
  {
    id: 43,
    body: '“Practicing a mindful moment in the middle of the day, helps to bring you back to center, reset, and move into the rest of your day with greater clarity and focus.” — Christine Agro',
  },
  {
    id: 44,
    body: '“Forever is composed of nows.” – Emily Dickinson',
  },
  {
    id: 45,
    body: '“Few of us ever live in the present. We are forever anticipating what is to come or remembering what has gone.” — Louis L’Amour',
  },
  {
    id: 46,
    body: '“The feeling that any task is a nuisance will soon disappear if it’s done in mindfulness.” – Thich Nhat Hanh',
  },
  {
    id: 47,
    body: '“Mindfulness gives you time. Time gives you choice. Choices, skillfully made, lead to freedom.” – Bhante Henepola Gunaratana',
  },
  {
    id: 48,
    body: '“When we get too caught up in the busyness of the world, we lose connection with one another—and ourselves.” — Jack Kornfield',
  },
  {
    id: 49,
    body: '“The mind is just like a muscle—the more you exercise it, the stronger it gets and the more it can expand.” — Idowu Koyenikan',
  },
]

// Jokes
let joke = [
  {
    id: 1,
    question: "There’s a fine line between a numerator and a denominator.",
    answer: "(…Only a fraction of people will get this clean joke.)"
},
{
    id: 2,
    question: "What do dentists call their x-rays?",
    answer: "Tooth pics!"
},
{
    id: 3,
    question: "Did you hear about the first restaurant to open on the moon?",
    answer: "It had great food, but no atmosphere."
},
{
    id: 4,
    question: "What did one ocean say to the other ocean?",
    answer: "Nothing, it just waved."
},
{
    id: 5,
    question: "Do you want to hear a construction joke?",
    answer: "Sorry, I’m still working on it."
},
{
    id: 6,
    question: "Did you hear about the fire at the circus?",
    answer: "It was in tents!"
},
{
    id: 7,
    question: "Why do ducks have feathers?",
    answer: "To cover their butt quacks!"
},
{
    id: 8,
    question: "What’s the difference between a hippo and a zippo?",
    answer: "One is really heavy and the other’s a little lighter."
},
{
    id: 9,
    question: "What does a nosey pepper do?",
    answer: "It gets jalapeño business."
},
{
    id: 10,
    question: "Why should you never trust stairs?",
    answer: "They’re always up to something."
},
{
    id: 11,
    question: "When does a joke become a ‘dad’ joke?",
    answer: "When it becomes apparent."
},
{
    id: 12,
    question: "Why did the bullet end up losing his job?",
    answer: "He got fired."
},
{
    id: 13,
    question: "What kind of shorts do clouds wear?",
    answer: "Thunderpants"
},
{
    id: 14,
    question: "I entered ten puns in a contest to see which would win.",
    answer: "No pun in ten did."
},
{
    id: 15,
    question: "How do you measure a snake?",
    answer: "In inches—they don’t have feet."
},
{
    id: 16,
    question: "Where does a waitress with only one leg work?",
    answer: "IHOP."
},
{
    id: 17,
    question: "What does a house wear?",
    answer: "Address!"
},
{
    id: 18,
    question: "Why are toilets always so good at poker?",
    answer: "They always get a flush"
},
{
    id: 19,
    question: "Why is Peter Pan always flying?",
    answer: "Because he Neverlands. (I love this joke because it never grows old.)"
},
{
    id: 20,
    question: "You heard the rumor going around about butter?",
    answer: "Never mind, I shouldn’t spread it."
},
{
    id: 21,
    question: "Two windmills are standing on a wind farm. One asks, ‘What’s your favorite kind of music?’",
    answer: "The other replies, ‘I’m a big metal fan.’"
},
{
    id: 22,
    question: "The first rule of the Alzheimer’s club is…",
    answer: "Wait, where are we again?"
},
{
    id: 23,
    question: "I took the shell off of my racing snail, thinking it would make him faster.",
    answer: "But if anything, it made him more sluggish."
},
{
    id: 24,
    question: "What do you get from a pampered cow?",
    answer: "Spoiled milk."
},
{
    id: 25,
    question: "How does NASA organize a party?",
    answer: "They planet."
},
{
    id: 26,
    question: "What’s the best thing about Switzerland?",
    answer: "I don’t know, but the flag is a big plus."
},
{
    id: 27.,
    question: "You know, it was so cold in D.C. the other day, ",
    answer: "I saw a politician with his hands in his own pockets."
},
{
    id: 28,
    question: "How many tickles does it take to get an octopus to laugh?",
    answer: "Ten tickles"
},
{
    id: 29,
    question: "Why doesn’t Dracula have any friends?",
    answer: "Well, honestly, he’s a real pain in the neck."
},
{
    id: 30,
    question: "My teachers told me I’d never amount to much since I procrastinate so much.",
    answer: "I told them, “Just you wait!”"
},
{
    id: 31,
    question: "Why were they called the “dark ages?”",
    answer: "Because there were a lot of knights."
},
{
    id: 32,
    question: "What gets wetter the more it dries?",
    answer: "A towel."
},
{
    id: 33,
    question: "Why aren’t koalas considered bears?",
    answer: "They don’t have the right koala-fications."
},
{
    id: 34,
    question: "How does a farmer mend his overalls?",
    answer: "With cabbage patches."
},
{
    id: 35,
    question: "Want to hear a joke about a roof?",
    answer: "The first one’s on the house."
},
{
    id: 36,
    question: "What’s a pirate’s favorite letter?",
    answer: "You probably think it’s “R” but it be the “C”."
},
{
    id: 37,
    question: "How much teddy bears never want to eat anything?",
    answer: "Because they’re always stuffed."
},
{
    id: 38,
    question: "Did you hear about the cheese factory that exploded in France?",
    answer: "There was nothing left but de Brie."
},
{
    id: 39,
    question: "Where should you go in the room if you’re feeling cold?",
    answer: "The corner—they’re usually 90 degrees."
},
{
    id: 40,
    question: "I can never take my dog to the park because the ducks keep trying to bite him.",
    answer: "I guess that’s what I get for buying a pure bread dog."
},
{
    id: 41,
    question: "What’s the difference between a poorly dressed man on a unicycle and a well-dressed man on a bicycle?",
    answer: "Attire."
},
{
    id: 42,
    question: "What did the Buddhist ask the hot dog vendor?",
    answer: "“Make me one with everything.”"
},
{
    id: 43,
    question: "You know why you never see elephants hiding up in trees?",
    answer: "Because they’re really good at it."
},
{
    id: 44,
    question: "A horse walks into a bar.",
    answer: "The bartender says, “Why the long face?”"
},
{
    id: 45,
    question: "How did the hipster burn his mouth?",
    answer: "He ate his pizza before it was cool."
},
{
    id: 46,
    question: "What do you get when you cross a dyslexic, an insomniac, and an agnostic?",
    answer: "Someone who lays awake at night wondering if there’s a dog."
},
{
    id: 47,
    question: "As a scarecrow, people say I’m outstanding in my field.",
    answer: "But hay, it’s in my jeans."
},
{
    id: 48,
    question: "What should you do if you’re attacked by a group of clowns?",
    answer: "Go straight for the juggler."
},
{
    id: 49,
    question: "I’ve been thinking about taking up meditation.",
    answer: "I figure it’s better than sitting around doing nothing."
},

]

// Users
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
// Seed Meditation Quotes
db.MeditationQuotes.deleteMany({})
  .then(() => db.MeditationQuotes.collection.insertMany(meditationQuote))
  .then(data => {
    console.log(data.result.n + " meditation quote records inserted!");
  }).catch(err => {
    console.error(err);
  });

// Seed Jokes
db.Jokes.deleteMany({})
  .then(() => db.Jokes.collection.insertMany(joke))
  .then(data => {
    console.log(data.result.n + " joke records inserted!");
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