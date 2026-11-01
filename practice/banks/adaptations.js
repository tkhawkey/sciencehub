/* Question bank: Adaptations (Cambridge Primary Science 5Be.01, 5Be.03)
   Each question is one object. "type" says which activity it is – see the engine (index.html) for the formats.
   In "sentence" questions the right choice is written first (the engine shuffles them); "answers" lists other true versions. */
window.BANKS = window.BANKS || [];
(() => {
const P = f => `../adaptation-studio/photos/${f}`;
window.BANKS.push({
  id: 'adaptations', title: 'Adaptations', icon: '🦊', objectives: '5Be.01 · 5Be.03',
  explorer: { name: 'Adaptation Studio', icon: '🦊', href: '../adaptation-studio/index.html' },
  intro: 'How animals and plants are adapted to hot, cold, wet and dry habitats – and how predators and prey are adapted.',
  items: [

  // ---------- Label the diagram ----------
  { type: 'label', prompt: 'Label the adaptations of the polar bear.', img: P('polarbear.jpg'), alt: 'A polar bear leaping between ice floes',
    credit: 'Photo: Arturo de Frias Marques, CC BY-SA 4.0',
    labels: [{ text: 'Small ears', x: 16, y: 12, px: 28, py: 30 }, { text: 'Thick white fur', x: 62, y: 10, px: 52, py: 30 }, { text: 'Huge paws', x: 66, y: 93, px: 82, py: 80 }],
    extra: ['Hump'],
    explain: 'Small ears and thick fur help it keep heat in. Huge paws spread its weight on snow and thin ice.' },
  { type: 'label', prompt: 'Label the adaptations of the fennec fox.', img: P('fennec.jpg'), alt: 'A fennec fox with very large ears',
    credit: 'Photo: Drew Avery, CC BY 2.0',
    labels: [{ text: 'Huge ears', x: 50, y: 10, px: 31, py: 22 }, { text: 'Sandy fur', x: 78, y: 18, px: 62, py: 36 }, { text: 'Furry feet', x: 14, y: 90, px: 33, py: 87 }],
    extra: ['Thick layer of fat'],
    explain: 'Huge ears let heat escape. Sandy fur is camouflage on the sand. Fur on its feet protects them from the hot ground.' },
  { type: 'label', prompt: 'Label the adaptations of the saguaro cactus.', img: P('saguaro.jpg'), alt: 'The arms of a tall saguaro cactus against a blue sky',
    credit: 'Photo: Tomas Castelazo, CC BY-SA 4.0',
    labels: [{ text: 'Spines', x: 86, y: 22, px: 64, py: 40 }, { text: 'Thick stem that stores water', x: 22, y: 10, px: 47, py: 25 }],
    extra: ['Drip tips', 'Big flat leaves'],
    explain: 'Spines are a special kind of leaf that loses very little water. The thick stem stores water for dry times.' },
  { type: 'label', prompt: 'Label the adaptations of the camel.', img: P('camel.jpg'), alt: 'A camel walking towards the camera in the desert',
    credit: 'Photo: albinfo, CC BY-SA 4.0',
    labels: [{ text: 'Hump full of fat', x: 78, y: 9, px: 56, py: 15 }, { text: 'Long eyelashes', x: 14, y: 12, px: 40, py: 24 }, { text: 'Wide, padded feet', x: 78, y: 88, px: 55, py: 80 }],
    extra: ['Hump full of water'],
    explain: 'The hump stores fat, not water! Long eyelashes keep sand out. Wide feet stop it sinking into soft sand.' },

  // ---------- Put in order ----------
  { type: 'order', prompt: 'Put these habitats in order, from the wettest to the driest.', first: 'Wettest', last: 'Driest',
    items: ['Rainforest', 'Woodland', 'Arctic tundra', 'Desert'],
    explain: 'Rainforests get over 2,000 mm of rain a year. Surprisingly, the Arctic tundra is very dry too – but not as dry as a desert.' },
  { type: 'order', prompt: 'Put these foxes in order of ear size, from biggest to smallest.', first: 'Biggest ears', last: 'Smallest ears',
    items: ['Fennec fox (hot desert)', 'Red fox (woodland)', 'Arctic fox (cold Arctic)'],
    explain: 'The hotter the habitat, the bigger the ears. Big ears let heat escape; small ears keep heat in.' },
  { type: 'order', prompt: 'Put the steps of a camouflage investigation in order.', first: 'First', last: 'Last',
    items: ['Predict which colour will be harder to find', 'Time how long it takes to find red bugs', 'Change the bugs to brown', 'Time how long it takes to find brown bugs', 'Compare the times with your prediction'],
    explain: 'Make a prediction first, change one thing, measure, then compare your results with what you predicted.' },

  // ---------- Match up ----------
  { type: 'match', prompt: 'Match each word to its meaning.',
    pairs: [['Habitat', 'The place where an animal or plant lives'], ['Adapted', 'Having features that help it live in its habitat'], ['Predator', 'An animal that hunts other animals for food'], ['Prey', 'An animal that is hunted for food'], ['Camouflage', 'Colours or patterns that help it blend in']],
    explain: 'These five words come up again and again in this topic.' },
  { type: 'match', prompt: 'Match each feature to how it helps.',
    pairs: [['Spines', 'Lose very little water'], ['Drip tips', 'Let rain run off the leaf'], ['Thick layer of fat', 'Keep body heat in'], ['Huge ears', 'Let body heat out'], ['Wide feet', 'Stop it sinking into snow or sand']],
    explain: 'Each adaptation solves a problem in its habitat: too dry, too wet, too cold, too hot or soft ground.' },
  { type: 'match', prompt: 'Match each living thing to its habitat.',
    pairs: [['Saguaro cactus', 'Desert'], ['Arctic willow', 'Arctic'], ['Poison dart frog', 'Rainforest'], ['Hedgehog', 'Woodland']],
    explain: 'Each one has features that suit its own habitat.' },

  // ---------- Fill the gaps ----------
  { type: 'cloze', prompt: 'Fill the gaps.',
    text: 'Animals and plants are {adapted} to their {habitat}. A polar bear has thick {fur} and a layer of {fat} to keep heat {in}.',
    extra: ['out', 'water', 'spines'],
    explain: 'Thick fur and fat keep heat in – just what an animal needs in the freezing Arctic.' },
  { type: 'cloze', prompt: 'Fill the gaps about the cactus.',
    text: 'A cactus has {spines} instead of flat leaves, so it loses less {water}. Its thick {stem} stores water, and its {roots} spread out wide to soak up rain quickly.',
    extra: ['light', 'flowers'],
    explain: 'A cactus is adapted to save water in the dry desert.' },
  { type: 'cloze', prompt: 'Fill the gaps about predators and prey.',
    text: 'Predators usually have eyes at the {front} of their heads, so they can judge {distance}. Prey usually have eyes on the {sides}, so they can spot {danger} coming.',
    extra: ['back', 'food'],
    explain: 'Where the eyes are is a big clue to whether an animal is a predator or prey.' },

  // ---------- True or false ----------
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'A camel\'s hump is full of water.', a: false, why: 'The hump stores fat. The camel uses it as a food store.' },
      { s: 'Cactus spines are a special kind of leaf.', a: true, why: 'Spines are leaves that have a very small surface, so they lose very little water.' },
      { s: 'If you moved a camel to the Arctic, it would grow thick fur to suit its new home.', a: false, why: 'An animal cannot change its body to suit a new place. Camels are adapted to the desert.' },
      { s: 'The fennec fox\'s huge ears help it lose heat.', a: true, why: 'Big ears let lots of heat escape from the body.' },
      { s: 'Arctic plants grow tall to reach the sunlight.', a: false, why: 'They grow low to the ground to stay out of the icy wind.' },
    ],
    explain: 'Watch out for these common mix-ups!' },
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'Most predators have eyes on the sides of their heads.', a: false, why: 'Most predators have eyes at the front, to judge how far away their prey is.' },
      { s: 'Camouflage can help both predators and prey.', a: true, why: 'Prey hide from predators, and predators like the jaguar can creep up on prey unseen.' },
      { s: 'A poison dart frog\'s bright colours help it hide.', a: false, why: 'Its bright colours are a warning to predators: "I am poisonous!"' },
      { s: 'Drip tips help rainwater run off leaves.', a: true, why: 'This stops mould growing on leaves in the wet rainforest.' },
      { s: 'Living in a big group can help prey animals stay safe.', a: true, why: 'More eyes and ears means danger is spotted sooner.' },
    ],
    explain: 'Some of these surprise people!' },

  // ---------- Sort into groups ----------
  { type: 'sort', prompt: 'Which habitat does each feature help in?', groups: ['🏜️ Desert', '❄️ Arctic', '🌧️ Rainforest'],
    items: [{ t: 'Huge ears', g: 0 }, { t: 'Stem that stores water', g: 0 }, { t: 'Sandy colour', g: 0 }, { t: 'Thick layer of fat', g: 1 }, { t: 'Grows low to the ground', g: 1 }, { t: 'White fur', g: 1 }, { t: 'Drip tips on leaves', g: 2 }, { t: 'Sticky toe pads for climbing', g: 2 }, { t: 'Buttress roots', g: 2 }],
    explain: 'Desert features save water and keep cool. Arctic features keep warm. Rainforest features deal with rain, shade and climbing.' },
  { type: 'sort', prompt: 'Is each feature most typical of a predator or of prey?', groups: ['🦁 Predator', '🐇 Prey'],
    items: [{ t: 'Eyes at the front', g: 0 }, { t: 'Sharp claws', g: 0 }, { t: 'Sharp teeth', g: 0 }, { t: 'Spots for hiding before it pounces', g: 0 }, { t: 'Eyes on the sides', g: 1 }, { t: 'Hard shell', g: 1 }, { t: 'Lives in a big herd', g: 1 }, { t: 'Warning colours', g: 1 }],
    explain: 'Predator features help catch food. Prey features help spot danger, hide or stay safe.' },

  // ---------- Venn diagrams ----------
  { type: 'venn', prompt: 'Sort these living things.', sets: ['Has fur', 'Lives in the Arctic'],
    items: [{ t: 'Polar bear', em: '🐻‍❄️', in: [1, 1] }, { t: 'Arctic hare', em: '🐇', in: [1, 1] }, { t: 'Fennec fox', em: '🦊', in: [1, 0] }, { t: 'Camel', em: '🐫', in: [1, 0] }, { t: 'Arctic willow', em: '🌿', in: [0, 1] }, { t: 'Poison dart frog', em: '🐸', in: [0, 0] }, { t: 'Cactus', em: '🌵', in: [0, 0] }],
    explain: 'Polar bears and Arctic hares fit both circles, so they go in the middle. The frog and the cactus fit neither, so they go outside.' },
  { type: 'venn', prompt: 'Sort these animals.', sets: ['Eyes face forwards', 'Lives in the rainforest'],
    items: [{ t: 'Jaguar', em: '🐆', in: [1, 1] }, { t: 'Tawny owl', em: '🦉', in: [1, 0] }, { t: 'Lion', em: '🦁', in: [1, 0] }, { t: 'Poison dart frog', em: '🐸', in: [0, 1] }, { t: 'Roe deer', em: '🦌', in: [0, 0] }, { t: 'Camel', em: '🐫', in: [0, 0] }],
    explain: 'The jaguar is a rainforest predator, so it goes in the middle. Deer and camels have eyes on the sides and don\'t live in the rainforest.' },

  // ---------- Carroll diagrams ----------
  { type: 'carroll', prompt: 'Sort these animals into the Carroll diagram.', rows: ['Predator', 'Prey'], cols: ['Lives in the Arctic', 'Does not live in the Arctic'],
    items: [{ t: 'Polar bear', em: '🐻‍❄️', r: 0, c: 0 }, { t: 'Lion', em: '🦁', r: 0, c: 1 }, { t: 'Tawny owl', em: '🦉', r: 0, c: 1 }, { t: 'Arctic hare', em: '🐇', r: 1, c: 0 }, { t: 'Lemming', em: '🐹', r: 1, c: 0 }, { t: 'Zebra', em: '🦓', r: 1, c: 1 }, { t: 'Roe deer', em: '🦌', r: 1, c: 1 }],
    explain: 'Check both things for each animal: is it a predator or prey, and does it live in the Arctic?' },
  { type: 'carroll', prompt: 'Sort these living things into the Carroll diagram.', rows: ['Plant', 'Animal'], cols: ['Lives in a hot habitat', 'Lives in a cold habitat'],
    items: [{ t: 'Saguaro cactus', em: '🌵', r: 0, c: 0 }, { t: 'Elephant ear plant', em: '🌿', r: 0, c: 0 }, { t: 'Arctic willow', em: '🌱', r: 0, c: 1 }, { t: 'Fennec fox', em: '🦊', r: 1, c: 0 }, { t: 'Poison dart frog', em: '🐸', r: 1, c: 0 }, { t: 'Polar bear', em: '🐻‍❄️', r: 1, c: 1 }, { t: 'Arctic hare', em: '🐇', r: 1, c: 1 }],
    explain: 'Deserts and rainforests are both hot habitats; the Arctic is cold. Check both things for each one: is it a plant or an animal, and is its habitat hot or cold?' },

  // ---------- Read the table ----------
  { type: 'table', prompt: 'Use the table to answer the questions.', caption: 'The weather in four habitats',
    table: { head: ['Habitat', 'July temperature', 'January temperature', 'Rain and snow in a year'], rows: [['Desert (Sahara)', '35 °C', '15 °C', '20 mm'], ['Arctic tundra', '5 °C', '−25 °C', '120 mm'], ['Rainforest (Amazon)', '27 °C', '26 °C', '2,300 mm'], ['Woodland (Slovakia)', '20 °C', '0 °C', '600 mm']] },
    questions: [
      { q: 'Which habitat gets the most rain?', options: ['Desert', 'Arctic tundra', 'Rainforest', 'Woodland'], a: 2, why: '2,300 mm is by far the most.' },
      { q: 'Which habitat has nearly the same temperature all year?', options: ['Desert', 'Arctic tundra', 'Rainforest', 'Woodland'], a: 2, why: '27 °C in July and 26 °C in January.' },
      { q: 'How much colder is the Arctic tundra than the woodland in January?', options: ['5 °C', '20 °C', '25 °C', '30 °C'], a: 2, why: '0 °C take away −25 °C is 25 °C.' },
      { q: 'Which two habitats get the least rain and snow?', options: ['Desert and Arctic tundra', 'Desert and woodland', 'Rainforest and woodland', 'Arctic tundra and woodland'], a: 0, why: 'The Arctic tundra is very dry too! Its plants still need to save water.' },
    ],
    explain: 'Read across a row to find out about one habitat, and down a column to compare habitats.' },
  { type: 'table', prompt: 'A class did a camouflage hunt on a woodland floor. Use their results.', caption: 'Time taken to find 6 bugs',
    table: { head: ['Bug colour', 'Time (seconds)'], rows: [['Red', '7'], ['Yellow', '9'], ['Green', '24'], ['Brown', '38']] },
    questions: [
      { q: 'Which colour was hardest to find?', options: ['Red', 'Yellow', 'Green', 'Brown'], a: 3, why: 'It took the longest time: 38 seconds.' },
      { q: 'How much longer did brown bugs take than red bugs?', options: ['7 seconds', '29 seconds', '31 seconds', '45 seconds'], a: 2, why: '38 − 7 = 31 seconds.' },
      { q: 'Why were the brown bugs hardest to find?', options: ['They were smaller', 'Brown matches the colour of the woodland floor', 'They moved faster', 'There were more of them'], a: 1, why: 'Their colour matched the background. This is camouflage.' },
    ],
    explain: 'The longer it took to find the bugs, the better their camouflage.' },

  // ---------- Odd one out ----------
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['🐻‍❄️ Polar bear', '🦊 Arctic fox', '🐇 Arctic hare', '🐫 Camel'], odd: 3,
    reasons: ['It lives in a hot desert – the others live in the cold Arctic', 'It is the only one with fur', 'It is the only one that eats plants'], reason: 0,
    explain: 'All four have fur. The camel is adapted to the desert, not the Arctic.' },
  { type: 'odd', prompt: 'Which feature is the odd one out?', items: ['Thick fur', 'Small ears', 'Huge ears', 'Layer of fat'], odd: 2,
    reasons: ['It helps an animal lose heat – the others keep heat in', 'It is the only one you can see', 'It only helps in the rainforest'], reason: 0,
    explain: 'Huge ears let heat out, which helps in the desert. The others keep heat in, which helps in the cold.' },
  { type: 'odd', prompt: 'Which animal is the odd one out?', items: ['🐆 Jaguar', '🦁 Lion', '🦉 Owl', '🐇 Rabbit'], odd: 3,
    reasons: ['It is prey with eyes on the sides – the others are predators', 'It is the only one that lives in a group', 'It is the only one with fur'], reason: 0,
    explain: 'The rabbit is prey. Its eyes on the sides help it spot predators coming.' },
  { type: 'odd', prompt: 'Which plant feature is the odd one out?', items: ['Spines', 'Waxy skin', 'Drip tips', 'Stem that stores water'], odd: 2,
    reasons: ['It helps get rid of rain – the others help save water', 'It is the only one on a cactus', 'It helps the plant grow tall'], reason: 0,
    explain: 'Drip tips help in the wet rainforest. The others help a plant survive with very little water.' },

  // ---------- Build a sentence ----------
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['The fennec fox\'s', ['huge', 'tiny'], 'ears help it', ['lose', 'keep'], 'heat in the', ['hot', 'cold'], 'desert.'],
    explain: 'Big ears let heat escape, which helps an animal keep cool in the hot desert.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['A', ['prey', 'predator'], 'animal often has eyes on the sides of its head so it can', ['spot danger all around', 'judge how far away its food is'], '.'],
    explain: 'Eyes on the sides give a wide view, which helps prey spot predators.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['The Arctic willow grows', ['low to the ground', 'very tall'], 'to stay out of the', ['icy wind', 'hot sun'], '.'],
    explain: 'Growing low keeps it out of the wind, and snow covers it like a blanket in winter.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['A polar bear\'s', ['white', 'brown'], 'fur is', ['camouflage', 'a warning'], 'because it matches the', ['snow and ice', 'trees and leaves'], '.'],
    explain: 'Camouflage helps the polar bear creep up on seals without being seen.' },
  ],
});
})();
