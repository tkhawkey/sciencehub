/* Question bank: A balanced diet (Cambridge Primary Science 5Bp.01)
   Each question is one object. "type" says which activity it is – see the engine (index.html) for the formats.
   In "sentence" questions the right choice is written first (the engine shuffles them); "answers" lists other true versions.
   Food groups follow a healthy-eating plate: fruit and vegetables, starchy foods, protein, dairy, and oils and spreads.
   The picture is from Balanced Plate. Label positions are in % across and down the picture. */
window.BANKS = window.BANKS || [];
(() => {
const P = f => `../balanced-plate/pics/${f}`;
window.BANKS.push({
  id: 'diet', title: 'A balanced diet', icon: '🍽️', objectives: '5Bp.01',
  explorer: { name: 'Balanced Plate', icon: '🍽️', href: '../balanced-plate/index.html' },
  intro: 'The food groups, what each one is for, and why humans and other animals need a balanced diet.',
  items: [

  // ---------- Label the diagram ----------
  { type: 'label', prompt: 'This plate shows how much of each food group makes a balanced diet. Label the food groups.', img: P('plate.svg'), alt: 'A plate divided into five coloured parts of different sizes, with foods in each part',
    labels: [{ text: 'Fruit and vegetables', x: 88, y: 40, px: 67, py: 40 }, { text: 'Starchy foods', x: 14, y: 88, px: 42.7, py: 75.2 }, { text: 'Protein', x: 9, y: 52, px: 32.9, py: 38.9 },
      { text: 'Dairy', x: 12, y: 22, px: 40.5, py: 24.1 }, { text: 'Oils and spreads', x: 78, y: 8, px: 46.9, py: 12.8 }],
    extra: ['Treats', 'Water'],
    explain: 'Fruit and vegetables and starchy foods should make up most of what you eat. You need some protein and dairy, and only a little oil or spread.' },

  // ---------- Match up ----------
  { type: 'match', prompt: 'Match each part of food to its job in your body.',
    pairs: [['Carbohydrates', 'Give us energy to move, play and think'], ['Proteins', 'Help us grow and repair our bodies'], ['Fats', 'Store energy and help keep us warm'], ['Vitamins and minerals', 'Keep us healthy and help our bodies work'], ['Fibre', 'Helps food move through the digestive system']],
    explain: 'A balanced diet gives your body all of these.' },
  { type: 'match', prompt: 'Match each animal to its main food.',
    pairs: [['Giant panda', 'Bamboo'], ['Lion', 'Meat'], ['Cow', 'Grass'], ['Garden bird', 'Seeds and insects']],
    explain: 'Every animal needs a balanced diet, but the right foods are different for each animal.' },

  // ---------- Sort into groups ----------
  { type: 'sort', prompt: 'Which food group is each food in?', groups: ['🥦 Fruit and vegetables', '🍞 Starchy foods', '🍗 Protein', '🧀 Dairy'],
    items: [{ t: 'Apple', g: 0 }, { t: 'Carrot', g: 0 }, { t: 'Rice', g: 1 }, { t: 'Potato', g: 1 }, { t: 'Fish', g: 2 }, { t: 'Beans', g: 2 }, { t: 'Cheese', g: 3 }, { t: 'Yoghurt', g: 3 }],
    explain: 'Potatoes are vegetables, but they are counted as starchy foods because they give us lots of energy.' },
  { type: 'sort', prompt: 'Should we eat these often, or only sometimes?', groups: ['✅ Often, every day', '🍰 Sometimes, in small amounts'],
    items: [{ t: 'Fruit', g: 0 }, { t: 'Vegetables', g: 0 }, { t: 'Rice and pasta', g: 0 }, { t: 'Water', g: 0 }, { t: 'Cake', g: 1 }, { t: 'Sweets', g: 1 }, { t: 'Crisps', g: 1 }, { t: 'Fizzy drinks', g: 1 }],
    explain: 'Treats are fine sometimes, in small amounts. Most of a balanced diet is fruit, vegetables and starchy food.' },

  // ---------- Fill the gaps ----------
  { type: 'cloze', prompt: 'Fill the gaps about a balanced diet.',
    text: 'A {balanced} diet has foods from all the food groups, in the right amounts. You should eat at least {5} portions of fruit and vegetables a day. The best drink is {water}.',
    extra: ['fizzy', '1', 'sweets'],
    explain: 'Eating a balanced diet, with enough food, keeps you healthy.' },
  { type: 'cloze', prompt: 'Fill the gaps about animals.',
    text: 'Animals need a balanced diet too. A lion is a {carnivore}: it eats meat. A cow is a {herbivore}: it eats plants. Humans eat both plants and animals, so we are {omnivores}.',
    extra: ['vegetable', 'insect'],
    explain: 'What is balanced is different for each animal, but every animal needs the right food and water to be healthy.' },

  // ---------- True or false ----------
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'A balanced diet means eating only fruit and vegetables.', a: false, why: 'A balanced diet has foods from all the groups: fruit and vegetables, starchy foods, protein, dairy and a little oil.' },
      { s: 'Proteins help your body to grow and repair itself.', a: true, why: 'Meat, fish, eggs, beans and nuts are all good sources of protein.' },
      { s: 'Cake and sweets should never be eaten.', a: false, why: 'Treats are fine sometimes, in small amounts.' },
      { s: 'Carbohydrates give you energy.', a: true, why: 'Bread, rice, pasta and potatoes are good sources of carbohydrates.' },
      { s: 'Animals do not need a balanced diet.', a: false, why: 'Animals need a balanced diet too. It is just different for each animal.' },
    ],
    explain: 'Watch out for these common mix-ups!' },
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'Water is part of a healthy diet.', a: true, why: 'Water helps every part of your body work. You need to drink every day.' },
      { s: 'Eating too little food is fine, as long as it is healthy food.', a: false, why: 'You need enough food (an adequate diet) to give you energy and help you grow.' },
      { s: 'Fruit and vegetables have vitamins and minerals.', a: true, why: 'They help keep you healthy. They also have fibre, which helps digestion.' },
      { s: 'A panda\'s balanced diet is almost all bamboo.', a: true, why: 'Pandas eat bamboo for up to 12 hours a day!' },
      { s: 'Fizzy drinks are the best way to stop being thirsty.', a: false, why: 'Fizzy drinks have lots of sugar. Water is the best drink.' },
    ],
    explain: 'Some of these surprise people!' },

  // ---------- Carroll diagram ----------
  { type: 'carroll', prompt: 'Sort these foods into the Carroll diagram.', rows: ['Comes from a plant', 'Comes from an animal'], cols: ['Good source of protein', 'Not a good source of protein'],
    items: [{ t: 'Beans', em: '🫘', r: 0, c: 0 }, { t: 'Nuts', em: '🥜', r: 0, c: 0 }, { t: 'Apple', em: '🍎', r: 0, c: 1 }, { t: 'Rice', em: '🍚', r: 0, c: 1 }, { t: 'Chicken', em: '🍗', r: 1, c: 0 }, { t: 'Egg', em: '🥚', r: 1, c: 0 }, { t: 'Butter', em: '🧈', r: 1, c: 1 }],
    explain: 'Protein comes from animals and from plants. Beans and nuts give protein without any meat.' },

  // ---------- Read the table ----------
  { type: 'table', prompt: 'Four children counted how many portions of fruit and vegetables they ate in one day. Use their results.', caption: 'Portions of fruit and vegetables in one day',
    table: { head: ['Child', 'Portions'], rows: [['Ana', '6'], ['Ben', '2'], ['Cara', '5'], ['Dev', '3']] },
    questions: [
      { q: 'Who ate the most fruit and vegetables?', options: ['Ana', 'Ben', 'Cara', 'Dev'], a: 0, why: 'Ana ate 6 portions.' },
      { q: 'Who ate at least 5 portions?', options: ['Ana and Cara', 'Ben and Dev', 'Only Cara', 'Everyone'], a: 0, why: 'Ana ate 6 and Cara ate 5.' },
      { q: 'How many more portions does Ben need to reach 5 a day?', options: ['2', '3', '4', '5'], a: 1, why: '5 − 2 = 3 more portions.' },
    ],
    explain: 'Try to eat at least 5 portions of fruit and vegetables every day.' },
  { type: 'table', prompt: 'Use the table about zoo animals to answer the questions.', caption: 'What some animals eat',
    table: { head: ['Animal', 'Main foods'], rows: [['Giant panda', 'Bamboo'], ['Lion', 'Meat'], ['Cow', 'Grass and hay'], ['Garden bird', 'Seeds, insects and berries']] },
    questions: [
      { q: 'Which animal eats only meat?', options: ['Giant panda', 'Lion', 'Cow', 'Garden bird'], a: 1, why: 'Lions are carnivores.' },
      { q: 'Which animal eats both plants and animals?', options: ['Giant panda', 'Lion', 'Cow', 'Garden bird'], a: 3, why: 'Seeds and berries come from plants; insects are animals.' },
      { q: 'What do all of these animals need as well as food?', options: ['Water', 'Sweets', 'Bread', 'Milk'], a: 0, why: 'Every animal needs water to drink.' },
    ],
    explain: 'A balanced diet is different for each animal.' },
  // Food labels: amounts are per 100 g (or 100 ml), so the sums use halves, doubles and simple multiples
  { type: 'table', prompt: 'These are parts of the labels on three breakfast cereals. Use them to answer the questions.', caption: 'Each 100 g of cereal contains',
    table: { head: ['Cereal', 'Sugar', 'Fibre'], rows: [['Oat Crunch', '6 g', '10 g'], ['Honey Flakes', '20 g', '5 g'], ['Choco Pops', '36 g', '3 g']] },
    questions: [
      { q: 'Which cereal has the most fibre?', options: ['Oat Crunch', 'Honey Flakes', 'Choco Pops'], a: 0, why: 'Oat Crunch has 10 g of fibre in every 100 g.' },
      { q: 'A bowl of cereal is 50 g. How much sugar is in a bowl of Choco Pops?', options: ['9 g', '18 g', '36 g', '72 g'], a: 1, why: '50 g is half of 100 g, so half of 36 g = 18 g.' },
      { q: 'How much more sugar does Choco Pops have than Oat Crunch, in every 100 g?', options: ['6 g', '16 g', '30 g', '42 g'], a: 2, why: '36 g − 6 g = 30 g more.' },
    ],
    explain: 'Comparing labels helps you choose food with less sugar and more fibre.' },
  { type: 'table', prompt: 'These are parts of the labels on two tins of soup. Each tin holds 400 g.', caption: 'Each 100 g of soup contains',
    table: { head: ['Soup', 'Protein', 'Salt'], rows: [['Tomato soup', '1 g', '0.5 g'], ['Lentil soup', '6 g', '0.5 g']] },
    questions: [
      { q: 'Which soup has more protein?', options: ['Tomato soup', 'Lentil soup', 'They are the same'], a: 1, why: 'Lentils are a good source of protein: 6 g in every 100 g.' },
      { q: 'How much protein is in a whole 400 g tin of lentil soup?', options: ['6 g', '12 g', '24 g', '400 g'], a: 2, why: '400 g is 4 lots of 100 g, so 6 g × 4 = 24 g.' },
      { q: 'Kai eats half a tin (200 g) of tomato soup. How much salt does he eat?', options: ['0.5 g', '1 g', '2 g', '200 g'], a: 1, why: '200 g is double 100 g, so 0.5 g × 2 = 1 g.' },
    ],
    explain: 'Labels show what is in every 100 g, so you can work out how much is in the amount you really eat.' },
  { type: 'table', prompt: 'These are parts of the labels on four drinks.', caption: 'Each 100 ml of drink contains',
    table: { head: ['Drink', 'Sugar'], rows: [['Water', '0 g'], ['Milk', '5 g'], ['Apple juice', '10 g'], ['Cola', '11 g']] },
    questions: [
      { q: 'Which drink has no sugar?', options: ['Water', 'Milk', 'Apple juice', 'Cola'], a: 0, why: 'Water has 0 g of sugar. It is the best drink when you are thirsty.' },
      { q: 'A glass holds 200 ml. How much sugar is in a glass of apple juice?', options: ['10 g', '12 g', '20 g', '200 g'], a: 2, why: '200 ml is double 100 ml, so 10 g × 2 = 20 g.' },
      { q: 'How much more sugar is in 100 ml of cola than in 100 ml of milk?', options: ['5 g', '6 g', '11 g', '16 g'], a: 1, why: '11 g − 5 g = 6 g.' },
    ],
    explain: 'Fruit juice and fizzy drinks have lots of sugar. Water and milk are the best drinks.' },

  // ---------- Odd one out ----------
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['🍞 Bread', '🍚 Rice', '🍗 Chicken', '🍝 Pasta'], odd: 2,
    reasons: ['It is a protein food – the others are starchy foods', 'It is the only one that is cooked', 'It is the only one we eat'], reason: 0,
    explain: 'Bread, rice and pasta give energy. Chicken is a good source of protein, which helps you grow and repair.' },
  { type: 'odd', prompt: 'Which animal is the odd one out?', items: ['🐼 Panda', '🐄 Cow', '🦁 Lion', '🐇 Rabbit'], odd: 2,
    reasons: ['It eats meat – the others eat only plants', 'It is the only one with fur', 'It is the only one that drinks water'], reason: 0,
    explain: 'Lions are carnivores. Pandas, cows and rabbits are herbivores.' },

  // ---------- Build a sentence ----------
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['A balanced diet has', ['lots of different', 'only one kind of'], 'food, in the', ['right', 'biggest possible'], 'amounts.'],
    explain: 'Balanced means the right mix of food groups. Adequate means enough food, but not too much.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Starchy foods like pasta give us', ['energy', 'strong bones'], 'and proteins help us', ['grow and repair', 'stay thirsty'], '.'],
    explain: 'Carbohydrates in starchy foods give energy. Proteins build and repair your body.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Animals', ['need', 'do not need'], 'a balanced diet too, but it is', ['different', 'the same'], 'for each animal.'],
    explain: 'Bamboo for a panda, meat for a lion, grass for a cow: each is balanced for that animal.' },
  ],
});
})();
