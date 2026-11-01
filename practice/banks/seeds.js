/* Question bank: Seeds and seed dispersal (Cambridge Primary Science 5Bp.03, 5Bp.04)
   Each question is one object. "type" says which activity it is – see the engine (index.html) for the formats.
   In "sentence" questions the right choice is written first (the engine shuffles them).
   Facts match the Seed Lab explorer: bean seeds need water and warmth (not light or soil) to germinate, and seeds travel in
   7 ways: wind, water, hitching a ride, seeds as food, bursting, drop and roll, and shakers.
   The seed drawings are copied from Seed Lab. Diagrams are drawn here (600 × 360). Label positions are in % across and down the diagram. */
window.BANKS = window.BANKS || [];
(() => {
// Tiny hooks around a round seed (burdock, cleavers)
const HOOKS = (cx, cy, r, n, col) => { let o = ''; for (let a = 0; a < 360; a += 360 / n) { const t = a * Math.PI / 180, x1 = cx + r * Math.cos(t), y1 = cy + r * Math.sin(t), x2 = cx + (r + 3.5) * Math.cos(t), y2 = cy + (r + 3.5) * Math.sin(t);
    o += `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)} l${(1.4 * Math.cos(t + 1.6)).toFixed(1)} ${(1.4 * Math.sin(t + 1.6)).toFixed(1)}" stroke="${col}" stroke-width="1.2" fill="none"/>`; } return o; };
// Pictures of each seed, drawn so the clue to how it travels can be seen
const SEEDPIC = {
  dandelion: () => { let o = '<line x1="20" y1="37" x2="20" y2="17" stroke="#8a6a3a" stroke-width="1.5"/><ellipse cx="20" cy="35" rx="1.8" ry="3.5" fill="#6b4b22"/>';
    for (let a = -75; a <= 75; a += 15) { const r = a * Math.PI / 180, x = 20 + 14 * Math.sin(r), y = 17 - 13 * Math.cos(r); o += `<line x1="20" y1="17" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#9aa3b5" stroke-width="1"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.6" fill="#c9cfdc"/>`; }
    return o; },
  sycamore: () => '<path d="M19 27 C13 19 6 11 3 4 C10 5 18 13 21 25 Z" fill="#d6b77a" stroke="#8a6a3a"/><path d="M21 27 C27 19 34 11 37 4 C30 5 22 13 19 25 Z" fill="#d6b77a" stroke="#8a6a3a"/><circle cx="17" cy="28" r="4" fill="#8a6a3a"/><circle cx="23" cy="28" r="4" fill="#8a6a3a"/>',
  lime: () => '<path d="M24 3 C33 8 33 22 26 30 C21 22 19 10 24 3 Z" fill="#d4e6a2" stroke="#8fae55"/><path d="M25 16 Q18 24 14 30" stroke="#7d9a4a" stroke-width="1.5" fill="none"/><circle cx="14" cy="32" r="3" fill="#9b7a4a"/><circle cx="9" cy="30" r="3" fill="#9b7a4a"/><circle cx="17" cy="36" r="3" fill="#9b7a4a"/>',
  cherry: () => '<path d="M21 3 Q14 13 12 24" stroke="#5c7a2e" stroke-width="2" fill="none"/><path d="M21 3 Q27 13 28 22" stroke="#5c7a2e" stroke-width="2" fill="none"/><path d="M21 4 Q29 1 33 6 Q26 8 21 4Z" fill="#5fbf4f"/><circle cx="12" cy="29" r="7.5" fill="#d6283a"/><circle cx="28" cy="27" r="7.5" fill="#c41d30"/><circle cx="9" cy="26" r="2" fill="#fff" opacity=".6"/>',
  burdock: () => { let o = '<circle cx="20" cy="20" r="9" fill="#8a6a3a"/>';
    for (let a = 0; a < 360; a += 30) { const r = a * Math.PI / 180, x1 = 20 + 9 * Math.cos(r), y1 = 20 + 9 * Math.sin(r), x2 = 20 + 16 * Math.cos(r), y2 = 20 + 16 * Math.sin(r);
      o += `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)} q${(2 * Math.cos(r + 1.6)).toFixed(1)} ${(2 * Math.sin(r + 1.6)).toFixed(1)} ${(-1.5 * Math.cos(r)).toFixed(1)} ${(-1.5 * Math.sin(r)).toFixed(1)}" stroke="#6b4b22" stroke-width="1.5" fill="none"/>`; }
    return o; },
  acorn: () => '<line x1="20" y1="3" x2="20" y2="10" stroke="#6b4b22" stroke-width="2"/><ellipse cx="20" cy="25" rx="8.5" ry="11" fill="#c58b3f"/><path d="M10 20 Q20 6 30 20 Z" fill="#7a5a2e"/><path d="M13 17 L27 17 M15 13 L25 13" stroke="#5a4020"/>',
  coconut: () => '<ellipse cx="20" cy="21" rx="13" ry="15" fill="#7a4f2a"/><path d="M11 12 Q14 22 12 32 M18 7 Q21 20 18 35 M27 10 Q25 21 28 31" stroke="#a87a4a" fill="none"/><circle cx="17" cy="13" r="1.6" fill="#3a2410"/><circle cx="22" cy="12" r="1.6" fill="#3a2410"/><circle cx="20" cy="16" r="1.6" fill="#3a2410"/>',
  alder: () => '<ellipse cx="13" cy="17" rx="7" ry="10" fill="#5b3d22"/><path d="M7 13 L19 13 M6 18 L20 18 M8 23 L18 23" stroke="#3a2410"/><line x1="13" y1="7" x2="13" y2="2" stroke="#5b3d22" stroke-width="2"/><ellipse cx="29" cy="26" rx="6" ry="4.5" fill="#e6d3a8" stroke="#a07d4c"/><circle cx="29" cy="26" r="2" fill="#8a6a3a"/><ellipse cx="31" cy="35" rx="5" ry="3.8" fill="#e6d3a8" stroke="#a07d4c"/><circle cx="31" cy="35" r="1.7" fill="#8a6a3a"/>',
  pea: () => '<path d="M3 31 Q20 40 37 21 Q23 31 3 31 Z" fill="#6cbf4a" stroke="#3f8a2a"/><path d="M5 29 Q20 18 35 19" stroke="#3f8a2a" stroke-width="3" fill="none"/><circle cx="13" cy="31" r="3.5" fill="#a3e27f"/><circle cx="20" cy="30" r="3.5" fill="#a3e27f"/><circle cx="27" cy="27" r="3.5" fill="#a3e27f"/><circle cx="10" cy="12" r="3" fill="#a3e27f"/><path d="M14 10 l5 -2 M14 14 l5 0" stroke="#9aa3b5"/>',
  iris: () => '<path d="M8 4 Q3 16 12 23 Q21 16 16 4 Z" fill="#7fae4a" stroke="#4f7d2a"/><path d="M12 5 V22" stroke="#4f7d2a"/><ellipse cx="24" cy="29" rx="5.5" ry="3.6" fill="#a8743f" stroke="#6b4b22"/><ellipse cx="33.5" cy="27" rx="4.5" ry="3.2" fill="#a8743f" stroke="#6b4b22"/><path d="M15 33 q4 -3 8 0 t8 0 t8 0" stroke="#4a90d9" stroke-width="2" fill="none"/><path d="M13 38 q4 -3 8 0 t8 0 t8 0" stroke="#4a90d9" stroke-width="2" fill="none"/>',
  cleavers: () => '<path d="M20 14 V4" stroke="#6b8a3a" stroke-width="1.5"/><circle cx="14.5" cy="22" r="7.5" fill="#a9c27a" stroke="#6b8a3a"/><circle cx="25.5" cy="22" r="7.5" fill="#a9c27a" stroke="#6b8a3a"/>' + HOOKS(14.5, 22, 7.5, 10, '#55702a') + HOOKS(25.5, 22, 7.5, 10, '#55702a'),
  blackberry: () => '<path d="M20 9 l-6 -5 M20 9 l6 -5 M20 9 V2" stroke="#4f9e3a" stroke-width="2"/>' + [[16, 13], [24, 13], [12, 18], [20, 18], [28, 18], [14, 24], [22, 24], [30, 23], [17, 30], [25, 29], [21, 35]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.3" fill="#3b1d4a"/><circle cx="${x - 1.2}" cy="${y - 1.4}" r="1.1" fill="#fff" opacity=".45"/>`).join(''),
  gorse: () => '<path d="M5 31 Q13 23 21 27 Q29 31 35 21" stroke="#2b2b2b" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M8 36 Q16 31 22 35 Q28 39 34 31" stroke="#4a4a4a" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="12" cy="13" r="2.6" fill="#6b4b22"/><circle cx="22" cy="8" r="2.6" fill="#6b4b22"/><circle cx="31" cy="12" r="2.6" fill="#6b4b22"/><path d="M14 17 l-2 4 M22 12 l0 5 M29 16 l2 4" stroke="#9aa3b5"/>',
  conker: () => '<path d="M3 21 Q3 37 18 38 Q11 30 11 21 Z" fill="#7fbf4a" stroke="#4f8a2a"/><path d="M37 21 Q37 37 22 38 Q29 30 29 21 Z" fill="#7fbf4a" stroke="#4f8a2a"/><path d="M4 27 l-3 0 M6 33 l-3 2 M36 27 l3 0 M34 33 l3 2 M11 37 l-1 3 M29 37 l1 3" stroke="#4f8a2a" stroke-width="1.5"/><circle cx="20" cy="20" r="10" fill="#8a3f1a"/><ellipse cx="20" cy="27" rx="6" ry="3" fill="#dcc08f"/><ellipse cx="16" cy="15" rx="3" ry="2" fill="#fff" opacity=".45"/>',
  chestnut: () => { let o = '<path d="M4 26 Q20 42 36 26 Q20 33 4 26 Z" fill="#b5c95a" stroke="#8aa03a"/>';
    for (let a = 15; a <= 165; a += 15) { const t = a * Math.PI / 180, x = 20 + 15 * Math.cos(t), y = 29 + 9 * Math.sin(t); o += `<line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${(x + 4 * Math.cos(t)).toFixed(1)}" y2="${(y + 4 * Math.sin(t)).toFixed(1)}" stroke="#8aa03a" stroke-width="1.2"/>`; }
    return o + '<path d="M9 27 Q9 15 16 9 Q21 16 20 27 Z" fill="#7a4520"/><path d="M20 27 Q20 15 26 9 Q32 16 31 27 Z" fill="#8a5028"/><path d="M16 9 l-1 -4 M16 9 l2 -4 M26 9 l-1 -4 M26 9 l2 -4" stroke="#c9b68a"/>'; },
  poppy: () => '<path d="M20 38 V24" stroke="#6b8a3a" stroke-width="2"/><path d="M12 12 Q11 25 20 26 Q29 25 28 12 Z" fill="#a9b493" stroke="#6b7a5a"/><path d="M11 12 Q20 5 29 12 Q20 9 11 12 Z" fill="#7a8a6a"/><circle cx="14.5" cy="14.5" r="1.3" fill="#2b2b2b"/><circle cx="18.5" cy="15" r="1.3" fill="#2b2b2b"/><circle cx="22.5" cy="15" r="1.3" fill="#2b2b2b"/><circle cx="26" cy="14.5" r="1.3" fill="#2b2b2b"/><circle cx="31" cy="18" r="1" fill="#2b2b2b"/><circle cx="33" cy="23" r="1" fill="#2b2b2b"/><circle cx="8" cy="19" r="1" fill="#2b2b2b"/><circle cx="6.5" cy="24" r="1" fill="#2b2b2b"/><path d="M32 4 q3 3 0 6 M35 6 q3 3 0 6" stroke="#9aa3b5" fill="none"/>',
  nigella: () => '<path d="M20 38 V32" stroke="#6b8a3a" stroke-width="2"/><ellipse cx="20" cy="22" rx="9" ry="11" fill="#d6c79a" stroke="#8a7a50"/><path d="M14 13 Q11 22 14 31 M20 11 V33 M26 13 Q29 22 26 31" stroke="#8a5a8a" fill="none"/><path d="M16 12 l-3 -8 M20 11 V2 M24 12 l3 -8" stroke="#8a7a50" stroke-width="1.5"/><circle cx="30" cy="9" r="1.1" fill="#2b2b2b"/><circle cx="33" cy="14" r="1.1" fill="#2b2b2b"/><circle cx="9" cy="10" r="1.1" fill="#2b2b2b"/>',
  snapdragon: () => '<path d="M20 38 V30" stroke="#6b8a3a" stroke-width="2"/><ellipse cx="20" cy="18" rx="10" ry="12" fill="#b8925f" stroke="#7a5a30"/><ellipse cx="16" cy="15" rx="2.7" ry="3.2" fill="#3a2410"/><ellipse cx="24" cy="15" rx="2.7" ry="3.2" fill="#3a2410"/><ellipse cx="20" cy="23.5" rx="2" ry="2.8" fill="#3a2410"/><circle cx="32" cy="22" r="1" fill="#2b2b2b"/><circle cx="34" cy="27" r="1" fill="#2b2b2b"/><circle cx="31" cy="31" r="1" fill="#2b2b2b"/>',
  balsam: () => '<path d="M8 37 Q4 22 16 20 Q26 20 23 29 Q20 33 17 29" stroke="#4f9e3a" stroke-width="3.5" fill="none"/><path d="M12 37 Q14 24 26 24" stroke="#6cbf4a" stroke-width="3" fill="none"/><circle cx="30" cy="10" r="2.6" fill="#5a4020"/><circle cx="35" cy="17" r="2.6" fill="#5a4020"/><circle cx="24" cy="6" r="2.6" fill="#5a4020"/><path d="M27 13 l-4 4 M32 20 l-4 3 M22 9 l-3 4" stroke="#9aa3b5"/>'
};
const pct = (x, y) => ({ px: +(x / 6).toFixed(1), py: +(y / 3.6).toFixed(1) });
// A seed drawing as a small picture on a card
const pic = (id, s = 30) => `<svg viewBox="0 0 40 40" width="${s}" height="${s}" aria-hidden="true">${SEEDPIC[id]()}</svg>`;

// Five seeds in a row, to label with how each one travels
const ROW = [['dandelion', 70], ['burdock', 185], ['pea', 300], ['poppy', 415], ['coconut', 530]];
const SEEDROW = `<svg class="dg" viewBox="0 0 600 360" role="img"><rect width="600" height="360" rx="16" fill="#eef4fb"/>
  ${ROW.map(([id, x]) => `<rect x="${x - 52}" y="70" width="104" height="120" rx="14" fill="#fff" stroke="#c6d0f2" stroke-width="2"/><svg x="${x - 44}" y="80" width="88" height="88" viewBox="0 0 40 40">${SEEDPIC[id]()}</svg>`).join('')}
  ${ROW.map(([id, x]) => `<text x="${x}" y="58" text-anchor="middle" font-size="15" font-family="sans-serif" font-weight="600" fill="#1d2340">${({ dandelion: 'Dandelion', burdock: 'Burdock', pea: 'Pea', poppy: 'Poppy', coconut: 'Coconut' })[id]}</text>`).join('')}</svg>`;

// A bean seed germinating in the soil
const BEAN = `<svg class="dg" viewBox="0 0 600 360" role="img"><rect width="600" height="360" rx="16" fill="#dff1ff"/>
  <rect y="150" width="600" height="210" fill="#7a5233"/><rect y="150" width="600" height="10" fill="#5a3a20"/>
  <path d="M300 210 C296 250 304 285 296 335" stroke="#f3e7c9" stroke-width="7" fill="none" stroke-linecap="round"/>
  <path d="M298 255 l-22 14 M299 280 l22 12 M297 305 l-20 12" stroke="#f3e7c9" stroke-width="3" stroke-linecap="round"/>
  <path d="M304 196 C312 150 330 120 318 80" stroke="#5fae3f" stroke-width="8" fill="none" stroke-linecap="round"/>
  <ellipse cx="292" cy="72" rx="30" ry="13" fill="#5fbf4f" transform="rotate(-20 292 72)"/><ellipse cx="346" cy="70" rx="30" ry="13" fill="#5fbf4f" transform="rotate(20 346 70)"/>
  <ellipse cx="300" cy="200" rx="46" ry="30" fill="#e9d7a8" stroke="#a88b4e" stroke-width="3"/>
  <path d="M258 196 Q270 168 300 170 L294 186 Z" fill="#c7a46a" stroke="#a88b4e" stroke-width="2"/><path d="M342 204 Q338 226 312 230 L318 214 Z" fill="#c7a46a" stroke="#a88b4e" stroke-width="2"/></svg>`;

window.BANKS.push({
  id: 'seeds', title: 'Seeds and seed dispersal', icon: '🌱', objectives: '5Bp.03 · 5Bp.04',
  explorer: { name: 'Seed Lab', icon: '🌱', href: '../seed-lab/index.html' },
  intro: 'What seeds need to germinate, why plants spread their seeds, and the seven ways seeds travel.',
  items: [

  // ---------- Label the diagram ----------
  { type: 'label', prompt: 'How does each seed travel? Label it.', svg: SEEDROW, alt: 'Five seeds: a dandelion with a parachute, a hooked burdock burr, an open pea pod, a poppy seed head with holes, and a coconut',
    labels: [{ text: 'Wind', x: 11.7, y: 70, ...pct(70, 125) }, { text: 'Hitching a ride', x: 30.8, y: 82, ...pct(185, 125) }, { text: 'Bursting', x: 50, y: 70, ...pct(300, 125) },
      { text: 'Shakers', x: 69.2, y: 82, ...pct(415, 125) }, { text: 'Water', x: 88.3, y: 70, ...pct(530, 125) }],
    extra: ['Drop and roll'],
    explain: 'Look for the clue: a parachute for the wind, hooks to catch on fur, a pod that bursts, a seed head with holes like a pepper pot, and air inside a coconut so it floats.' },
  { type: 'label', prompt: 'This bean seed is germinating. Label the parts.', svg: BEAN, alt: 'A bean seed in the soil with its coat split, a root growing down and a shoot with two leaves growing up',
    labels: [{ text: 'Seed coat', x: 16, y: 50, ...pct(262, 190) }, { text: 'Root', x: 22, y: 82, ...pct(298, 300) }, { text: 'Shoot', x: 78, y: 32, ...pct(318, 120) }, { text: 'Leaves', x: 80, y: 10, ...pct(350, 70) }],
    extra: ['Flower'],
    explain: 'The seed takes in water and its coat splits. The root grows down first, then the shoot grows up towards the light and its first leaves open.' },

  // ---------- Put in order ----------
  { type: 'order', prompt: 'Put the stages of germination in order.', first: 'First', last: 'Last',
    items: ['The seed takes in water and swells', 'The seed coat splits open', 'A root grows down into the soil', 'A shoot grows up towards the light', 'The first leaves open'],
    explain: 'Germination needs water and warmth. Until its leaves open, the seedling uses the food stored inside the seed.' },
  { type: 'order', prompt: 'A cherry seed travels to a new place. Put its journey in order.', first: 'First', last: 'Last',
    items: ['A bird eats a juicy cherry', 'The bird flies far away', 'The seed passes through the bird', 'The seed drops out in the bird\'s poo', 'The seed germinates in a new place'],
    explain: 'The bird gets food, and the cherry tree gets its seed carried far from the parent tree.' },

  // ---------- Match up ----------
  { type: 'match', prompt: 'Match each way of travelling to how it works.',
    pairs: [['Wind', 'Wings or parachutes are blown far away'], ['Water', 'Air inside makes the seed float'], ['Hitching a ride', 'Hooks catch on animals\' fur'], ['Seeds as food', 'Animals eat the fruit or bury the nuts']],
    explain: 'The shape of a seed is a clue to how it travels.' },
  { type: 'match', prompt: 'Match each word to its meaning.',
    pairs: [['Seed dispersal', 'Seeds being carried away from the parent plant'], ['Bursting', 'Pods dry out, twist and fling the seeds'], ['Drop and roll', 'Heavy seeds fall and roll a short way'], ['Shakers', 'Seeds shake out of holes in a swaying seed head']],
    explain: 'Drop and roll seeds don\'t travel very far, but squirrels and jays sometimes carry them further.' },
  { type: 'match', prompt: 'Match each part of a germinating seed to its job.',
    pairs: [['Seed coat', 'A tough layer that protects the seed'], ['Food store', 'Gives the seed energy to start growing'], ['Root', 'Grows down and takes in water'], ['Shoot', 'Grows up towards the light']],
    explain: 'The food store is why a seed can germinate in the dark: it doesn\'t need light until its leaves have opened.' },

  // ---------- Sort into groups ----------
  { type: 'sort', prompt: 'How does each seed travel?', groups: ['🌬️ Wind', '🌊 Water', '🐕 Hitching a ride', '🐦 Seeds as food'],
    items: [{ t: 'Dandelion', em: pic('dandelion'), g: 0 }, { t: 'Sycamore', em: pic('sycamore'), g: 0 }, { t: 'Coconut', em: pic('coconut'), g: 1 }, { t: 'Yellow flag iris', em: pic('iris'), g: 1 },
      { t: 'Burdock', em: pic('burdock'), g: 2 }, { t: 'Cleavers', em: pic('cleavers'), g: 2 }, { t: 'Cherry', em: pic('cherry'), g: 3 }, { t: 'Blackberry', em: pic('blackberry'), g: 3 }],
    explain: 'Wings and parachutes for the wind, air inside to float, hooks to catch on fur, and juicy fruit for animals to eat.' },
  { type: 'sort', prompt: 'How does each seed travel?', groups: ['💥 Bursting', '🌰 Drop and roll', '🧂 Shakers'],
    items: [{ t: 'Pea', em: pic('pea'), g: 0 }, { t: 'Gorse', em: pic('gorse'), g: 0 }, { t: 'Horse chestnut', em: pic('conker'), g: 1 }, { t: 'Sweet chestnut', em: pic('chestnut'), g: 1 },
      { t: 'Poppy', em: pic('poppy'), g: 2 }, { t: 'Snapdragon', em: pic('snapdragon'), g: 2 }],
    explain: 'Pods that dry and twist burst open. Heavy nuts drop and roll. Seed heads with holes shake their seeds out, like a pepper pot.' },
  { type: 'sort', prompt: 'Does a bean seed need this to germinate?', groups: ['✅ Needs it', '❌ Doesn\'t need it'],
    items: [{ t: 'Water', em: '💧', g: 0 }, { t: 'Warmth', em: '🌡️', g: 0 }, { t: 'Light', em: '☀️', g: 1 }, { t: 'Soil', em: '🟫', g: 1 }, { t: 'Plant food from a shop', em: '🧴', g: 1 }],
    explain: 'Seeds need water and a suitable temperature to germinate. A bean has its own food store, so it can germinate in the dark, even on damp cotton wool.' },

  // ---------- Fill the gaps ----------
  { type: 'cloze', prompt: 'Fill the gaps about germination.',
    text: 'Seeds need {water} and a suitable {temperature} to germinate. Bean seeds do not need {light} to germinate, because each seed has its own {food} store.',
    extra: ['soil', 'colour'],
    explain: 'Once the seedling has used up its food store, it needs light to make more food.' },
  { type: 'cloze', prompt: 'Fill the gaps about seed dispersal.',
    text: 'Plants spread their seeds away from the {parent} plant. This is called seed {dispersal}. Then the new plants have enough light, water and {space} to grow.',
    extra: ['flower', 'pollination'],
    explain: 'Seedlings under the parent plant are in its shade, and they all compete for the same water.' },

  // ---------- True or false? ----------
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'Seeds need water to germinate.', a: true, why: 'The seed takes in water, swells and splits its coat.' },
      { s: 'Bean seeds need light to germinate.', a: false, why: 'They germinate in the dark too, using their food store. (Some seeds, like lettuce, do need light.)' },
      { s: 'Bean seeds kept in a fridge (4 °C) will germinate quickly.', a: false, why: 'In the cold, the changes inside a seed are very slow, so hardly any germinate.' },
      { s: 'Seeds need soil to germinate.', a: false, why: 'Bean seeds germinate on damp cotton wool, as long as they have water and warmth.' },
      { s: 'A seedling grown in the dark is tall, thin and yellow.', a: true, why: 'It grows fast to search for light, and it can\'t make the green chlorophyll without light.' },
    ] },
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'All seeds are carried by the wind.', a: false, why: 'There are seven ways seeds travel, including water, animals and bursting pods.' },
      { s: 'Seedlings under the parent tree have to compete for light, water and space.', a: true, why: 'That is why plants spread their seeds.' },
      { s: 'Birds can spread seeds in their poo.', a: true, why: 'They eat juicy fruit and drop the seeds far away.' },
      { s: 'Drop and roll seeds usually travel further than wind seeds.', a: false, why: 'Heavy seeds only roll a short way. Wind can carry light seeds a very long way.' },
      { s: 'A coconut can float across the sea.', a: true, why: 'It has air inside, so it floats to a new beach.' },
    ] },

  // ---------- Odd one out ----------
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['Dandelion', 'Sycamore', 'Lime tree', 'Burdock'], odd: 3,
    reasons: ['It is carried by animals – the others are carried by the wind', 'It is the only plant that has seeds', 'It is the only one that grows in Slovakia'], reason: 0,
    explain: 'Burdock has hooks that catch on fur. The others have wings or parachutes.' },
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['Poppy', 'Snapdragon', 'Love-in-a-mist', 'Pea'], odd: 3,
    reasons: ['Its pod bursts open – the others shake their seeds out', 'It is the only one with seeds', 'It needs no water to germinate'], reason: 0,
    explain: 'Poppies, snapdragons and love-in-a-mist are shakers: the wind sways the seed head and the seeds fall out of holes.' },
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['Coconut', 'Alder', 'Yellow flag iris', 'Horse chestnut'], odd: 3,
    reasons: ['It drops and rolls – the others float away on water', 'It is the only tree', 'It is the only one with a seed coat'], reason: 0,
    explain: 'The conker is heavy, so it falls and rolls. The others have air inside, so they float.' },

  // ---------- Build a sentence ----------
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['A sycamore seed has', ['wings', 'hooks'], 'so it is carried by the', ['wind', 'animals'], '.'],
    explain: 'The wings make it spin like a helicopter, so the wind can carry it further.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Plants spread their seeds so the new plants get more', ['light, water and space', 'flowers and fruit'], 'than they would under the', ['parent plant', 'nearest river'], '.'],
    explain: 'Under the parent plant it is shady, and all the seedlings compete for the same water and space.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['In the cold, bean seeds', ['hardly germinate', 'germinate faster'], 'because the changes inside the seed', ['are very slow', 'need light'], '.'],
    explain: 'Seeds need a suitable temperature. 4 °C is cold, but not freezing, so the seeds are still alive and wait.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Burdock seeds have tiny', ['hooks', 'wings'], 'so they', ['catch on animals\' fur', 'float on rivers'], '.'],
    explain: 'They fall off somewhere else, far from the parent plant. That is hitching a ride.' },

  // ---------- Read the table ----------
  { type: 'table', prompt: 'A class planted 10 bean seeds in each of 6 pots. Pots 1 to 3 were watered and pots 4 to 6 had no water. They counted the seeds that germinated after 10 days.', caption: 'Seeds that germinated (out of 10)',
    table: { head: ['Pot', 'Water', 'Germinated'], rows: [['1', 'Watered', '9'], ['2', 'Watered', '4'], ['3', 'Watered', '9'], ['4', 'No water', '0'], ['5', 'No water', '0'], ['6', 'No water', '0']] },
    questions: [
      { q: 'Which pot has a result that does not fit the pattern?', options: ['Pot 1', 'Pot 2', 'Pot 4', 'Pot 6'], a: 1, why: 'Pot 2 had only 4, but the other watered pots had 9.' },
      { q: 'What is the best thing to do about it?', options: ['Rub it out', 'Repeat pot 2 to check', 'Say water makes no difference'], a: 1, why: 'Repeating it checks whether the result is real, or just a batch of dud seeds.' },
      { q: 'What is the conclusion?', options: ['Seeds need water to germinate', 'Seeds need light to germinate', 'Water makes no difference'], a: 0, why: 'Almost all the watered seeds germinated. None of the dry ones did.' },
    ] },
  { type: 'table', prompt: 'A class looked for seeds around five plants and measured how far away the furthest seed was.', caption: 'Furthest seed from the parent plant',
    table: { head: ['Plant', 'How it travels', 'Furthest seed'], rows: [['Dandelion', 'Wind', '150 m'], ['Sycamore', 'Wind', '40 m'], ['Gorse', 'Bursting', '4 m'], ['Himalayan balsam', 'Bursting', '6 m'], ['Horse chestnut', 'Drop and roll', '5 m']] },
    questions: [
      { q: 'Which seed travelled furthest?', options: ['Dandelion', 'Sycamore', 'Gorse', 'Horse chestnut'], a: 0, why: 'Its fluffy parachute let the wind carry it 150 m.' },
      { q: 'Which way of travelling took seeds furthest here?', options: ['Wind', 'Bursting', 'Drop and roll'], a: 0, why: 'Both wind seeds went much further than the others.' },
      { q: 'How much further did the sycamore seed go than the conker?', options: ['5 m', '35 m', '40 m', '45 m'], a: 1, why: '40 m − 5 m = 35 m.' },
    ] },
  ]
});
})();
