/* Question bank: Air and water (Cambridge Primary Science 5ESp.01, 5Cm.02, 5ESp.02, 5ESp.03, 5SIC.05, 5ESc.01)
   Each question is one object. "type" says which activity it is – see the engine (index.html) for the formats.
   In "sentence" questions the right choice is written first (the engine shuffles them).
   Numbers match the Air and Water explorer: air is 78% nitrogen, 21% oxygen, about 1% other gases and 0.04% carbon dioxide.
   Pollution follows 5ESp.03: harmful substances added to the environment by humans, so natural events are not pollution.
   Diagrams are drawn here (600 × 360). Label positions are in % across and down the diagram. */
window.BANKS = window.BANKS || [];
(() => {
const pct = (x, y) => ({ px: +(x / 6).toFixed(1), py: +(y / 3.6).toFixed(1) });

// The five layers of the atmosphere, stacked up from the ground (not to scale)
const BANDS = [['#a8d6ff', 330, 270], ['#6aa5ee', 270, 205], ['#4475c9', 205, 145], ['#2b4590', 145, 85], ['#141c45', 85, 22]];
const LAYERS = `<svg class="dg" viewBox="0 0 600 360" role="img"><rect width="600" height="360" rx="16" fill="#eef4fb"/>
  ${BANDS.map(([c, y0, y1]) => `<rect x="170" y="${y1}" width="260" height="${y0 - y1}" fill="${c}"/>`).join('')}
  <rect x="170" y="330" width="260" height="14" fill="#4caf50"/>
  <text x="225" y="300" font-size="26">☁️</text><text x="186" y="225" font-size="13" fill="#fff" font-family="sans-serif">ozone layer</text>
  <text x="330" y="180" font-size="24">🌠</text><text x="340" y="122" font-size="24">🛰️</text>
  <text x="300" y="356" text-anchor="middle" font-size="12" fill="#5b6386" font-family="sans-serif">Not to scale</text></svg>`;

// The water cycle: the Sun, the sea, a mountain, a cloud, rain and a river
const CYCLE = `<svg class="dg" viewBox="0 0 600 360" role="img"><rect width="600" height="360" rx="16" fill="#bfe3ff"/>
  <circle cx="70" cy="60" r="30" fill="#ffc83d" stroke="#ffb300" stroke-width="3"/>
  <rect x="0" y="270" width="230" height="90" fill="#2f7fd8"/>
  <path d="M200 360 L200 272 L300 266 L380 220 L455 165 L520 200 L600 210 L600 360 Z" fill="#6cbf5f" stroke="#4e9c45" stroke-width="3"/>
  <path d="M450 175 Q420 215 380 238 Q330 264 222 276" stroke="#4aa3e8" stroke-width="6" fill="none" stroke-linecap="round"/>
  ${[90, 130, 170].map(x => `<path d="M${x} 262 q7 -25 0 -50 q-7 -25 0 -50" stroke="#fff" stroke-width="3" fill="none" stroke-dasharray="6 5"/><path d="M${x - 6} 170 l6 -8 l6 8" stroke="#fff" stroke-width="3" fill="none"/>`).join('')}
  ${[[390, 70, 26], [420, 58, 32], [455, 64, 28], [480, 76, 22], [430, 84, 26]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#f4f6fb" stroke="#dfe4ef" stroke-width="2"/>`).join('')}
  ${[400, 420, 440, 460, 480].map((x, k) => `<path d="M${x} ${114 + (k % 2) * 16} l-3 14" stroke="#2f7fd8" stroke-width="3" stroke-linecap="round"/><path d="M${x - 4} ${138 + (k % 2) * 10} l-3 12" stroke="#2f7fd8" stroke-width="3" stroke-linecap="round"/>`).join('')}</svg>`;

window.BANKS.push({
  id: 'air-water', title: 'Air and water', icon: '💨', objectives: '5ESp.01 · 5Cm.02 · 5ESp.02 · 5ESp.03 · 5SIC.05 · 5ESc.01',
  explorer: { name: 'Air and Water', icon: '💨', href: '../air-and-water/index.html' },
  intro: 'What air is made of, the layers of the atmosphere, the water cycle, pure and impure water, and pollution.',
  items: [

  // ---------- Label the diagram ----------
  { type: 'label', prompt: 'Label the layers of the atmosphere, from the ground up.', svg: LAYERS, alt: 'Five coloured layers stacked on top of the ground',
    labels: [{ text: 'Troposphere', x: 13, y: 83, ...pct(300, 300) }, { text: 'Stratosphere', x: 87, y: 66, ...pct(300, 238) }, { text: 'Mesosphere', x: 13, y: 48, ...pct(300, 175) },
      { text: 'Thermosphere', x: 87, y: 32, ...pct(300, 115) }, { text: 'Exosphere', x: 13, y: 15, ...pct(300, 54) }],
    extra: ['Hydrosphere'],
    explain: 'From the ground up: troposphere (weather and clouds), stratosphere (the ozone layer), mesosphere (meteors burn up), thermosphere (the space station orbits here) and exosphere, where the air fades into space.' },
  { type: 'label', prompt: 'Label the water cycle.', svg: CYCLE, alt: 'The Sun, the sea, wavy arrows rising, a cloud, rain falling on a mountain, and a river',
    labels: [{ text: 'Evaporation', x: 22, y: 30, ...pct(130, 210) }, { text: 'Condensation', x: 60, y: 9, ...pct(395, 72) }, { text: 'Precipitation', x: 88, y: 36, ...pct(462, 132) }],
    extra: ['Melting', 'Freezing'],
    explain: 'The Sun warms the sea and water evaporates. The water vapour cools and condenses into clouds. The drops fall as precipitation, and rivers carry the water back to the sea.' },

  // ---------- Put in order ----------
  { type: 'order', prompt: 'Put the water cycle in order.', first: 'First', last: 'Last',
    items: ['The Sun warms the sea', 'Water evaporates and rises as water vapour', 'The water vapour cools and condenses into clouds', 'The drops fall as rain or snow', 'Rivers carry the water back to the sea'],
    explain: 'Then the Sun warms the sea again, and the cycle goes round and round.' },
  { type: 'order', prompt: 'Put the layers of the atmosphere in order, starting from the ground.', first: 'Nearest the ground', last: 'Furthest out',
    items: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere', 'Exosphere'],
    explain: 'We live in the troposphere. The exosphere fades away into space.' },
  { type: 'order', prompt: 'One litre of each water was evaporated. Put them in order of how much was left behind in the dish.', first: 'Most left behind', last: 'Least left behind',
    items: ['Sea water', 'Bottled mineral water', 'Tap water', 'River water', 'Rain water'],
    explain: 'Sea water left about 35 g of salt. Mineral, tap and river water left less than 1 g. Rain water left almost nothing.' },

  // ---------- Match up ----------
  { type: 'match', prompt: 'Match each gas to a fact about it.',
    pairs: [['Nitrogen', 'Most of the air: about 78%'], ['Oxygen', 'About 21% of the air. We breathe it in.'], ['Carbon dioxide', 'Only about 0.04% of the air. Plants use it.'],
      ['Water vapour', 'The gas that water turns into when it evaporates'], ['Hydrogen', 'The lightest gas of all']],
    explain: 'All five are common gases at room temperature. Air is a mixture of gases.' },
  { type: 'match', prompt: 'Match each layer of the atmosphere to what happens there.',
    pairs: [['Troposphere', 'Weather and clouds'], ['Stratosphere', 'The ozone layer'], ['Mesosphere', 'Meteors burn up'], ['Thermosphere', 'The space station orbits'], ['Exosphere', 'The air fades away into space']],
    explain: 'Almost all the weather happens in the troposphere, the layer nearest the ground.' },
  { type: 'match', prompt: 'Match each part of the water cycle to what it means.',
    pairs: [['Evaporation', 'Liquid water turns into water vapour, a gas'], ['Condensation', 'Water vapour cools and turns into tiny drops of liquid'], ['Precipitation', 'Water falls from clouds as rain, snow, sleet or hail']],
    extra: ['Melting'],
    explain: 'Evaporation, condensation and precipitation are the three key parts of the water cycle.' },
  { type: 'match', prompt: 'A class made a water cycle in a cup: warm water, cling film on top, and ice on the cling film. Match each part of the model to the real world.',
    pairs: [['Warm water in the cup', 'The sea, warmed by the Sun'], ['Cold cling film with ice', 'Cold air high in the sky'], ['Drops under the cling film', 'Clouds'], ['Drops falling back into the water', 'Rain']],
    explain: 'A model shows some important features of something real. The cup is much smaller than the real water cycle, and has no land, rivers or wind.' },

  // ---------- Sort into groups ----------
  { type: 'sort', prompt: 'Is it pollution? Remember: pollution is caused by humans, and it makes the air, water or land dirty and harmful.', groups: ['🏭 Pollution', '🍃 Not pollution'],
    items: [{ t: 'Smoke from a factory chimney', g: 0 }, { t: 'Exhaust fumes from cars', g: 0 }, { t: 'Plastic litter in a river', g: 0 }, { t: 'Farm chemicals washing into a stream', g: 0 },
      { t: 'Leaves falling into a river', g: 1 }, { t: 'Ash from a volcano', g: 1 }, { t: 'Rain falling on a field', g: 1 }, { t: 'Salt in the sea', g: 1 }],
    explain: 'Volcanic ash and falling leaves happen naturally, so they are not pollution. Pollution is caused by humans.' },
  { type: 'sort', prompt: 'Sort the kinds of water.', groups: ['🧂 Has substances dissolved in it', '💧 Almost pure'],
    items: [{ t: 'Sea water', g: 0 }, { t: 'River water', g: 0 }, { t: 'Tap water', g: 0 }, { t: 'Bottled mineral water', g: 0 }, { t: 'Rain water', g: 1 }, { t: 'Water collected from steam (distilled water)', g: 1 }],
    explain: 'Most water on Earth is not pure. Rain and distilled water are almost pure, because they come from water that evaporated and left the dissolved substances behind.' },
  { type: 'sort', prompt: 'Is each one a solid, a liquid or a gas at room temperature?', groups: ['🧱 Solid', '💧 Liquid', '💨 Gas'],
    items: [{ t: 'Salt', g: 0 }, { t: 'Sand', g: 0 }, { t: 'Water', g: 1 }, { t: 'Milk', g: 1 }, { t: 'Oxygen', g: 2 }, { t: 'Nitrogen', g: 2 }, { t: 'Carbon dioxide', g: 2 }, { t: 'Hydrogen', g: 2 }],
    explain: 'Oxygen, nitrogen, carbon dioxide, hydrogen and water vapour are all gases at room temperature.' },

  // ---------- Fill the gaps ----------
  { type: 'cloze', prompt: 'Fill the gaps about air.',
    text: 'Air is a {mixture} of gases. Most of it is {nitrogen}. About a fifth of it is {oxygen}. There is only a tiny amount of {carbon dioxide}.',
    extra: ['hydrogen', 'pure'],
    explain: 'Air is about 78% nitrogen, 21% oxygen and 1% other gases. Carbon dioxide is only about 0.04%.' },
  { type: 'cloze', prompt: 'Fill the gaps about the water cycle.',
    text: 'The Sun warms the sea and water {evaporates}. The water vapour rises, cools and {condenses} into tiny drops that make clouds. The drops fall as {precipitation}, such as rain or snow.',
    extra: ['melts', 'freezes'],
    explain: 'Then rivers carry the water back to the sea, and it goes round again.' },
  { type: 'cloze', prompt: 'Fill the gaps about pollution.',
    text: 'Pollution is when harmful substances are added to the environment by {humans}. It {contaminates} the air, water or land, and harms living things.',
    extra: ['volcanoes', 'cleans'],
    explain: 'Both parts matter: pollution is caused by humans, and it makes the environment dirty and harmful.' },

  // ---------- True or false ----------
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'Air is mostly oxygen.', a: false, why: 'Air is mostly nitrogen: about 78%. Oxygen is about 21%.' },
      { s: 'There is carbon dioxide in the air.', a: true, why: 'There is only a tiny amount: about 4 particles in every 10,000.' },
      { s: 'The atmosphere is the layer of air around the Earth.', a: true, why: 'It is made of five layers, from the troposphere up to the exosphere.' },
      { s: 'All our weather happens in the stratosphere.', a: false, why: 'Almost all weather happens in the troposphere, the layer nearest the ground.' },
      { s: 'The ozone layer is in the stratosphere.', a: true, why: 'It protects living things from the Sun\'s harmful UV light.' },
    ],
    explain: 'Watch out for these common mix-ups!' },
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'Clear water is always pure.', a: false, why: 'Tap water and mineral water look clear, but they have substances dissolved in them.' },
      { s: 'Sea water has salt dissolved in it.', a: true, why: 'One litre of sea water leaves about 35 g of salt when it evaporates.' },
      { s: 'Water vapour is an invisible gas.', a: true, why: 'You cannot see water vapour. Clouds and steam are tiny drops of liquid water.' },
      { s: 'Clouds are made of water vapour.', a: false, why: 'Clouds are made of tiny drops of liquid water (or ice) that formed when water vapour condensed.' },
      { s: 'Water only evaporates when it boils.', a: false, why: 'Water evaporates at any temperature. It is just faster when it is warm, like a puddle drying in the sun.' },
    ],
    explain: 'Some of these surprise people!' },
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'Leaves falling into a river are pollution.', a: false, why: 'They fall naturally, so they are not pollution. Pollution is caused by humans.' },
      { s: 'Science and technology can cause pollution.', a: true, why: 'Factories and cars are technology, and they can pollute the air and water.' },
      { s: 'Science and technology can help to reduce pollution.', a: true, why: 'Filters, water treatment works, electric buses and recycling all help.' },
      { s: 'Plastic in rivers can harm animals.', a: true, why: 'Animals can eat it or get tangled in it, and it takes hundreds of years to break down.' },
      { s: 'Pollution only affects water.', a: false, why: 'Pollution can affect the air, water and land.' },
    ],
    explain: 'Science and technology can have good and bad effects on our local area.' },

  // ---------- Venn diagram ----------
  { type: 'venn', prompt: 'Sort these.', sets: ['Caused by humans', 'Makes water dirty'],
    items: [{ t: 'Waste water from a factory pipe', em: '🏭', in: [1, 1] }, { t: 'Plastic bags in a lake', em: '🛍️', in: [1, 1] }, { t: 'Exhaust fumes from cars', em: '🚗', in: [1, 0] },
      { t: 'Smoke from a factory chimney', em: '💨', in: [1, 0] }, { t: 'Mud washed into a river by a flood', em: '🌊', in: [0, 1] }, { t: 'Snow falling', em: '❄️', in: [0, 0] }],
    explain: 'The things in the middle are water pollution: caused by humans and making water dirty. Mud from a flood makes water dirty, but it is natural, so it is not pollution.' },

  // ---------- Carroll diagram ----------
  { type: 'carroll', prompt: 'Sort these into the Carroll diagram.', rows: ['Caused by humans', 'Natural'], cols: ['Harms the environment', 'Does not harm the environment'],
    items: [{ t: 'Factory smoke', em: '🏭', r: 0, c: 0 }, { t: 'Plastic litter', em: '🧴', r: 0, c: 0 }, { t: 'Planting trees', em: '🌳', r: 0, c: 1 }, { t: 'Recycling', em: '♻️', r: 0, c: 1 },
      { t: 'A forest fire started by lightning', em: '🔥', r: 1, c: 0 }, { t: 'Leaves falling', em: '🍂', r: 1, c: 1 }],
    explain: 'Only the top-left box is pollution: caused by humans and harming the environment. Planting trees and recycling are humans helping.' },

  // ---------- Read the table ----------
  { type: 'table', prompt: 'A class zoomed in on 10,000 particles of dry air and counted each gas.', caption: 'Particles in 10,000 particles of air',
    table: { head: ['Gas', 'Particles'], rows: [['Nitrogen', '7,808'], ['Oxygen', '2,095'], ['Other gases', '93'], ['Carbon dioxide', '4']] },
    questions: [
      { q: 'Which gas is there most of?', options: ['Nitrogen', 'Oxygen', 'Other gases', 'Carbon dioxide'], a: 0, why: '7,808 out of 10,000 particles are nitrogen: about 78%.' },
      { q: 'How many particles are not nitrogen or oxygen?', options: ['4', '93', '97', '2,095'], a: 2, why: '93 + 4 = 97 particles.' },
      { q: 'Why can\'t you find carbon dioxide in just 100 particles of air?', options: ['There is so little: only 4 in every 10,000', 'Carbon dioxide is invisible', 'Air has no carbon dioxide'], a: 0, why: 'Carbon dioxide is only about 0.04% of the air.' },
    ],
    explain: 'Air is a mixture: about 78% nitrogen, 21% oxygen and 1% other gases, including a tiny amount of carbon dioxide.' },
  { type: 'table', prompt: 'Use the table about the layers of the atmosphere.', caption: 'The layers of the atmosphere',
    table: { head: ['Layer', 'Height', 'Going up, it gets…'], rows: [['Troposphere', '0 to 12 km', 'colder'], ['Stratosphere', '12 to 50 km', 'warmer'], ['Mesosphere', '50 to 85 km', 'colder (down to −90 °C)'], ['Thermosphere', '85 to 600 km', 'much hotter']] },
    questions: [
      { q: 'A plane is flying 11 km up. Which layer is it in?', options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'], a: 0, why: 'The troposphere goes from the ground up to about 12 km.' },
      { q: 'How deep is the stratosphere?', options: ['12 km', '38 km', '50 km', '62 km'], a: 1, why: '50 km − 12 km = 38 km.' },
      { q: 'Where is the coldest place in the atmosphere?', options: ['At the ground', 'The top of the troposphere', 'The top of the mesosphere', 'The top of the thermosphere'], a: 2, why: 'It is about −90 °C at the top of the mesosphere.' },
    ],
    explain: 'The temperature goes colder, warmer, colder, then much hotter as you go up through the layers.' },
  { type: 'table', prompt: 'One litre of each kind of water was evaporated. The table shows what was left in the dish.', caption: 'Left behind from 1 litre of water',
    table: { head: ['Water', 'Left behind'], rows: [['Sea water', '35 g'], ['Bottled mineral water', '0.5 g'], ['Tap water', '0.4 g'], ['River water', '0.3 g'], ['Rain water', 'almost 0 g']] },
    questions: [
      { q: 'Which water had the most dissolved in it?', options: ['Sea water', 'Mineral water', 'Tap water', 'Rain water'], a: 0, why: 'Sea water left 35 g of salt.' },
      { q: 'How much salt would 2 litres of sea water leave?', options: ['35 g', '37 g', '70 g', '350 g'], a: 2, why: 'Double 35 g is 70 g.' },
      { q: 'Which water is closest to pure?', options: ['River water', 'Tap water', 'Rain water', 'Mineral water'], a: 2, why: 'Rain water left almost nothing behind.' },
    ],
    explain: 'Most water is not pure. Evaporating it leaves the dissolved substances behind.' },
  { type: 'table', prompt: 'A new water treatment works opened by a river. Each year, a class counted the fish in one part of the river. (The numbers are made up.)', caption: 'Fish counted in the river',
    table: { head: ['Year', 'Fish counted'], rows: [['Before it opened', '6'], ['1 year after', '12'], ['2 years after', '20'], ['3 years after', '27']] },
    questions: [
      { q: 'What happened to the number of fish?', options: ['It went up', 'It went down', 'It stayed the same'], a: 0, why: 'It rose from 6 to 27.' },
      { q: 'How many more fish were counted 3 years after than before it opened?', options: ['6', '15', '21', '27'], a: 2, why: '27 − 6 = 21 more fish.' },
      { q: 'What is the best explanation?', options: ['The cleaner water helped more fish to live there', 'Fish like water treatment works', 'The class got better at counting'], a: 0, why: 'Cleaner water, with less pollution, is better for living things.' },
    ],
    explain: 'Science and technology, like a water treatment works, can have a good effect on the local area.' },

  // ---------- Odd one out ----------
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['💨 Oxygen', '💨 Nitrogen', '💧 Water', '💨 Carbon dioxide'], odd: 2,
    reasons: ['It is a liquid at room temperature – the others are gases', 'It is the only one in the air', 'It is the only one that is invisible'], reason: 0,
    explain: 'Oxygen, nitrogen and carbon dioxide are gases at room temperature. Water is a liquid (but its gas, water vapour, is in the air too).' },
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['🏭 Factory smoke', '🚗 Car exhaust', '🍂 Falling leaves', '🧴 Plastic litter'], odd: 2,
    reasons: ['It is natural – the others are pollution caused by humans', 'It is the only one that is brown', 'It is the only one found outside'], reason: 0,
    explain: 'Pollution is caused by humans. Leaves falling into a river happen naturally.' },
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['🌧️ Rain', '❄️ Snow', '☁️ Cloud', '🧊 Hail'], odd: 2,
    reasons: ['It stays in the sky – the others are precipitation that falls', 'It is the only one made of water', 'It is the only one that is cold'], reason: 0,
    explain: 'Rain, snow and hail are kinds of precipitation: water falling from clouds.' },

  // ---------- Build a sentence ----------
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Air is a', ['mixture', 'single kind'], 'of gases, and most of it is', ['nitrogen', 'oxygen'], '.'],
    explain: 'Air is about 78% nitrogen and 21% oxygen.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Most water on Earth is', ['not pure', 'pure'], 'because it has substances', ['dissolved', 'frozen'], 'in it.'],
    explain: 'Even clear water, like tap water, has substances dissolved in it.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['When water vapour', ['cools', 'warms up'], ', it', ['condenses', 'evaporates'], 'into tiny drops of water.'],
    explain: 'That is how clouds form.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Science and technology can have', ['good and bad', 'only good'], 'effects on our', ['local area', 'weather forecast'], '.'],
    explain: 'A factory can pollute a river, but a water treatment works can help clean it.' },
  ],
});
})();
