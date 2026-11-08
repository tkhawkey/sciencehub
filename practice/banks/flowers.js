/* Question bank: Flowers and flowering plants (Cambridge Primary Science 5Bs.01, 5Bs.02, 5Bs.03, 5Bp.02, 5Bp.03, 5Be.02)
   Each question is one object. "type" says which activity it is – see the engine (index.html) for the formats.
   In "sentence" questions the right choice is written first (the engine shuffles them).
   Facts match the Flower Lab explorer: only the Year 5 flower parts (petals, sepals, anthers, filaments, stamens, stigma, style,
   carpel, ovary); jobs only for petals, anthers, stigma and ovary (plus sepals); a fruit is the part that holds the seeds.
   The flower drawing is copied from Flower Lab. Diagrams are drawn here (600 × 360). Label positions are in % across and down the diagram. */
window.BANKS = window.BANKS || [];
(() => {
const pct = (x, y) => ({ px: +(x / 6).toFixed(1), py: +(y / 3.6).toFixed(1) });
// A photo from Flower Lab, small, on a card
const ph = f => `<img src="../flower-lab/photos/${f}" alt="" width="44" height="33" style="object-fit:cover;border-radius:6px;vertical-align:middle">`;

// ---------- The model flower, copied from Flower Lab: 5 sepals, 5 petals, 6 stamens, 1 carpel ----------
const NS = 'vector-effect="non-scaling-stroke"';
const SEPAL = (L = .2, w = .055) => `M0 0 C${w} ${-L * .25} ${w * 1.1} ${-L * .7} 0 ${-L} C${-w * 1.1} ${-L * .7} ${-w} ${-L * .25} 0 0Z`;
const PETAL = (L = .5, w = .15) => `M0 0 C${w * .5} ${-L * .15} ${w * 1.15} ${-L * .55} ${w * .75} ${-L * .9} Q0 ${-L * 1.08} ${-w * .75} ${-L * .9} C${-w * 1.15} ${-L * .55} ${-w * .5} ${-L * .15} 0 0Z`;
const FLOWER = (x, y, S) => {
  let g = `<path d="M${x} ${y} Q${x - S * .04} ${y + S * .3} ${x} ${y + S * .6}" stroke="#3f9d4a" stroke-width="${S * .035}" fill="none"/><g transform="translate(${x} ${y}) scale(${S})">`;
  [-145, -108, 108, 145, 180].forEach(a => { g += `<g transform="rotate(${a})${a === 180 ? ' scale(.8)' : ''}"><path d="${SEPAL()}" fill="#4caf50" stroke="#2f7d3a" stroke-width="1.5" ${NS}/></g>`; });
  [0, -32, 32, -64, 64].forEach(a => { g += `<g transform="rotate(${a})"><path d="${PETAL()}" fill="#ff7eb6" stroke="#cf3f80" stroke-width="1.5" ${NS}/></g>`; });
  [-34, -22, -10, 10, 22, 34].forEach(a => { g += `<g transform="rotate(${a})"><path d="M0 0 V-.34" stroke="#f3e6b0" stroke-width=".014"/><ellipse cy="-.36" rx=".026" ry=".048" fill="#ffb81c" stroke="#c78300" stroke-width="1.2" ${NS}/></g>`; });
  g += `<path d="M-.012 -.16 L-.012 -.41 L.012 -.41 L.012 -.16Z" fill="#bfe3a6" stroke="#4e9a3a" stroke-width="1.2" ${NS}/>
    <path d="M-.042 -.415 Q-.04 -.455 0 -.452 Q.04 -.455 .042 -.415 Q0 -.4 -.042 -.415Z" fill="#e8a23a" stroke="#a8641a" stroke-width="1.2" ${NS}/>
    <ellipse cy="-.085" rx=".065" ry=".08" fill="#8fd16f" stroke="#4e9a3a" stroke-width="1.5" ${NS}/>`;
  return g + '</g>';
};
// The flower in the middle of the diagram: base at (300, 250), size 330
const X0 = 300, Y0 = 250, S = 330;
const at = (deg, r) => pct(X0 + Math.sin(deg * Math.PI / 180) * r * S, Y0 - Math.cos(deg * Math.PI / 180) * r * S);
const FLOWERDG = `<svg class="dg" viewBox="0 0 600 360" role="img"><rect width="600" height="360" rx="16" fill="#eef4fb"/>${FLOWER(X0, Y0, S)}</svg>`;

window.BANKS.push({
  id: 'flowers', title: 'Flowers and flowering plants', icon: '🌸', objectives: '5Bs.01 · 5Bs.02 · 5Bs.03 · 5Bp.02 · 5Bp.03 · 5Be.02',
  explorer: { name: 'Flower Lab', icon: '🌸', href: '../flower-lab/index.html' },
  intro: 'Plants that flower and plants that don\'t, the parts of a flower and their jobs, pollination, fruit, and the life cycle.',
  items: [

  // ---------- Label the diagram ----------
  { type: 'label', prompt: 'Label the parts of the flower.', svg: FLOWERDG, alt: 'A flower drawn from the side, with green sepals, pink petals, six stamens and a carpel in the middle',
    labels: [{ text: 'Stigma', x: 14, y: 20, ...at(0, .43) }, { text: 'Anther', x: 14, y: 38, ...at(-34, .36) }, { text: 'Sepal', x: 14, y: 76, ...at(-108, .12) },
      { text: 'Style', x: 86, y: 26, ...at(0, .3) }, { text: 'Filament', x: 86, y: 44, ...at(34, .2) }, { text: 'Petal', x: 86, y: 62, ...at(64, .35) }, { text: 'Ovary', x: 86, y: 80, ...at(0, .085) }],
    explain: 'From the outside in: sepals, petals, stamens (an anther on a filament) and the carpel (stigma, style and ovary).' },
  { type: 'label', prompt: 'Label the stamen, the carpel, a petal and a sepal.', svg: FLOWERDG, alt: 'A flower drawn from the side, with green sepals, pink petals, six stamens and a carpel in the middle',
    labels: [{ text: 'Stamen', x: 86, y: 30, ...at(22, .25) }, { text: 'Carpel', x: 14, y: 30, ...at(0, .25) }, { text: 'Petal', x: 14, y: 58, ...at(-64, .35) }, { text: 'Sepal', x: 86, y: 76, ...at(108, .12) }],
    extra: ['Root'],
    explain: 'A stamen is an anther on a filament. The carpel is the stigma, the style and the ovary together.' },

  // ---------- Put in order ----------
  { type: 'order', prompt: 'Put the life cycle of a flowering plant in order, starting with the seed.', first: 'First', last: 'Last',
    items: ['Seed', 'Germination', 'Seedling', 'Adult plant', 'Flowering', 'Pollination', 'Fruit and seeds', 'Seed dispersal'],
    explain: 'After seed dispersal, each seed can start the life cycle again.' },
  { type: 'order', prompt: 'How does a flower make a fruit? Put it in order.', first: 'First', last: 'Last',
    items: ['A bee drinks nectar and gets pollen on its body', 'The bee visits another flower', 'Pollen rubs onto the sticky stigma', 'Seeds form inside the ovary', 'The ovary becomes a fruit with seeds inside'],
    explain: 'Moving pollen from an anther to a stigma is pollination. After that, the ovary grows into the fruit.' },

  // ---------- Match up ----------
  { type: 'match', prompt: 'Match each part of the flower to its job.',
    pairs: [['Petals', 'Attract insects and other pollinators'], ['Anther', 'Makes pollen'], ['Stigma', 'Catches pollen'], ['Ovary', 'Where seeds form – it becomes the fruit'], ['Sepals', 'Protect the flower while it is a bud']],
    explain: 'The stigma is sticky, so pollen grains stick to it.' },
  { type: 'match', prompt: 'Match each word to its meaning.',
    pairs: [['Pollen', 'A fine, yellow dust made by the anthers'], ['Pollination', 'Pollen moving from an anther to a stigma'], ['Pollinator', 'An animal that carries pollen between flowers'], ['Spores', 'Tiny specks that ferns and mosses make instead of seeds']],
    explain: 'Bees, butterflies and moths are pollinators. The wind carries pollen too, but it is not an animal.' },

  // ---------- Sort into groups ----------
  { type: 'sort', prompt: 'Does it make flowers?', groups: ['🌸 Makes flowers', '🚫 No flowers'],
    items: [{ t: 'Grass', em: ph('grass-flower.jpg'), g: 0 }, { t: 'Oak tree', em: ph('oak-catkins.jpg'), g: 0 }, { t: 'Cactus', em: ph('cactus-flower.jpg'), g: 0 }, { t: 'Apple tree', em: ph('apple-blossom.jpg'), g: 0 },
      { t: 'Moss', em: ph('moss-capsules.jpg'), g: 1 }, { t: 'Fern', em: ph('fern-spores.jpg'), g: 1 }, { t: 'Pine tree', em: ph('pine-cone.jpg'), g: 1 }],
    explain: 'Grass, oak trees and cacti do flower, but their flowers can be easy to miss. Mosses and ferns make spores. Pine trees make seeds in cones, but no flowers.' },
  { type: 'sort', prompt: 'Which pollinator is each flower best for?', groups: ['🐝 Bee', '🦋 Butterfly', '🌙 Moth', '🌬️ Wind'],
    items: [{ t: 'Blue, sweet scent, nectar, open in the day', g: 0 }, { t: 'Yellow, big petals to land on, sweet scent', g: 0 },
      { t: 'Bright red, a long tube with nectar at the bottom', g: 1 }, { t: 'Bright orange, a long tube, open in the day', g: 1 },
      { t: 'White, strong scent in the evening', g: 2 }, { t: 'Pale, opens at night, nectar', g: 2 },
      { t: 'No petals, dangling anthers, lots of light pollen', g: 3 }, { t: 'Small, dull, no scent, feathery stigma outside', g: 3 }],
    explain: 'Bees see blue, purple and yellow well, but red poorly. Butterflies have long tongues for long tubes. Moths fly at night, so pale flowers and strong scent help. The wind can\'t see or smell, so wind flowers don\'t need bright petals.' },
  { type: 'sort', prompt: 'To a scientist, is it a fruit?', groups: ['🍅 Fruit', '🥕 Not a fruit'],
    items: [{ t: 'Tomato', em: '🍅', g: 0 }, { t: 'Pepper', em: '🫑', g: 0 }, { t: 'Cucumber', em: '🥒', g: 0 }, { t: 'Pea pod', em: ph('pea-pod.jpg'), g: 0 }, { t: 'Apple', em: '🍎', g: 0 },
      { t: 'Carrot', em: '🥕', g: 1 }, { t: 'Potato', em: '🥔', g: 1 }, { t: 'Lettuce', em: '🥬', g: 1 }, { t: 'Broccoli', em: '🥦', g: 1 }],
    explain: 'A fruit is the part that holds the seeds, so tomatoes, peppers, cucumbers and pea pods are fruits. Not all fruits are sweet!' },

  // ---------- Fill the gaps ----------
  { type: 'cloze', prompt: 'Fill the gaps about pollination.',
    text: 'A bee visits a flower to drink {nectar}. {Pollen} from the {anthers} sticks to its hairy body. At the next flower, some pollen rubs onto the sticky {stigma}. This is called {pollination}.',
    extra: ['ovary', 'roots'],
    explain: 'Pollination is pollen moving from an anther to a stigma.' },
  { type: 'cloze', prompt: 'Fill the gaps about fruit.',
    text: 'After pollination, {seeds} form inside the ovary. The {petals} wither and fall off. The {ovary} swells and becomes the {fruit}.',
    extra: ['stigma', 'leaves'],
    explain: 'To a scientist, a fruit is the part that holds the seeds.' },

  // ---------- True or false? ----------
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'All plants have flowers.', a: false, why: 'Mosses and ferns make spores, and conifers like pine make seeds in cones. None of them have flowers.' },
      { s: 'Grass does not flower.', a: false, why: 'Grass does flower. Its flowers are small and green, with no colourful petals.' },
      { s: 'A tomato is a fruit.', a: true, why: 'It holds the seeds, so to a scientist it is a fruit.' },
      { s: 'Ferns make spores, not flowers.', a: true, why: 'The brown dots under a fern\'s leaves are full of spores.' },
      { s: 'Oak trees have flowers.', a: true, why: 'The dangly catkins in spring are made of tiny flowers.' },
    ] },
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'All fruits are sweet.', a: false, why: 'Peppers, cucumbers and pea pods are fruits too.' },
      { s: 'The anthers make pollen.', a: true, why: 'The anther is the top of the stamen.' },
      { s: 'Bees see red flowers very well.', a: false, why: 'Bees see red poorly. They see blue, purple and yellow well.' },
      { s: 'Flowers pollinated by the wind have big, bright petals.', a: false, why: 'The wind can\'t see, so wind flowers have small, dull petals, or none.' },
      { s: 'Pine trees make seeds in cones.', a: true, why: 'But a pine tree never makes flowers.' },
    ] },

  // ---------- Odd one out ----------
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['Moss', 'Fern', 'Pine tree', 'Oak tree'], odd: 3,
    reasons: ['It makes flowers – the others never do', 'It is the only one that is green', 'It is the only one that makes seeds'], reason: 0,
    explain: 'An oak tree\'s catkins are flowers. Mosses and ferns make spores, and a pine tree makes seeds in cones.' },
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['Stigma', 'Style', 'Ovary', 'Anther'], odd: 3,
    reasons: ['It is part of a stamen – the others are parts of the carpel', 'It is the only one inside the flower', 'It is the only one that is a fruit'], reason: 0,
    explain: 'The carpel is the stigma, style and ovary. The anther sits on a filament, and together they make a stamen.' },
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['Tomato', 'Cucumber', 'Pea pod', 'Carrot'], odd: 3,
    reasons: ['It is a root – the others hold seeds, so they are fruits', 'It is the only one you can eat', 'It is the only one that grows on a plant'], reason: 0,
    explain: 'A carrot is a root. Tomatoes, cucumbers and pea pods all hold seeds.' },

  // ---------- Build a sentence ----------
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['The', ['anther', 'stigma'], 'makes pollen, and the', ['stigma', 'sepal'], 'catches it.'],
    explain: 'The stigma is sticky, so pollen sticks to it.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Wind-pollinated flowers have', ['small, dull petals', 'big, bright petals'], 'and', ['no nectar', 'lots of nectar'], '.'],
    explain: 'The wind can\'t see or drink, so bright petals and nectar would be wasted.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Flowers for moths are often', ['pale', 'red'], 'and smell strongly in the', ['evening', 'morning'], '.'],
    explain: 'Moths fly at night. Pale petals show up in the dark, and a strong scent helps them find the flower.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['After pollination, the', ['ovary', 'petal'], 'grows into the', ['fruit', 'root'], '.'],
    explain: 'The fruit holds the seeds that formed inside the ovary.' },

  // ---------- Read the table ----------
  { type: 'table', prompt: 'A class counted how many times bees visited flowers of different colours in 10 minutes.', caption: 'Bee visits in 10 minutes',
    table: { head: ['Flower colour', 'Bee visits'], rows: [['Blue', '14'], ['Yellow', '12'], ['Purple', '15'], ['Red', '2'], ['White', '6']] },
    questions: [
      { q: 'Which colour had the most bee visits?', options: ['Blue', 'Yellow', 'Purple', 'Red'], a: 2, why: 'Purple had 15 visits.' },
      { q: 'Which colour had the fewest bee visits?', options: ['White', 'Red', 'Yellow', 'Blue'], a: 1, why: 'Red had only 2 visits.' },
      { q: 'Why might red flowers get so few bee visits?', options: ['Bees see red poorly', 'Red flowers have no pollen', 'Bees are scared of red'], a: 0, why: 'Bees see blue, purple and yellow well, but red poorly.' },
    ] },
  ]
});
})();
