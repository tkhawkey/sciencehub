/* Question bank: Particles, states and water (Cambridge Primary Science 5Cm.01, 5Cm.02, 5Cc.01, 5Cp.02)
   Each question is one object. "type" says which activity it is – see the engine (index.html) for the formats.
   In "sentence" questions the right choice is written first (the engine shuffles them).
   Numbers match the Particle Playground explorer: water melts at 0 °C and boils at 100 °C, wax melts at about 60 °C,
   100 ml of water freezes to about 109 ml of ice, and 100 ml of melted wax becomes about 90 ml of solid wax.
   Diagrams are drawn here (600 × 360). Label positions are in % across and down the diagram. */
window.BANKS = window.BANKS || [];
(() => {
const pct = (x, y) => ({ px: +(x / 6).toFixed(1), py: +(y / 3.6).toFixed(1) });
const dot = (x, y, c) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="9" fill="${c}" stroke="rgba(0,0,0,.3)"/>`;

// Three boxes of particles: a solid, a liquid and a gas
const box = (x0, inner) => `<rect x="${x0}" y="70" width="160" height="200" rx="12" fill="#fff" stroke="#8a93ad" stroke-width="3"/>${inner}`;
const SOLID = (() => { let o = ''; for (let r = 0; r < 5; r++) for (let c = 0; c < 7; c++) o += dot(42 + c * 19 + (r & 1) * 9, 256 - r * 17, '#3d7bff'); return o; })();
const LIQUID = (() => { let o = '', k = 0; for (let r = 0; r < 4; r++) for (let c = 0; c < 7 - (r & 1); c++) { const j = ((k++ * 37) % 10) / 10; o += dot(232 + c * 19.5 + (r & 1) * 10 + j * 4, 256 - r * 18 - j * 2, '#3d7bff'); } return o; })();
const GAS = [[430, 100], [500, 92], [545, 140], [452, 170], [520, 205], [440, 240], [555, 250], [490, 150]].map(([x, y]) => dot(x, y, '#3d7bff')).join('');
const STATES = `<svg class="dg" viewBox="0 0 600 360" role="img"><rect width="600" height="360" rx="16" fill="#eef4fb"/>${box(30, SOLID)}${box(220, LIQUID)}${box(410, GAS)}</svg>`;

// A thermometer for water, from −20 °C to 120 °C
const ty = T => 300 - (T + 20) / 140 * 240;
const THERMO = `<svg class="dg" viewBox="0 0 600 360" role="img"><rect width="600" height="360" rx="16" fill="#eef4fb"/>
  <rect x="290" y="${ty(120) - 10}" width="20" height="${ty(-20) - ty(120) + 20}" rx="10" fill="#fff" stroke="#8a93ad" stroke-width="3"/>
  <circle cx="300" cy="${ty(-20) + 22}" r="20" fill="#ff5f6d" stroke="#8a93ad" stroke-width="3"/><rect x="295" y="${ty(20)}" width="10" height="${ty(-20) - ty(20) + 12}" fill="#ff5f6d"/>
  ${[-20, 0, 20, 40, 60, 80, 100, 120].map(T => `<path d="M310 ${ty(T)} h12" stroke="#1d2340" stroke-width="2"/><text x="328" y="${ty(T) + 5}" font-size="15" font-family="sans-serif" fill="#1d2340">${String(T).replace('-', '−')} °C</text>`).join('')}
  <text x="450" y="${ty(100) + 6}" font-size="26" text-anchor="middle">♨️</text><text x="450" y="${ty(20) + 6}" font-size="26" text-anchor="middle">💧</text><text x="450" y="${ty(-10) + 6}" font-size="26" text-anchor="middle">🧊</text></svg>`;

window.BANKS.push({
  id: 'particles', title: 'Particles, states and water', icon: '🫧', objectives: '5Cm.01 · 5Cm.02 · 5Cc.01 · 5Cp.02',
  explorer: { name: 'Particle Playground', icon: '🫧', href: '../particle-playground/index.html' },
  intro: 'Solids, liquids and gases in the particle model, melting and boiling, evaporation and condensation, dissolving, and why water is odd.',
  items: [

  // ---------- Label the diagram ----------
  { type: 'label', prompt: 'Each box shows the particles in a substance. Label the solid, the liquid and the gas.', svg: STATES, alt: 'Three boxes: particles in a neat pattern; particles close together but jumbled; particles far apart',
    labels: [{ text: 'Solid', x: 18, y: 9, ...pct(110, 220) }, { text: 'Liquid', x: 50, y: 9, ...pct(300, 225) }, { text: 'Gas', x: 82, y: 9, ...pct(490, 150) }],
    extra: ['Solution'],
    explain: 'In a solid the particles are close together in a pattern. In a liquid they are close together but jumbled. In a gas they are far apart.' },
  { type: 'label', prompt: 'Label the thermometer for water.', svg: THERMO, alt: 'A thermometer from −20 °C to 120 °C, with steam, a water drop and an ice cube beside it',
    labels: [{ text: 'Water boils', x: 18, y: 20, ...pct(290, ty(100)) }, { text: 'Room temperature', x: 18, y: 50, ...pct(290, ty(20)) }, { text: 'Ice melts', x: 18, y: 78, ...pct(290, ty(0)) }],
    extra: ['Water freezes at 50 °C'],
    explain: 'Water melts (and freezes) at 0 °C and boils at 100 °C. Room temperature is about 20 °C.' },

  // ---------- Put in order ----------
  { type: 'order', prompt: 'Ice is heated until it all turns into a gas. Put what happens in order.', first: 'First', last: 'Last',
    items: ['Ice (a solid)', 'The ice melts at 0 °C', 'Liquid water', 'The water boils at 100 °C', 'Water vapour (a gas)'],
    explain: 'Heating makes the particles move faster: solid, then liquid, then gas.' },
  { type: 'order', prompt: 'For most substances, put the states in order of how far apart the particles are.', first: 'Closest together', last: 'Furthest apart',
    items: ['Solid', 'Liquid', 'Gas'],
    explain: 'Water is odd: its particles are a tiny bit further apart in ice than in liquid water. That is why ice floats.' },
  { type: 'order', prompt: 'Three jugs of water were left for a day. Put them in order of how fast the water evaporated.', first: 'Slowest', last: 'Fastest',
    items: ['In the fridge (5 °C)', 'In the classroom (20 °C)', 'On a sunny windowsill (35 °C)'],
    explain: 'The warmer it is, the faster the particles move, so more of them escape from the surface.' },

  // ---------- Match up ----------
  { type: 'match', prompt: 'Match each change to what happens.',
    pairs: [['Melting', 'A solid turns into a liquid'], ['Freezing', 'A liquid turns into a solid'], ['Evaporation', 'A liquid turns into a gas'], ['Condensation', 'A gas turns into a liquid'], ['Dissolving', 'A substance spreads out in a liquid to make a solution']],
    explain: 'Melting and evaporation need heating. Freezing and condensation happen when something cools down.' },
  { type: 'match', prompt: 'Match each state to its particles.',
    pairs: [['Solid', 'Close together in a pattern; they vibrate on the spot'], ['Liquid', 'Close together, no pattern; they slide past each other'], ['Gas', 'Far apart; they move quickly in all directions']],
    explain: 'This is the particle model. It explains why solids keep their shape, liquids flow, and gases spread out.' },

  // ---------- Sort into groups ----------
  { type: 'sort', prompt: 'Does it dissolve in water?', groups: ['✅ Dissolves', '❌ Does not dissolve'],
    items: [{ t: 'Salt', g: 0 }, { t: 'Sugar', g: 0 }, { t: 'Instant coffee', g: 0 }, { t: 'Sand', g: 1 }, { t: 'Cooking oil', g: 1 }, { t: 'Pepper', g: 1 }, { t: 'Chalk', g: 1 }],
    explain: 'Water can dissolve a range of substances, but not everything. Sand and chalk sink; oil floats on top.' },
  { type: 'sort', prompt: 'Is each one a solid, a liquid or a gas at room temperature?', groups: ['🧱 Solid', '💧 Liquid', '💨 Gas'],
    items: [{ t: 'Iron nail', g: 0 }, { t: 'Wood', g: 0 }, { t: 'Candle wax', g: 0 }, { t: 'Milk', g: 1 }, { t: 'Cooking oil', g: 1 }, { t: 'Oxygen', g: 2 }, { t: 'Water vapour', g: 2 }, { t: 'Hydrogen', g: 2 }],
    explain: 'Oxygen, nitrogen, carbon dioxide, water vapour and hydrogen are all gases at room temperature.' },
  { type: 'sort', prompt: 'Which changes happen when something is heated, and which when it cools down?', groups: ['🔥 Heating', '❄️ Cooling'],
    items: [{ t: 'Melting', g: 0 }, { t: 'Boiling', g: 0 }, { t: 'Evaporating', g: 0 }, { t: 'Freezing', g: 1 }, { t: 'Condensing', g: 1 }],
    explain: 'Heating makes particles move faster and spread out. Cooling makes them slow down and come closer together.' },

  // ---------- Fill the gaps ----------
  { type: 'cloze', prompt: 'Fill the gaps about water.',
    text: 'Water melts at {0} °C and boils at {100} °C. When water freezes, it {expands}, so ice {floats} in water.',
    extra: ['50', 'shrinks', 'sinks'],
    explain: 'Most substances shrink when they become solid, so the solid sinks. Water is odd!' },
  { type: 'cloze', prompt: 'Fill the gaps about evaporation and condensation.',
    text: 'When water is warmed, its particles move {faster}, and more of them escape from the surface. This is {evaporation}. When water vapour {cools}, its particles slow down and join together. This is {condensation}.',
    extra: ['slower', 'melting'],
    explain: 'Evaporation and condensation are opposites.' },
  { type: 'cloze', prompt: 'Fill the gaps about dissolving.',
    text: 'When salt {dissolves} in water, it makes a {solution}. The salt particles spread out {between} the water particles.',
    extra: ['melts', 'disappears'],
    explain: 'The salt has not disappeared. You could taste it, or evaporate the water to get it back.' },

  // ---------- True or false ----------
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'In a solid, the particles do not move at all.', a: false, why: 'They vibrate on the spot, but stay in their places.' },
      { s: 'A gas spreads out to fill its container.', a: true, why: 'Its particles are far apart and move quickly in all directions.' },
      { s: 'In a liquid, the particles are far apart.', a: false, why: 'In a liquid they are close together, but not in a pattern.' },
      { s: 'Liquids can flow because their particles slide past each other.', a: true, why: 'That is also why a liquid takes the shape of its container.' },
      { s: 'Particles get bigger when they are heated.', a: false, why: 'The particles stay the same size. They move faster and further apart.' },
    ],
    explain: 'The particle model explains how solids, liquids and gases behave.' },
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'Water only evaporates when it boils.', a: false, why: 'Water evaporates at any temperature. It is just faster when it is warmer.' },
      { s: 'The drops on the outside of a cold can came from inside the can.', a: false, why: 'They came from water vapour in the air, which condensed on the cold can.' },
      { s: 'Condensation happens when water vapour cools down.', a: true, why: 'Its particles slow down and join together into drops of liquid.' },
      { s: 'Puddles dry faster on a warm day.', a: true, why: 'The particles move faster, so more escape into the air.' },
      { s: 'Water vapour is a gas.', a: true, why: 'It is invisible. Steam and clouds are tiny drops of liquid water.' },
    ],
    explain: 'Evaporation and condensation depend on temperature.' },
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'Water gets bigger when it freezes.', a: true, why: '100 ml of water freezes into about 109 ml of ice.' },
      { s: 'Solid wax floats in melted wax.', a: false, why: 'It sinks, like most solids in their own liquid. Ice floating is unusual.' },
      { s: 'Water can dissolve many different substances.', a: true, why: 'Salt, sugar and instant coffee all dissolve in water.' },
      { s: 'Every substance melts at 0 °C.', a: false, why: 'Different substances melt at different temperatures. Wax melts at about 60 °C.' },
      { s: 'Frozen water pipes can burst.', a: true, why: 'The water expands when it freezes, and pushes on the pipe.' },
    ],
    explain: 'Water acts differently from many other substances.' },

  // ---------- Venn diagram ----------
  { type: 'venn', prompt: 'Sort these by what their particles are like.', sets: ['Particles are close together', 'Particles can move around'],
    items: [{ t: 'Milk', em: '🥛', in: [1, 1] }, { t: 'Cooking oil', em: '🫗', in: [1, 1] }, { t: 'Ice', em: '🧊', in: [1, 0] }, { t: 'Wood', em: '🪵', in: [1, 0] },
      { t: 'Oxygen', em: '💨', in: [0, 1] }, { t: 'Water vapour', em: '♨️', in: [0, 1] }],
    explain: 'Liquids go in the middle: their particles are close together and can move around. Solids are close together but stay in place. Gases move around but are far apart.' },

  // ---------- Read the table ----------
  { type: 'table', prompt: 'The table shows the melting points of some substances.', caption: 'Melting points',
    table: { head: ['Substance', 'Melting point'], rows: [['Water (ice)', '0 °C'], ['Chocolate', 'about 34 °C'], ['Candle wax', 'about 60 °C'], ['Iron', 'about 1,500 °C']] },
    questions: [
      { q: 'Which melts at the lowest temperature?', options: ['Water (ice)', 'Chocolate', 'Candle wax', 'Iron'], a: 0, why: 'Ice melts at 0 °C.' },
      { q: 'On a hot day of 40 °C, which ones would be liquid?', options: ['Only water', 'Water and chocolate', 'Water, chocolate and wax', 'All of them'], a: 1, why: 'Water melts at 0 °C and chocolate at about 34 °C. Wax and iron need more heat.' },
      { q: 'How much hotter does wax need to be than ice to melt?', options: ['34 °C', '60 °C', '94 °C', '600 °C'], a: 1, why: '60 °C − 0 °C = 60 °C.' },
    ],
    explain: 'Different substances melt at different temperatures.' },
  { type: 'table', prompt: 'Three jugs each had 100 ml of water. They were left for a day.', caption: 'Water left after one day',
    table: { head: ['Place', 'Temperature', 'Water left'], rows: [['Fridge', '5 °C', '90 ml'], ['Classroom', '20 °C', '80 ml'], ['Sunny windowsill', '35 °C', '50 ml']] },
    questions: [
      { q: 'How much water evaporated from the classroom jug?', options: ['10 ml', '20 ml', '80 ml', '100 ml'], a: 1, why: '100 ml − 80 ml = 20 ml.' },
      { q: 'How much more evaporated on the windowsill than in the fridge?', options: ['10 ml', '40 ml', '50 ml', '90 ml'], a: 1, why: 'Windowsill: 50 ml. Fridge: 10 ml. 50 − 10 = 40 ml.' },
      { q: 'What does the table show?', options: ['The warmer it is, the faster water evaporates', 'Water only evaporates in the sun', 'Cold water does not evaporate'], a: 0, why: 'Even the fridge jug lost some water, but the warmest lost the most.' },
    ],
    explain: 'Warmer particles move faster, so more escape from the surface.' },
  { type: 'table', prompt: '100 ml of water was frozen, and 100 ml of melted wax was left to cool and go solid.', caption: 'Volume after turning solid',
    table: { head: ['Substance', 'Liquid', 'Solid'], rows: [['Water', '100 ml', '109 ml'], ['Wax', '100 ml', '90 ml']] },
    questions: [
      { q: 'How much bigger did the water get when it froze?', options: ['1 ml', '9 ml', '10 ml', '109 ml'], a: 1, why: '109 ml − 100 ml = 9 ml.' },
      { q: 'Which one shrank when it became solid?', options: ['Water', 'Wax', 'Both', 'Neither'], a: 1, why: 'The wax went from 100 ml to 90 ml.' },
      { q: 'Why does ice float in water?', options: ['It expands when it freezes, so it is lighter than the same amount of water', 'It is colder than the water', 'It is a different colour'], a: 0, why: 'Most solids shrink and sink. Water is odd: ice floats.' },
    ],
    explain: 'Water expands when it solidifies. Most substances, like wax, shrink.' },
  { type: 'table', prompt: 'A class timed how long a spoonful of sugar took to dissolve in water at different temperatures. (The numbers are made up.)', caption: 'Time for sugar to dissolve',
    table: { head: ['Water temperature', 'Time to dissolve'], rows: [['5 °C', '120 seconds'], ['20 °C', '60 seconds'], ['40 °C', '30 seconds'], ['60 °C', '15 seconds']] },
    questions: [
      { q: 'At which temperature did the sugar dissolve fastest?', options: ['5 °C', '20 °C', '40 °C', '60 °C'], a: 3, why: 'It took only 15 seconds at 60 °C.' },
      { q: 'What happens to the time each time the temperature goes up a step?', options: ['It halves', 'It doubles', 'It stays the same'], a: 0, why: '120, 60, 30, 15: each time is half the one before.' },
      { q: 'Which is the best prediction for water at 80 °C?', options: ['Less than 15 seconds', 'About 60 seconds', 'More than 120 seconds'], a: 0, why: 'The pattern shows warmer water dissolves sugar faster.' },
    ],
    explain: 'Sugar dissolves faster in warmer water, because the particles move faster.' },

  // ---------- Odd one out ----------
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['🔥 Melting', '🔥 Evaporating', '🔥 Boiling', '❄️ Condensing'], odd: 3,
    reasons: ['It happens when something cools down – the others need heating', 'It only happens to water', 'It makes a solid'], reason: 0,
    explain: 'Condensing happens when a gas cools and turns into a liquid.' },
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['🧂 Salt', '🍬 Sugar', '🏖️ Sand', '☕ Instant coffee'], odd: 2,
    reasons: ['It does not dissolve in water – the others do', 'It is the only one that is a solid', 'It is the only one you can eat'], reason: 0,
    explain: 'Salt, sugar and instant coffee dissolve to make solutions. Sand sinks to the bottom.' },
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['💧 Water', '🥛 Milk', '🧊 Ice', '🫗 Cooking oil'], odd: 2,
    reasons: ['It is a solid – the others are liquids', 'It is the only one made of water', 'It is the only one that is cold'], reason: 0,
    explain: 'Ice is a solid: its particles are in a pattern and only vibrate on the spot.' },

  // ---------- Build a sentence ----------
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['In a solid, the particles are', ['close together', 'far apart'], 'and they', ['vibrate on the spot', 'move quickly in all directions'], '.'],
    explain: 'That is why a solid keeps its shape.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['When water freezes, it', ['expands', 'shrinks'], ', so ice', ['floats', 'sinks'], 'in water.'],
    explain: 'Water acts differently from many other substances.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Water evaporates', ['faster', 'slower'], 'when it is warmer, because its particles move', ['faster', 'slower'], '.'],
    explain: 'More fast-moving particles escape from the surface.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Condensation happens when water vapour', ['cools down', 'warms up'], 'and turns into', ['liquid water', 'a gas'], '.'],
    explain: 'That is how drops form on a cold can or a bathroom mirror.' },
  ],
});
})();
