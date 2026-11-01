/* Question bank: Digestion (Cambridge Primary Science 5Bs.04)
   Each question is one object. "type" says which activity it is – see the engine (index.html) for the formats.
   In "sentence" questions the right choice is written first (the engine shuffles them); "answers" lists other true versions.
   Pictures are cut from the Digestion Journey diagram. Label positions are in % across and down the picture. */
window.BANKS = window.BANKS || [];
(() => {
const P = f => `../digestion-journey/pics/${f}`;
window.BANKS.push({
  id: 'digestion', title: 'Digestion', icon: '🍎', objectives: '5Bs.04',
  explorer: { name: 'Digestion Journey', icon: '🍎', href: '../digestion-journey/index.html' },
  intro: 'The parts of the digestive system, what each one does, and how teeth suit the food an animal eats.',
  items: [

  // ---------- Label the diagram ----------
  { type: 'label', prompt: 'Label the digestive system.', img: P('body.svg'), alt: 'A body showing the digestive system',
    credit: 'Organ shapes based on a diagram by Mariana Ruiz Villarreal (public domain)',
    labels: [{ text: 'Mouth', x: 15, y: 13, px: 50, py: 16.9 }, { text: 'Oesophagus', x: 15, y: 36, px: 50, py: 38.4 }, { text: 'Stomach', x: 86, y: 46, px: 58.5, py: 54.4 },
      { text: 'Large intestine', x: 15, y: 64, px: 37.5, py: 73.3 }, { text: 'Small intestine', x: 86, y: 68, px: 50, py: 75 }, { text: 'Rectum', x: 86, y: 88, px: 51, py: 89.3 }, { text: 'Anus', x: 15, y: 93, px: 48.9, py: 93 }],
    extra: ['Heart', 'Lungs'],
    explain: 'Food goes in at the mouth and travels through every one of these parts. Together they make one very long tube.' },
  { type: 'label', prompt: 'This is the inside of the mouth, seen from the side. Label it.', img: P('mouth.svg'), alt: 'A side view of the inside of the mouth and throat',
    credit: 'Based on a diagram by Mariana Ruiz Villarreal (public domain)',
    labels: [{ text: 'Teeth', x: 12, y: 84, px: 34.5, py: 61.9 }, { text: 'Salivary glands', x: 84, y: 28, px: 54.1, py: 56.1 }, { text: 'Oesophagus', x: 86, y: 80, px: 58.2, py: 90.3 }],
    extra: ['Stomach', 'Rectum'],
    explain: 'Teeth chew the food. Salivary glands make saliva to make it soft and wet. Then it is swallowed down the oesophagus.' },
  { type: 'label', prompt: 'These are the lower teeth, seen from above. Label the types of teeth.', img: P('teeth.svg'), alt: 'A curved row of lower teeth seen from above',
    labels: [{ text: 'Incisors', x: 16, y: 12, px: 52.3, py: 14.4 }, { text: 'Canines', x: 86, y: 12, px: 61, py: 22.8 }, { text: 'Molars', x: 88, y: 62, px: 67, py: 55.3 }],
    extra: ['Tusks'],
    explain: 'Incisors at the front bite and cut. Pointed canines grip and tear. Wide molars at the back chew and grind.' },

  // ---------- Put in order ----------
  { type: 'order', prompt: 'Put the parts in the order food travels through them.', first: 'Food goes in', last: 'Waste comes out',
    items: ['Mouth', 'Oesophagus', 'Stomach', 'Small intestine', 'Large intestine', 'Rectum', 'Anus'],
    explain: 'Food only goes one way: mouth, oesophagus, stomach, small intestine, large intestine, rectum and out through the anus.' },
  { type: 'order', prompt: 'Put what happens to an apple in order.', first: 'First', last: 'Last',
    items: ['It is bitten and chewed into small pieces', 'It is swallowed as a soft, wet ball', 'It is churned into a thick mush called chyme', 'Nutrients pass into the blood', 'Water is taken back into the body', 'It is stored as faeces', 'It leaves the body'],
    explain: 'The mouth chews, the oesophagus swallows, the stomach churns, the small intestine takes in nutrients, the large intestine takes back water, the rectum stores, and the anus lets waste out.' },
  { type: 'order', prompt: 'Put these parts in order of how long food stays there, from the shortest time to the longest.', first: 'Shortest', last: 'Longest',
    items: ['Oesophagus', 'Mouth', 'Stomach', 'Large intestine'],
    explain: 'About 7 seconds in the oesophagus, about a minute in the mouth, 2–4 hours in the stomach and 1–2 days in the large intestine.' },

  // ---------- Match up ----------
  { type: 'match', prompt: 'Match each part to its job.',
    pairs: [['Oesophagus', 'Squeezes food down to the stomach'], ['Stomach', 'Churns food with acid and digestive juices'], ['Small intestine', 'Passes nutrients into the blood'], ['Large intestine', 'Takes water back into the body'], ['Rectum', 'Stores faeces until you go to the toilet']],
    explain: 'Each part of the digestive system has its own job to do.' },
  { type: 'match', prompt: 'Match each word to its meaning.',
    pairs: [['Saliva', 'Watery liquid that makes food soft and wet'], ['Chyme', 'The thick mush food becomes in the stomach'], ['Nutrients', 'The useful parts of food that the body needs'], ['Faeces', 'Solid waste that leaves the body'], ['Digestion', 'Breaking food down so the body can use it']],
    explain: 'These are the key words for the journey through the digestive system.' },
  { type: 'match', prompt: 'Match each type of tooth to its job.',
    pairs: [['Incisors', 'Biting and cutting'], ['Canines', 'Gripping and tearing'], ['Molars', 'Chewing and grinding']],
    explain: 'You have all three types of teeth because you eat both plants and meat.' },

  // ---------- Fill the gaps ----------
  { type: 'cloze', prompt: 'Fill the gaps about the mouth.',
    text: 'Your {teeth} bite and chew food into small pieces. {Saliva} from the salivary glands makes it soft and wet. Then you swallow it down the {oesophagus}.',
    extra: ['stomach', 'acid'],
    explain: 'Chewing and saliva make food easy to swallow.' },
  { type: 'cloze', prompt: 'Fill the gaps about the stomach.',
    text: 'The stomach has a muscly wall that {churns} the food. It mixes it with {acid} and digestive juices, which turn it into a thick mush called {chyme}. The acid also kills most {germs}.',
    extra: ['faeces', 'water'],
    explain: 'The stomach squeezes and mixes food for 2–4 hours.' },
  { type: 'cloze', prompt: 'Fill the gaps about the intestines.',
    text: 'In the small intestine, {nutrients} pass through the thin wall into the {blood}, which carries them all around the body. In the large intestine, {water} is taken back into the body, leaving solid waste called {faeces}.',
    extra: ['saliva', 'teeth'],
    explain: 'The small intestine takes in the useful parts of food. The large intestine saves water.' },

  // ---------- True or false ----------
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'Food falls down the oesophagus because of gravity.', a: false, why: 'Muscles in the oesophagus squeeze the food along. That is why you can even swallow upside down!' },
      { s: 'The stomach contains acid.', a: true, why: 'Acid and digestive juices help break food down, and the acid kills most germs.' },
      { s: 'Nutrients pass into the blood in the large intestine.', a: false, why: 'Nutrients pass into the blood in the small intestine. The large intestine takes back water.' },
      { s: 'The small intestine is longer than the large intestine.', a: true, why: 'It is called "small" because it is narrower, but it is much longer – about 6 metres!' },
      { s: 'The rectum stores faeces until you go to the toilet.', a: true, why: 'Faeces then leave the body through the anus.' },
    ],
    explain: 'Watch out for these common mix-ups!' },
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'Saliva makes food soft and wet so it is easy to swallow.', a: true, why: 'Salivary glands make saliva in your mouth.' },
      { s: 'Food spends about 7 seconds in the oesophagus.', a: true, why: 'It is a quick trip. Food stays much longer in the stomach and the intestines.' },
      { s: 'A zebra has long, pointed canines for gripping.', a: false, why: 'A zebra eats grass. Its canines are tiny or missing, with a gap behind its front teeth. Lions have long canines.' },
      { s: 'Food passes through the salivary glands.', a: false, why: 'Salivary glands make saliva, but food never goes through them.' },
      { s: 'Food can take a day or more to travel all the way through the body.', a: true, why: 'Most of that time is spent in the large intestine, taking back water.' },
    ],
    explain: 'Some of these surprise people!' },

  // ---------- Sort into groups ----------
  { type: 'sort', prompt: 'Where does each of these happen?', groups: ['👄 Mouth', '🟠 Stomach', '🔴 Small intestine', '🟢 Large intestine'],
    items: [{ t: 'Teeth chew the food', g: 0 }, { t: 'Saliva makes food wet', g: 0 }, { t: 'Food is churned', g: 1 }, { t: 'Acid kills germs', g: 1 }, { t: 'Nutrients pass into the blood', g: 2 }, { t: 'The longest part of the digestive system', g: 2 }, { t: 'Water goes back into the body', g: 3 }, { t: 'Waste gets drier and firmer', g: 3 }],
    explain: 'Mouth: chewing. Stomach: churning. Small intestine: nutrients. Large intestine: water.' },
  { type: 'sort', prompt: 'Whose teeth are these?', groups: ['🦁 Lion', '🦓 Zebra'],
    items: [{ t: 'Long, pointed canines', g: 0 }, { t: 'Jagged teeth that slice meat', g: 0 }, { t: 'Jaws that chop up and down', g: 0 }, { t: 'Flat molars with ridges', g: 1 }, { t: 'Tiny canines, or none at all', g: 1 }, { t: 'Jaws that slide side to side', g: 1 }, { t: 'Big front teeth for nipping grass', g: 1 }],
    explain: 'A lion\'s teeth are for catching and slicing meat. A zebra\'s teeth are for cutting and grinding grass.' },

  // ---------- Venn diagrams ----------
  { type: 'venn', prompt: 'Sort these animals by what they eat.', sets: ['Eats meat', 'Eats plants'],
    items: [{ t: 'Human', em: '🧒', in: [1, 1] }, { t: 'Bear', em: '🐻', in: [1, 1] }, { t: 'Lion', em: '🦁', in: [1, 0] }, { t: 'Shark', em: '🦈', in: [1, 0] }, { t: 'Zebra', em: '🦓', in: [0, 1] }, { t: 'Rabbit', em: '🐇', in: [0, 1] }, { t: 'Cow', em: '🐄', in: [0, 1] }],
    explain: 'Humans and bears eat both plants and meat, so they go in the middle. That is why we have all three types of teeth.' },

  // ---------- Read the table ----------
  { type: 'table', prompt: 'Use the table to answer the questions.', caption: 'How long food stays in each part',
    table: { head: ['Part', 'Time'], rows: [['Mouth', 'About 1 minute'], ['Oesophagus', 'About 7 seconds'], ['Stomach', '2–4 hours'], ['Small intestine', '3–5 hours'], ['Large intestine', '1–2 days']] },
    questions: [
      { q: 'Where does food stay for the shortest time?', options: ['Mouth', 'Oesophagus', 'Stomach', 'Large intestine'], a: 1, why: 'Only about 7 seconds!' },
      { q: 'Where does food stay for the longest time?', options: ['Stomach', 'Small intestine', 'Large intestine', 'Mouth'], a: 2, why: '1–2 days, while water is slowly taken back into the body.' },
      { q: 'What is the longest food could stay in the stomach?', options: ['2 hours', '3 hours', '4 hours', '5 hours'], a: 2, why: '2–4 hours means between 2 and 4 hours.' },
    ],
    explain: 'Read across a row to find out how long food stays in each part.' },
  { type: 'table', prompt: 'A class counted how many chews it took before they could swallow each food. Use their results.', caption: 'Chews before swallowing (class average)',
    table: { head: ['Food', 'Number of chews'], rows: [['Banana', '8'], ['Bread', '15'], ['Apple', '25'], ['Carrot', '32']] },
    questions: [
      { q: 'Which food needed the most chews?', options: ['Banana', 'Bread', 'Apple', 'Carrot'], a: 3, why: 'Carrot needed 32 chews.' },
      { q: 'How many more chews did apple need than banana?', options: ['8', '15', '17', '33'], a: 2, why: '25 − 8 = 17 chews.' },
      { q: 'Why did banana need the fewest chews?', options: ['It is soft', 'It is yellow', 'It is sweet', 'It is long'], a: 0, why: 'Soft food is quick to chew into pieces small enough to swallow.' },
    ],
    explain: 'The harder the food, the more chewing it needs.' },

  // ---------- Odd one out ----------
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['Stomach', 'Heart', 'Small intestine', 'Oesophagus'], odd: 1,
    reasons: ['Food does not pass through it – the others are part of the digestive system', 'It is the only one that is a muscle', 'It is the only one inside the chest'], reason: 0,
    explain: 'The heart pumps blood. Food passes through the other three.' },
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['Incisors', 'Canines', 'Stomach', 'Molars'], odd: 2,
    reasons: ['It is not a type of tooth – the others are all teeth', 'It is the only one found in the mouth', 'It is the only one that is hard'], reason: 0,
    explain: 'The stomach churns food. Incisors, canines and molars are all teeth in your mouth.' },
  { type: 'odd', prompt: 'Which animal is the odd one out?', items: ['🦁 Lion', '🐺 Wolf', '🦓 Zebra', '🐯 Tiger'], odd: 2,
    reasons: ['It eats only plants – the others eat meat', 'It is the only one with stripes', 'It is the only one with teeth'], reason: 0,
    explain: 'The tiger has stripes too! The zebra is the only one that eats only plants, so it has flat molars for grinding.' },

  // ---------- Build a sentence ----------
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Nutrients pass into the blood in the', ['small', 'large'], 'intestine, and water is taken back in the', ['large', 'small'], 'intestine.'],
    explain: 'Small intestine: nutrients. Large intestine: water.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['The stomach', ['churns', 'chews'], 'food with', ['acid', 'saliva'], 'to make', ['chyme', 'faeces'], '.'],
    explain: 'Teeth chew and saliva is in the mouth. The stomach churns food with acid into chyme.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['A zebra has', ['flat', 'pointed'], 'molars to', ['grind grass', 'slice meat'], '.'],
    explain: 'Flat molars with ridges are perfect for grinding tough grass.' },
  ],
});
})();
