/* Question bank: Earth in Space (Cambridge Primary Science 5ESs.01, 5ESs.02, 5ESs.03)
   Each question is one object. "type" says which activity it is – see the engine (index.html) for the formats.
   In "sentence" questions the right choice is written first (the engine shuffles them); "answers" lists other true versions.
   Diagrams are drawn here (600 × 360). Label positions are in % across and down the diagram. */
window.BANKS = window.BANKS || [];
(() => {
let uid = 0;
const space = inner => `<svg class="dg" viewBox="0 0 600 360" role="img"><rect width="600" height="360" rx="16" fill="#0b1638"/>
  ${[[40, 30], [120, 300], [560, 40], [520, 320], [80, 160], [470, 90], [200, 40], [420, 330], [570, 200], [30, 250], [150, 90], [330, 20]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.8" fill="#fff" opacity=".8"/>`).join('')}${inner}</svg>`;
// A recognisable Earth: blue oceans, Europe and Africa, ice at the poles, a thin atmosphere and a shadowed side.
// tilt = how far the poles lean (degrees, clockwise); lit = which side faces the Sun ('left', 'right' or 'front').
function earth(cx, cy, r, tilt = 0, lit = 'front') {
  const id = 'e' + (++uid);
  const shade = lit === 'left' ? 'x1="0" x2="1"' : lit === 'right' ? 'x1="1" x2="0"' : 'x1="0.2" y1="0.1" x2="1" y2="0.9"';
  return `<defs>
      <radialGradient id="${id}o" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#5fb4ff"/><stop offset="1" stop-color="#1b4fa8"/></radialGradient>
      <linearGradient id="${id}s" ${shade}><stop offset="0.45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.55"/></linearGradient>
      <clipPath id="${id}c"><circle cx="${cx}" cy="${cy}" r="${r}"/></clipPath></defs>
    <circle cx="${cx}" cy="${cy}" r="${r + r * 0.07}" fill="#8fd0ff" opacity=".22"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${id}o)"/>
    <g clip-path="url(#${id}c)"><g transform="translate(${cx} ${cy}) rotate(${tilt}) scale(${r})">
      <path d="M-0.30,-0.42 C-0.18,-0.56 0.02,-0.62 0.22,-0.58 C0.36,-0.54 0.38,-0.44 0.24,-0.40 C0.14,-0.44 0.06,-0.38 -0.02,-0.40 C-0.12,-0.36 -0.22,-0.34 -0.30,-0.42 Z" fill="#6cc04a"/>
      <path d="M-0.08,-0.30 C0.12,-0.36 0.34,-0.28 0.42,-0.12 C0.48,0.02 0.40,0.10 0.34,0.24 C0.28,0.44 0.16,0.62 0.04,0.68 C-0.04,0.58 -0.08,0.40 -0.14,0.24 C-0.24,0.14 -0.40,0.04 -0.38,-0.12 C-0.34,-0.24 -0.20,-0.30 -0.08,-0.30 Z" fill="#7cc65a"/>
      <path d="M-0.08,-0.30 C0.02,-0.28 0.10,-0.18 0.04,-0.08 C-0.06,-0.12 -0.16,-0.16 -0.20,-0.24 Z" fill="#d9b86a" opacity=".85"/>
      <path d="M0.44,-0.24 C0.56,-0.22 0.62,-0.10 0.56,0.00 C0.50,-0.04 0.46,-0.14 0.44,-0.24 Z" fill="#c8a85c"/>
      <path d="M-1.00,-0.12 C-0.82,-0.10 -0.66,0.04 -0.66,0.20 C-0.68,0.42 -0.76,0.58 -0.86,0.72 L-1.00,0.40 Z" fill="#6cc04a"/>
      <ellipse cx="0" cy="-1.02" rx="0.62" ry="0.2" fill="#f4f8ff"/><ellipse cx="0" cy="1.0" rx="0.7" ry="0.22" fill="#f4f8ff"/>
      <path d="M-0.6,-0.7 q0.2,-0.06 0.4,0 M0.2,0.42 q0.22,-0.05 0.4,0.02 M-0.5,0.2 q0.15,-0.05 0.3,0" stroke="#fff" stroke-opacity=".55" stroke-width="0.05" fill="none" stroke-linecap="round"/>
    </g><rect x="${cx - r}" y="${cy - r}" width="${2 * r}" height="${2 * r}" fill="url(#${id}s)"/></g>`;
}
const DEG = Math.PI / 180;

// The Earth's tilt. Poles are white dots on the surface; the axis carries on beyond them.
const T = { cx: 300, cy: 185, r: 100, a: 23.5 };
const dir = [Math.sin(T.a * DEG), -Math.cos(T.a * DEG)];
const at = d => [T.cx + dir[0] * d, T.cy + dir[1] * d];
const TILT = space(`
  <line x1="${at(-160)[0]}" y1="${at(-160)[1]}" x2="${at(160)[0]}" y2="${at(160)[1]}" stroke="#ff5a5f" stroke-width="4" stroke-linecap="round" stroke-dasharray="10 6"/>
  ${earth(T.cx, T.cy, T.r, T.a, 'front')}
  <ellipse cx="${T.cx}" cy="${T.cy}" rx="${T.r}" ry="17" transform="rotate(${T.a} ${T.cx} ${T.cy})" fill="none" stroke="#ffd23f" stroke-width="3.5"/>
  <line x1="${at(-100)[0]}" y1="${at(-100)[1]}" x2="${at(100)[0]}" y2="${at(100)[1]}" stroke="#ff5a5f" stroke-width="3" stroke-opacity=".55" stroke-dasharray="6 6"/>
  <circle cx="${at(100)[0]}" cy="${at(100)[1]}" r="7" fill="#fff" stroke="#1d2340" stroke-width="2"/><circle cx="${at(-100)[0]}" cy="${at(-100)[1]}" r="7" fill="#fff" stroke="#1d2340" stroke-width="2"/>`);
const pct = ([x, y]) => [+(x / 6).toFixed(1), +(y / 3.6).toFixed(1)];

// The Earth's orbit, seen from above the North Pole: only slightly squashed (drawn a little more than the real
// orbit so the shape can be seen), travelled anticlockwise, with the Sun slightly off-centre
const ORBIT = space(`<ellipse cx="300" cy="180" rx="205" ry="163" fill="none" stroke="#9fb8ff" stroke-width="3" stroke-dasharray="9 6"/>
  <path d="M330,17 L270,17" stroke="#ffd23f" stroke-width="6" stroke-linecap="round"/><path d="M268,17 l14,-9 m-14,9 l14,9" stroke="#ffd23f" stroke-width="6" stroke-linecap="round"/>
  <circle cx="285" cy="180" r="58" fill="#ffd23f" opacity=".22"/><circle cx="285" cy="180" r="38" fill="#ffd23f"/>
  ${earth(505, 180, 22)}`);
// The Moon and an artificial satellite orbiting the Earth
const MOON = space(`<circle cx="260" cy="180" r="170" fill="none" stroke="#9fb8ff" stroke-width="3" stroke-dasharray="9 6"/>
  ${earth(260, 180, 64, 0, 'left')}
  <circle cx="430" cy="180" r="21" fill="#cfd3dc"/><circle cx="424" cy="174" r="4" fill="#aeb3bf"/><circle cx="437" cy="189" r="3.5" fill="#aeb3bf"/><circle cx="430" cy="166" r="2.5" fill="#aeb3bf"/>
  <g transform="translate(184,92) rotate(-30)"><rect x="-8" y="-6" width="16" height="12" rx="2" fill="#e8e8e8"/><rect x="-27" y="-4" width="17" height="8" fill="#4f86d6"/><rect x="10" y="-4" width="17" height="8" fill="#4f86d6"/></g>`);
// Why we have seasons: the axis always leans the same way
const tiltedEarth = (cx, cy, lit) => `<line x1="${cx - 20}" y1="${cy + 50}" x2="${cx + 20}" y2="${cy - 50}" stroke="#ff5a5f" stroke-width="4" stroke-linecap="round"/>${earth(cx, cy, 36, 23.5, lit)}<circle cx="${cx + 14}" cy="${cy - 33}" r="4.5" fill="#fff" stroke="#1d2340" stroke-width="1.5"/>`;
const SEASONS = space(`<ellipse cx="300" cy="180" rx="205" ry="60" fill="none" stroke="#9fb8ff" stroke-width="2.5" stroke-dasharray="8 6"/>
  <circle cx="300" cy="180" r="60" fill="#ffd23f" opacity=".22"/><circle cx="300" cy="180" r="42" fill="#ffd23f"/>
  ${tiltedEarth(95, 180, 'right')}${tiltedEarth(505, 180, 'left')}`);

window.BANKS.push({
  id: 'earth-space', title: 'Earth in Space', icon: '🌍', objectives: '5ESs.01 · 5ESs.02 · 5ESs.03',
  explorer: { name: 'Seasons Explorer', icon: '🌍', href: '../earth-seasons/index.html' },
  intro: 'The Earth\'s orbit around the Sun, how its tilt causes the seasons, and satellites.',
  items: [

  // ---------- Label the diagram ----------
  { type: 'label', prompt: 'Label the diagram of the Earth.', svg: TILT,
    labels: [{ text: 'North Pole', x: 26, y: 9, px: 56.6, py: 25.9 }, { text: 'Axis', x: 85, y: 9, px: 59, py: 17 }, { text: 'South Pole', x: 16, y: 90, px: 43.4, py: 76.9 },
      { text: 'Equator', x: 87, y: 70, px: 65.3, py: 62.5 }, { text: 'Northern hemisphere', x: 15, y: 40, px: 45.8, py: 38.9 }, { text: 'Southern hemisphere', x: 68, y: 93, px: 54.2, py: 69 }],
    extra: ['Orbit'],
    explain: 'The axis is an imaginary line the Earth spins around. It is tilted. The Equator divides the Earth into the northern and southern hemispheres (halves).' },
  { type: 'label', prompt: 'This is the Earth\'s orbit around the Sun, seen from above the North Pole. Label it.', svg: ORBIT,
    labels: [{ text: 'Anticlockwise', x: 18, y: 9, px: 45, py: 4.7 }, { text: 'Slight ellipse', x: 18, y: 88, px: 40, py: 91 }, { text: 'One orbit takes 365¼ days', x: 82, y: 84, px: 84.2, py: 56 }],
    extra: ['Clockwise', 'Perfect circle', 'One orbit takes 24 hours'],
    explain: 'The Earth orbits the Sun anticlockwise (seen from above the North Pole). Its orbit is a slightly squashed circle called an ellipse, and one orbit takes 365¼ days.' },
  { type: 'label', prompt: 'Label the Earth and its satellites.', svg: MOON,
    labels: [{ text: 'Earth', x: 17, y: 50, px: 33, py: 50 }, { text: 'Moon – a natural satellite', x: 82, y: 30, px: 71.7, py: 45 }, { text: 'Artificial satellite', x: 14, y: 10, px: 30.7, py: 25.6 }, { text: 'The Moon\'s orbit', x: 80, y: 90, px: 63.3, py: 83.3 }],
    extra: ['Sun', 'Star'],
    explain: 'A satellite is an object that orbits a larger object. The Moon is natural; satellites made by people are artificial.' },
  { type: 'label', prompt: 'The Earth\'s axis always leans the same way. Label the two Earths.', svg: SEASONS,
    labels: [{ text: 'June: summer in the north', x: 20, y: 12, px: 16, py: 38 }, { text: 'December: winter in the north', x: 78, y: 12, px: 84, py: 38 }, { text: 'Sun', x: 50, y: 88, px: 50, py: 62 }],
    extra: ['June: winter in the north', 'December: summer in the north'],
    explain: 'On the left, the North Pole leans towards the Sun, so it is summer in the northern hemisphere. On the right, it leans away, so it is winter there.' },

  // ---------- Put in order ----------
  { type: 'order', prompt: 'Put these in order, from the shortest time to the longest.', first: 'Shortest', last: 'Longest',
    items: ['A space station orbiting the Earth once', 'The Earth spinning once', 'The Moon orbiting the Earth once', 'The Earth orbiting the Sun once'],
    explain: 'About 90 minutes, 24 hours, about 27 days, then 365¼ days.' },
  { type: 'order', prompt: 'Starting with spring, put the seasons in order as the Earth orbits the Sun.', first: 'First', last: 'Last',
    items: ['Spring', 'Summer', 'Autumn', 'Winter'],
    explain: 'One trip around the Sun gives one of each season – that\'s one year.' },
  { type: 'order', prompt: 'Put these months in order of daylight in Bratislava, from most to least.', first: 'Most daylight', last: 'Least daylight',
    items: ['June', 'August', 'October', 'December'],
    explain: 'Slovakia is in the northern hemisphere, so it has its longest days in June and its shortest days in December.' },

  // ---------- Match up ----------
  { type: 'match', prompt: 'Match each word to its meaning.',
    pairs: [['Orbit', 'The path an object takes around another object'], ['Axis', 'An imaginary line the Earth spins around'], ['Satellite', 'An object in space that orbits a larger object'], ['Hemisphere', 'Half of the Earth'], ['Equator', 'An imaginary line around the middle of the Earth']],
    explain: 'These are the key words for this topic.' },
  { type: 'match', prompt: 'Match each event to how long it takes.',
    pairs: [['The Earth spins once', '24 hours'], ['The Earth orbits the Sun once', '365¼ days'], ['The Moon orbits the Earth once', 'About 27 days'], ['A space station orbits the Earth once', 'About 90 minutes']],
    explain: 'A day is one spin, and a year is one orbit of the Sun.' },
  { type: 'match', prompt: 'Match each word to its meaning.',
    pairs: [['Ellipse', 'A slightly squashed circle'], ['Anticlockwise', 'The way the Earth orbits, seen from above the North Pole'], ['Natural satellite', 'A satellite that was not made by people, like the Moon'], ['Artificial satellite', 'A satellite made by people, like a weather satellite'], ['Leap year', 'A year with an extra day, every four years']],
    explain: 'The extra quarter day each year adds up to one whole day every four years – that\'s why we have leap years.' },

  // ---------- Fill the gaps ----------
  { type: 'cloze', prompt: 'Fill the gaps about the Earth\'s orbit.',
    text: 'The Earth {orbits} the Sun. One orbit takes {365¼} days, so every four years we add an extra day in a {leap} year. The orbit is a slightly squashed circle called an {ellipse}.',
    extra: ['24', 'square', 'month'],
    explain: 'The Earth\'s orbit is nearly a circle – just slightly squashed.' },
  { type: 'cloze', prompt: 'Fill the gaps about the seasons.',
    text: 'The Earth\'s {axis} is {tilted}. When the northern hemisphere leans {towards} the Sun, it is {summer} there and {winter} in the southern hemisphere.',
    extra: ['away from', 'spring'],
    explain: 'The two hemispheres always have opposite seasons.' },
  { type: 'cloze', prompt: 'Fill the gaps about satellites.',
    text: 'A {satellite} is an object that orbits a {larger} object. The Moon is a {natural} satellite of the Earth. Weather satellites are {artificial} satellites, because people made them.',
    extra: ['smaller', 'star'],
    explain: 'Natural or artificial – both kinds of satellite orbit a larger object.' },

  // ---------- True or false ----------
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'We have summer because the Earth gets closer to the Sun.', a: false, why: 'The Earth is closest to the Sun in early January – winter in Slovakia! The seasons are caused by the tilt.' },
      { s: 'The Earth takes 365¼ days to orbit the Sun.', a: true, why: 'That\'s why we add an extra day every four years, in a leap year.' },
      { s: 'The Earth\'s orbit is a very long, thin oval.', a: false, why: 'It is only slightly squashed – very nearly a circle.' },
      { s: 'When it is summer in Slovakia, it is winter in Australia.', a: true, why: 'Slovakia is in the northern hemisphere and Australia is in the southern hemisphere.' },
      { s: 'The Earth\'s axis points in the same direction all year.', a: true, why: 'This is why each hemisphere leans towards the Sun for part of the year and away for the rest.' },
    ],
    explain: 'These are some of the most common mix-ups about the seasons.' },
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'Day and night happen because the Earth orbits the Sun.', a: false, why: 'Day and night happen because the Earth spins on its axis.' },
      { s: 'Seen from above the North Pole, the Earth orbits the Sun clockwise.', a: false, why: 'It orbits anticlockwise.' },
      { s: 'Only people can make satellites.', a: false, why: 'The Moon is a natural satellite. Satellites made by people are artificial.' },
      { s: 'The Moon is a satellite of the Earth.', a: true, why: 'It orbits the Earth, which is larger than it.' },
      { s: 'Places on the Equator have about 12 hours of daylight all year.', a: true, why: 'The tilt makes little difference there, so day length hardly changes.' },
      { s: 'The Sun orbits the Earth.', a: false, why: 'The Earth orbits the Sun. The Sun is at the centre of the Solar System.' },
    ],
    explain: 'Watch out for these mix-ups!' },

  // ---------- Sort into groups ----------
  { type: 'sort', prompt: 'What causes each of these?', groups: ['🔄 The Earth spinning', '☀️ The tilted Earth orbiting the Sun'],
    items: [{ t: 'Day and night', g: 0 }, { t: 'The Sun seeming to rise and set', g: 0 }, { t: 'Shadows changing during a day', g: 0 }, { t: 'The seasons', g: 1 }, { t: 'Longer days in summer', g: 1 }, { t: 'A year', g: 1 }],
    explain: 'One spin takes a day. One orbit takes a year – and the tilt gives us seasons along the way.' },
  { type: 'sort', prompt: 'In June, which hemisphere has each of these?', groups: ['⬆️ Northern hemisphere', '⬇️ Southern hemisphere'],
    items: [{ t: 'Summer', g: 0 }, { t: 'Long days', g: 0 }, { t: 'Sun high at midday', g: 0 }, { t: 'Winter', g: 1 }, { t: 'Short days', g: 1 }, { t: 'Sun low at midday', g: 1 }],
    explain: 'In June the northern hemisphere leans towards the Sun, and the southern hemisphere leans away.' },

  // ---------- Venn diagrams ----------
  { type: 'venn', prompt: 'Sort these objects.', sets: ['Natural', 'Orbits the Earth'],
    items: [{ t: 'Moon', em: '🌕', in: [1, 1] }, { t: 'Sun', em: '☀️', in: [1, 0] }, { t: 'Mars', em: '🔴', in: [1, 0] }, { t: 'Space station', em: '🛰️', in: [0, 1] }, { t: 'Weather satellite', em: '📡', in: [0, 1] }, { t: 'Mars rover', em: '🚙', in: [0, 0] }],
    explain: 'The Moon is natural and orbits the Earth, so it goes in the middle. The Mars rover was made by people and is on Mars, so it goes outside.' },
  { type: 'venn', prompt: 'Sort these places.', sets: ['Has 24 hours of daylight on some days', 'In the northern hemisphere'],
    items: [{ t: 'Tromsø, Norway', em: '🏔️', in: [1, 1] }, { t: 'North Pole', em: '🧊', in: [1, 1] }, { t: 'South Pole', em: '🐧', in: [1, 0] }, { t: 'Bratislava', em: '🏰', in: [0, 1] }, { t: 'London', em: '🏙️', in: [0, 1] }, { t: 'Sydney', em: '🦘', in: [0, 0] }, { t: 'Cape Town', em: '⛰️', in: [0, 0] }],
    explain: 'Only places near the poles get 24 hours of daylight in summer. The South Pole gets it in December.' },

  // ---------- Carroll diagrams ----------
  { type: 'carroll', prompt: 'Sort these objects into the Carroll diagram.', rows: ['Natural', 'Made by people'], cols: ['Orbits the Earth', 'Does not orbit the Earth'],
    items: [{ t: 'Moon', em: '🌕', r: 0, c: 0 }, { t: 'Sun', em: '☀️', r: 0, c: 1 }, { t: 'Mars', em: '🔴', r: 0, c: 1 }, { t: 'Space station', em: '🛰️', r: 1, c: 0 }, { t: 'Weather satellite', em: '📡', r: 1, c: 0 }, { t: 'Mars rover', em: '🚙', r: 1, c: 1 }],
    explain: 'The Moon is the only natural object here that orbits the Earth.' },
  { type: 'carroll', prompt: 'Sort these objects into the Carroll diagram.', rows: ['Is a satellite', 'Is not a satellite'], cols: ['Natural', 'Made by people'],
    items: [{ t: 'Moon', em: '🌕', r: 0, c: 0 }, { t: 'Weather satellite', em: '📡', r: 0, c: 1 }, { t: 'Space station', em: '🛰️', r: 0, c: 1 }, { t: 'Sun', em: '☀️', r: 1, c: 0 }, { t: 'Mars rover', em: '🚙', r: 1, c: 1 }, { t: 'Rocket waiting on the launch pad', em: '🚀', r: 1, c: 1 }],
    explain: 'A satellite orbits a larger object. The rocket on the launch pad is not a satellite – it isn\'t orbiting anything yet!' },

  // ---------- Read the table ----------
  { type: 'table', prompt: 'Use the table to answer the questions.', caption: 'Hours of daylight on the 21st of each month',
    table: { head: ['Place', 'March', 'June', 'September', 'December'], rows: [['Bratislava, Slovakia', '12', '16', '12', '8'], ['Quito, Ecuador (on the Equator)', '12', '12', '12', '12'], ['Sydney, Australia', '12', '10', '12', '14'], ['Tromsø, Norway (far north)', '12', '24', '12', '0']] },
    questions: [
      { q: 'Which place has 24 hours of daylight in June?', options: ['Bratislava', 'Quito', 'Sydney', 'Tromsø'], a: 3, why: 'Tromsø is so far north that the Sun does not set in midsummer.' },
      { q: 'Which place has the same daylight all year?', options: ['Bratislava', 'Quito', 'Sydney', 'Tromsø'], a: 1, why: 'Quito is on the Equator.' },
      { q: 'How many more hours of daylight does Bratislava have in June than in December?', options: ['4', '8', '12', '16'], a: 1, why: '16 − 8 = 8 hours.' },
      { q: 'In which month does Sydney have the most daylight?', options: ['March', 'June', 'September', 'December'], a: 3, why: 'December is summer in the southern hemisphere.' },
      { q: 'In March and September every place has 12 hours. Why?', options: ['Neither hemisphere is leaning towards the Sun', 'The Earth stops spinning', 'The Earth is closest to the Sun', 'It is summer everywhere'], a: 0, why: 'At these times the tilt doesn\'t favour either hemisphere.' },
    ],
    explain: 'The further a place is from the Equator, the bigger the change in daylight through the year.' },
  { type: 'table', prompt: 'Use the table to answer the questions.', caption: 'Some objects and their orbits',
    table: { head: ['Object', 'What it orbits', 'Time for one orbit'], rows: [['Moon', 'Earth', 'About 27 days'], ['Earth', 'Sun', '365¼ days'], ['Space station', 'Earth', 'About 90 minutes'], ['Mars', 'Sun', '687 days']] },
    questions: [
      { q: 'Which takes the shortest time to complete one orbit?', options: ['Moon', 'Earth', 'Space station', 'Mars'], a: 2, why: 'About 90 minutes.' },
      { q: 'Which two objects orbit the Sun?', options: ['Moon and Earth', 'Earth and Mars', 'Moon and space station', 'Space station and Mars'], a: 1, why: 'Read down the "What it orbits" column.' },
      { q: 'Which is a natural satellite of the Earth?', options: ['Moon', 'Space station', 'Mars', 'Sun'], a: 0, why: 'It orbits the Earth and was not made by people.' },
      { q: 'About how many times does the space station orbit the Earth in one day (24 hours)?', options: ['4', '16', '90', '365'], a: 1, why: '24 hours is 1,440 minutes, and 1,440 ÷ 90 = 16.' },
    ],
    explain: 'Use the column headings to find what you need.' },

  // ---------- Odd one out ----------
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['🌕 Moon', '📡 Weather satellite', '🛰️ Space station', '☀️ Sun'], odd: 3,
    reasons: ['It does not orbit the Earth – the others do', 'It is the only natural one', 'It is the only one that is round'], reason: 0,
    explain: 'The Earth orbits the Sun, not the other way round. The Moon is natural too, so that can\'t be the reason.' },
  { type: 'odd', prompt: 'Which city is the odd one out?', items: ['🏰 Bratislava', '🏙️ London', '🗼 Tokyo', '🦘 Sydney'], odd: 3,
    reasons: ['It is in the southern hemisphere, so it has winter in June', 'It is the only big city', 'It is on the Equator'], reason: 0,
    explain: 'The others are in the northern hemisphere and have summer in June.' },
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['🌕 Moon', '🛰️ Space station', '📡 GPS satellite', '🔭 Hubble Space Telescope'], odd: 0,
    reasons: ['It is a natural satellite – the others were made by people', 'It does not orbit the Earth', 'It is the only one you can see from Earth'], reason: 0,
    explain: 'All four orbit the Earth, but only the Moon was not made by people.' },
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['🌷 Spring', '☀️ Summer', '🌙 Night', '❄️ Winter'], odd: 2,
    reasons: ['Night is caused by the Earth spinning – the others by the tilted Earth orbiting the Sun', 'It is the coldest', 'It only happens in Slovakia'], reason: 0,
    explain: 'Spring, summer and winter are seasons. Night happens every day as the Earth spins.' },

  // ---------- Build a sentence ----------
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['When the', ['northern', 'southern'], 'hemisphere leans towards the Sun, it is summer in', ['Slovakia', 'Australia'], '.'],
    answers: [[0, 0], [1, 1]],
    explain: 'Slovakia is in the northern hemisphere and Australia is in the southern hemisphere – so both of these sentences are true.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['The Earth takes', ['365¼ days', '24 hours'], 'to orbit the Sun and', ['24 hours', '365¼ days'], 'to spin once.'],
    explain: 'A year is one orbit; a day is one spin.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['The Moon is a', ['natural', 'artificial'], 'satellite because it', ['was not made by people', 'was made by people'], '.'],
    explain: 'Satellites made by people, like weather satellites, are artificial.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Seen from above the North Pole, the Earth orbits the Sun', ['anticlockwise', 'clockwise'], 'in a path that is', ['a slightly squashed circle', 'a very long, thin oval'], '.'],
    explain: 'This path is called an ellipse.' },
  ],
});
})();
