/* Question bank: Dissolving and separating (Cambridge Primary Science 5Cp.01, 5Cc.02, 5Cc.03)
   Each question is one object. "type" says which activity it is – see the engine (index.html) for the formats.
   In "sentence" questions the right choice is written first (the engine shuffles them).
   Facts match the Dissolving Lab explorer: salt, sugar and instant coffee dissolve in water but not in cooking oil; sand and chalk
   don't dissolve; the mass stays the same; warm water dissolves sugar faster and dissolves more of it; filter paper can't remove
   dissolved salt; evaporating gets the salt back, and a cold lid gets the water back too. Plain words only: no "suspension",
   "saturated" or "solubility". Children never taste anything. */
window.BANKS = window.BANKS || [];
(() => {
window.BANKS.push({
  id: 'dissolving', title: 'Dissolving and separating', icon: '🧂', objectives: '5Cp.01 · 5Cc.02 · 5Cc.03',
  explorer: { name: 'Dissolving Lab', icon: '🧂', href: '../dissolving-lab/index.html' },
  intro: 'What dissolves, and in which liquid? Where does it go? How do you make it dissolve faster, and how do you get it back?',
  items: [

  // ---------- Match up ----------
  { type: 'match', prompt: 'Match each word to its meaning.',
    pairs: [['Solute', 'The solid that dissolves'], ['Solvent', 'The liquid it dissolves in'], ['Solution', 'The see-through liquid you get when a solid dissolves'], ['Dissolve', 'Break up into tiny particles that spread out in a liquid']],
    explain: 'In salt water, salt is the solute, water is the solvent, and salt water is the solution.' },
  { type: 'match', prompt: 'Match each word to its meaning.',
    pairs: [['Mixture', 'Two or more things mixed together that can be separated again'], ['Reversible', 'Can be changed back'], ['Evaporate', 'Turn from a liquid into a gas'], ['Condense', 'Turn from a gas back into a liquid']],
    explain: 'Dissolving is reversible: evaporate the water, and the solid is left behind.' },
  { type: 'match', prompt: 'Which equipment separates each mixture?',
    pairs: [['Sieve', 'Rice and flour'], ['Filter paper', 'Sand and water'], ['Magnet', 'Iron filings and sand'], ['Evaporating dish', 'Salt from salt water']],
    explain: 'A sieve for big and small bits, a filter for a solid in a liquid, a magnet for iron, and evaporating for a dissolved solid.' },

  // ---------- Put in order ----------
  { type: 'order', prompt: 'How do you separate sand, salt and water? Put the steps in order.', first: 'First', last: 'Last',
    items: ['Pour the mixture through filter paper in a funnel', 'Take the sand off the filter paper', 'Pour the salt water that dripped through into a dish', 'Leave the dish somewhere warm for a few days', 'Collect the salt left in the dish'],
    explain: 'Filter first to catch the sand. The salt is dissolved, so it goes through the paper. Then evaporate the water to get the salt.' },
  { type: 'order', prompt: 'Put the steps of a fair test in order.', first: 'First', last: 'Last',
    items: ['Choose one thing to change', 'Decide what to keep the same', 'Predict what will happen', 'Do the test three times', 'Look for a pattern in the results'],
    explain: 'Change only one thing, so you know what made the difference. Repeating the test helps you spot odd results.' },

  // ---------- Sort into groups ----------
  { type: 'sort', prompt: 'Is it a solution, or just a mixture?', groups: ['🥤 A solution', '🥣 Just a mixture'],
    items: [{ t: 'Salt water', em: '🧂', g: 0 }, { t: 'Sugar water', em: '🍬', g: 0 }, { t: 'Instant coffee', em: '☕', g: 0 },
      { t: 'Sand and water', em: '🏖️', g: 1 }, { t: 'Chalk and water', em: '🖍️', g: 1 }, { t: 'Muddy water', em: '🟤', g: 1 }, { t: 'Oil and water', em: '🫒', g: 1 }],
    explain: 'A solution is see-through, with no bits, layer or cloud. All solutions are mixtures, but not all mixtures are solutions.' },
  { type: 'sort', prompt: 'Does it dissolve in water?', groups: ['✅ Dissolves', '❌ Does not dissolve'],
    items: [{ t: 'Salt', em: '🧂', g: 0 }, { t: 'Sugar', em: '🍬', g: 0 }, { t: 'Instant coffee', em: '☕', g: 0 }, { t: 'Sand', em: '🏖️', g: 1 }, { t: 'Chalk', em: '🖍️', g: 1 }],
    explain: 'Chalk makes water cloudy, but cloudy means it has not dissolved. Leave it, and the chalk settles at the bottom.' },

  // ---------- Fill the gaps ----------
  { type: 'cloze', prompt: 'Fill the gaps about dissolving.',
    text: 'When sugar {dissolves} in water, the sugar is the {solute} and the water is the {solvent}. Together they make a {solution}. The sugar has not gone: its {particles} are spread out between the water particles.',
    extra: ['melts', 'mixture'],
    explain: 'The mass stays the same, because nothing is lost.' },
  { type: 'cloze', prompt: 'Fill the gaps about getting the salt back.',
    text: 'Filter paper cannot take the salt out of salt water, because the salt particles are much {smaller} than the holes. To get the salt back, leave the salt water to {evaporate}. To get the water back too, use a {cold} lid: the water {condenses} on it. Dissolving is {reversible}.',
    extra: ['bigger', 'melt'],
    explain: 'We got the solute (salt) and the solvent (water) back, so dissolving can be changed back.' },

  // ---------- True or false? ----------
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'Sugar disappears when it dissolves.', a: false, why: 'It is still there: its particles are spread out between the water particles. The mass stays the same.' },
      { s: 'Dissolving is the same as melting.', a: false, why: 'Melting needs heat and only one substance. Dissolving needs a solid and a liquid.' },
      { s: 'Filter paper can take the salt out of salt water.', a: false, why: 'The salt particles are much smaller than the holes, so they go straight through.' },
      { s: 'A solution can be coloured.', a: true, why: 'Coffee is a brown solution. You can still see through it.' },
      { s: 'Everything that dissolves in water also dissolves in oil.', a: false, why: 'Salt and sugar dissolve in water, but not in cooking oil.' },
    ] },
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'Warm water can dissolve more sugar than cold water.', a: true, why: 'Keep adding spoonfuls, and warm water takes more before no more will dissolve.' },
      { s: 'Stirring makes sugar dissolve faster.', a: true, why: 'Stirring moves the sugar around, so it meets fresh water.' },
      { s: 'If water goes cloudy, the solid has dissolved.', a: false, why: 'Cloudy means tiny bits are floating in it: it has not dissolved.' },
      { s: 'Sand dissolves in water if you stir it for long enough.', a: false, why: 'Sand never dissolves in water. It sinks to the bottom.' },
      { s: 'You can find out if salt is in water by tasting it.', a: false, why: 'Never taste anything in a science experiment. Evaporate the water instead, and see if salt is left behind.' },
    ] },

  // ---------- Odd one out ----------
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['Salt', 'Sugar', 'Instant coffee', 'Sand'], odd: 3,
    reasons: ['It does not dissolve in water – the others do', 'It is the only one that is a solid', 'It is the only one you can buy in a shop'], reason: 0,
    explain: 'Salt, sugar and instant coffee dissolve in water to make solutions. Sand sinks to the bottom.' },
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['Salt water', 'Sugar water', 'Coffee', 'Muddy water'], odd: 3,
    reasons: ['It is not a solution – the others are', 'It is the only mixture', 'It is the only one with water in it'], reason: 0,
    explain: 'All four are mixtures. Muddy water is not see-through, and the mud settles, so it is not a solution.' },

  // ---------- Build a sentence ----------
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['In salt water, the salt is the', ['solute', 'solvent'], 'and the water is the', ['solvent', 'solute'], '.'],
    explain: 'The solute is the solid that dissolves. The solvent is the liquid it dissolves in.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Sugar dissolves', ['faster', 'slower'], 'in warm water, and warm water can dissolve', ['more', 'less'], 'of it.'],
    explain: 'In warm water, the particles move faster, so the sugar particles break away and spread out more quickly.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Salt dissolves in', ['water', 'cooking oil'], 'but not in', ['cooking oil', 'water'], '.'],
    explain: 'Whether something dissolves depends on the solid and on the liquid.' },

  // ---------- Read the table ----------
  { type: 'table', prompt: 'A class timed how long a spoonful of sugar took to dissolve in water at different temperatures. They did each test three times.', caption: 'Time for the sugar to dissolve (seconds)',
    table: { head: ['Water', 'Try 1', 'Try 2', 'Try 3'], rows: [['10 °C', '68', '70', '67'], ['20 °C', '40', '18', '39'], ['40 °C', '22', '23', '21'], ['60 °C', '15', '16', '14']] },
    questions: [
      { q: 'Which result does not fit the pattern?', options: ['10 °C, try 1', '20 °C, try 2', '40 °C, try 3', '60 °C, try 1'], a: 1, why: 'At 20 °C the other tries were 40 and 39 seconds, but try 2 was only 18.' },
      { q: 'What might have caused it?', options: ['Someone started the stopwatch late', 'The water was too cold', 'The sugar disappeared'], a: 0, why: 'Starting the stopwatch late makes the time too short.' },
      { q: 'What pattern do the results show?', options: ['The warmer the water, the faster the sugar dissolves', 'The warmer the water, the slower the sugar dissolves', 'Temperature makes no difference'], a: 0, why: 'The times get shorter as the water gets warmer.' },
    ] },
  { type: 'table', prompt: 'A class weighed some water and some salt, then stirred the salt into the water and weighed it again.', caption: 'Mass in grams',
    table: { head: ['What was weighed', 'Mass'], rows: [['Water', '100 g'], ['Salt', '10 g'], ['Salt water, after stirring', '110 g']] },
    questions: [
      { q: 'What happened to the mass when the salt dissolved?', options: ['It stayed the same', 'It went down', 'It went up'], a: 0, why: '100 g + 10 g = 110 g. Nothing was lost.' },
      { q: 'Where is the salt?', options: ['Still there, spread out between the water particles', 'It disappeared', 'It turned into water'], a: 0, why: 'Its particles are too small to see, but they are still there.' },
    ] },
  ]
});
})();
