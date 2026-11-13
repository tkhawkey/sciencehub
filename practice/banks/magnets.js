/* Question bank: Magnets (Cambridge Primary Science 5Pe.01, 5Pe.02, 5Pe.03)
   Each question is one object. "type" says which activity it is – see the engine (index.html) for the formats.
   In "sentence" questions the right choice is written first (the engine shuffles them).
   Facts match the Magnet Lab explorer: only iron, steel, nickel and cobalt are magnetic; aluminium, copper and gold are not;
   only a magnet can repel; the pull is stronger closer up and works through materials that are not magnetic;
   bigger is not always stronger. Plain words: no "magnetic field", "field lines" or "electromagnet".
   Gaps in a cloze must each have only one right word, or the engine marks a correct swap as wrong. */
window.BANKS = window.BANKS || [];
(() => {
window.BANKS.push({
  id: 'magnets', title: 'Magnets', icon: '🧲', objectives: '5Pe.01 · 5Pe.02 · 5Pe.03',
  explorer: { name: 'Magnet Lab', icon: '🧲', href: '../magnet-lab/index.html' },
  intro: 'What does a magnet pull? How is a magnet different from a magnetic material? Which magnet is strongest?',
  items: [

  // ---------- Match up ----------
  { type: 'match', prompt: 'Match each word to its meaning.',
    pairs: [['Attract', 'Pull towards'], ['Repel', 'Push away'], ['Poles', 'The two ends of a magnet, north (N) and south (S)'], ['Strength', 'How strongly a magnet pulls']],
    explain: 'Unlike poles attract. Like poles repel.' },
  { type: 'match', prompt: 'Match each word to its meaning.',
    pairs: [['Magnet', 'Pulls magnetic materials, and can push or pull other magnets'], ['Magnetic material', 'Pulled by a magnet, but does not pull things itself'], ['Not magnetic', 'A magnet does not pull it at all']],
    explain: 'A paperclip is a magnetic material. A fridge magnet is a magnet. A plastic ruler is not magnetic.' },

  // ---------- Sort into groups ----------
  { type: 'sort', prompt: 'Sort these things.', groups: ['🧲 Magnet', '📎 Magnetic material', '🚫 Not magnetic'],
    items: [{ t: 'Fridge magnet', em: '🙂', g: 0 }, { t: 'Bar magnet', em: '🧲', g: 0 },
      { t: 'Paperclip', em: '📎', g: 1 }, { t: 'Iron nail', em: '🔩', g: 1 }, { t: 'Steel food can', em: '🥫', g: 1 },
      { t: 'Aluminium drink can', em: '🥤', g: 2 }, { t: 'Copper wire', em: '🟠', g: 2 }, { t: 'Plastic ruler', em: '📏', g: 2 }, { t: 'Wooden pencil', em: '✏️', g: 2 }],
    explain: 'Only iron, steel, nickel and cobalt are magnetic materials. A magnet pulls them, and it can also push or pull other magnets.' },
  { type: 'sort', prompt: 'Is it pulled by a magnet?', groups: ['✅ Pulled', '❌ Not pulled'],
    items: [{ t: '1, 2 and 5 cent coins', em: '🪙', g: 0 }, { t: 'Scissors (steel blades)', em: '✂️', g: 0 }, { t: 'Iron nail', em: '🔩', g: 0 },
      { t: '10, 20 and 50 cent coins', em: '🟡', g: 1 }, { t: 'Gold ring', em: '💍', g: 1 }, { t: 'Rubber', em: '🧽', g: 1 }],
    explain: '1, 2 and 5 cent coins have steel inside, so a magnet pulls them. 10, 20 and 50 cent coins are made of "Nordic gold", which is not magnetic.' },

  // ---------- Fill the gaps ----------
  { type: 'cloze', prompt: 'Fill the gaps about poles.',
    text: 'Every magnet has two poles, called north and south. Two north poles push each other away: they {repel}. A north pole and a south pole pull together: they {attract}. Only a {magnet} can repel another magnet.',
    extra: ['melt', 'paperclip'],
    explain: 'Like poles repel. Unlike poles attract. A magnetic material is attracted by both poles, but it can never repel.' },
  { type: 'cloze', prompt: 'Fill the gaps about distance.',
    text: 'A magnet can pull a paperclip without touching it. The pull is {stronger} when the clip is closer, and weaker when it is {further} away. The magnet can even pull through a sheet of {paper}.',
    extra: ['weaker', 'steel'],
    explain: 'Magnets pull over a distance, and through materials that are not magnetic.' },

  // ---------- True or false? ----------
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'All metals are attracted to magnets.', a: false, why: 'Only iron, steel, nickel and cobalt are. Aluminium, copper and gold are not.' },
      { s: 'A bigger magnet is always stronger.', a: false, why: 'A small strong magnet can be much stronger than a big fridge magnet.' },
      { s: 'A magnet can pull through paper.', a: true, why: 'Paper is not magnetic, so the pull goes through it.' },
      { s: 'A magnetic material can repel a magnet.', a: false, why: 'A magnetic material is pulled by both ends of a magnet. Only a magnet can repel.' },
      { s: 'A magnet pulls more strongly when it is closer.', a: true, why: 'The pull gets stronger as the gap gets smaller.' },
      { s: 'An aluminium can is attracted to a magnet.', a: false, why: 'Aluminium is a metal, but it is not magnetic. A steel food can is attracted.' },
    ] },

  // ---------- Odd one out ----------
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['Iron', 'Steel', 'Aluminium', 'Nickel'], odd: 2,
    reasons: ['It is not magnetic – the others are', 'It is the only metal', 'It is the only one that is shiny'], reason: 0,
    explain: 'Iron, steel and nickel are magnetic materials. Aluminium is a metal, but it is not magnetic.' },
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['Paperclip', 'Fridge magnet', 'Iron nail', 'Steel can'], odd: 1,
    reasons: ['It is a magnet – the others are magnetic materials', 'It is the only one a magnet pulls', 'It is the only one made of metal'], reason: 0,
    explain: 'A magnet pulls all four. But only the fridge magnet can pick up a paperclip by itself, or repel another magnet.' },

  // ---------- Build a sentence ----------
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Two south poles', ['repel', 'attract'], ', but a north pole and a south pole', ['attract', 'repel'], '.'],
    explain: 'Like poles repel. Unlike poles attract.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['To find out if a grey bar is a magnet, check if it can', ['repel', 'attract'], 'another magnet.'],
    explain: 'A magnetic material is attracted too, so attracting does not prove anything. Repelling is the sure test.' },

  // ---------- Read the table ----------
  { type: 'table', prompt: 'A class tested how many paperclips each magnet could hold in a chain. They did each test three times.', caption: 'Paperclips held in a chain',
    table: { head: ['Magnet', 'Try 1', 'Try 2', 'Try 3'], rows: [['Bar magnet', '6', '7', '6'], ['Horseshoe magnet', '9', '4', '9'], ['Fridge magnet', '1', '1', '1'], ['Small strong magnet', '14', '15', '14']] },
    questions: [
      { q: 'Which result does not fit the pattern?', options: ['Bar magnet, try 2', 'Horseshoe magnet, try 2', 'Fridge magnet, try 1', 'Small strong magnet, try 3'], a: 1, why: 'The horseshoe magnet held 9 clips twice, but only 4 in try 2.' },
      { q: 'What might have caused it?', options: ['A bent paperclip in the chain', 'The magnet got bigger', 'The table was too high'], a: 0, why: 'A bent paperclip does not hang properly, so the chain falls sooner.' },
      { q: 'Which magnet was the strongest?', options: ['The small strong magnet', 'The horseshoe magnet', 'The fridge magnet', 'The bar magnet'], a: 0, why: 'It held about 14 clips: the most.' },
      { q: 'Which kind of chart should you draw?', options: ['A bar chart', 'A line graph'], a: 0, why: 'The magnets are separate groups, not numbers on a scale.' },
    ] },
  ]
});
})();
