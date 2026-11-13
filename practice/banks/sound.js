/* Question bank: Sound (Cambridge Primary Science 5Ps.01, 5Ps.02, 5Ps.03)
   Each question is one object. "type" says which activity it is – see the engine (index.html) for the formats.
   In "sentence" questions the right choice is written first (the engine shuffles them).
   Facts match the Sound Studio explorer: every sound is made by something vibrating; pitch depends on how fast it vibrates,
   volume on how big the vibrations are; tighter, shorter or thinner strings are higher; plucking or hitting harder is louder,
   not higher; a shorter ruler overhang is higher; bigger drums are lower; bottles: tapping, more water → lower;
   blowing, more water → higher. Plain words: no "frequency", "amplitude" or "hertz". */
window.BANKS = window.BANKS || [];
(() => {
window.BANKS.push({
  id: 'sound', title: 'Sound', icon: '🎵', objectives: '5Ps.01 · 5Ps.02 · 5Ps.03',
  explorer: { name: 'Sound Studio', icon: '🎵', href: '../sound-studio/index.html' },
  intro: 'How are sounds made? What makes a sound high or low, loud or quiet?',
  items: [

  // ---------- Match up ----------
  { type: 'match', prompt: 'Match each word to its meaning.',
    pairs: [['Vibrate', 'Move backwards and forwards very quickly'], ['Pitch', 'How high or low a sound is'], ['Volume', 'How loud or quiet a sound is'], ['Sound picture', 'A drawing that shows a sound\'s pitch and volume']],
    explain: 'Pitch and volume are two different things. A sound can be high and quiet, or low and loud.' },
  { type: 'match', prompt: 'What is vibrating? Match each sound to the part that vibrates.',
    pairs: [['Guitar', 'The string'], ['Drum', 'The drum skin'], ['Humming', 'Your voice box, in your throat'], ['Speaker', 'The cone'], ['Blowing across a bottle', 'The air inside the bottle']],
    explain: 'Every sound is made by something vibrating. Stop the vibration, and the sound stops.' },

  // ---------- Fill the gaps ----------
  { type: 'cloze', prompt: 'Fill the gaps about pitch and volume.',
    text: 'Every sound is made by something that {vibrates}. The faster it vibrates, the {higher} the pitch. The bigger the vibrations, the {louder} the sound. Plucking a string harder makes the note louder, but not {higher}.',
    extra: ['lower', 'quieter'],
    explain: 'Pitch depends on how fast something vibrates. Volume depends on how big the vibrations are.' },
  { type: 'cloze', prompt: 'Fill the gaps about a guitar string.',
    text: 'To make a guitar string play a higher note, make it {tighter}, {shorter} or {thinner}. To make the note louder, pluck it {harder}.',
    extra: ['looser', 'longer'],
    explain: 'Tighter, shorter and thinner strings vibrate faster, so the note is higher.' },

  // ---------- Carroll diagram ----------
  { type: 'carroll', prompt: 'Sort these sounds into the Carroll diagram.', rows: ['High', 'Low'], cols: ['Loud', 'Quiet'],
    items: [{ t: 'A loud whistle', em: '📯', r: 0, c: 0 }, { t: 'A school bell, rung hard', em: '🔔', r: 0, c: 0 }, { t: 'A mouse squeak', em: '🐭', r: 0, c: 1 }, { t: 'A recorder, played softly', em: '🪈', r: 0, c: 1 },
      { t: 'A ship\'s horn', em: '🚢', r: 1, c: 0 }, { t: 'A big drum, hit hard', em: '🥁', r: 1, c: 0 }, { t: 'Thunder far away', em: '🌩️', r: 1, c: 1 }, { t: 'A double bass, plucked gently', em: '🎻', r: 1, c: 1 }],
    explain: 'High does not mean loud. A mouse squeak is high but quiet. A ship\'s horn is low but loud.' },

  // ---------- Put in order ----------
  { type: 'order', prompt: 'Put these instruments in order, from the lowest notes to the highest.', first: 'Lowest', last: 'Highest',
    items: ['Double bass', 'Cello', 'Viola', 'Violin'],
    explain: 'The bigger the instrument, the longer and thicker its strings, and the lower its notes.' },
  { type: 'order', prompt: 'Put these xylophone bars in order, from the lowest note to the highest.', first: 'Lowest', last: 'Highest',
    items: ['The longest bar', 'A long bar', 'A short bar', 'The shortest bar'],
    explain: 'A longer bar vibrates more slowly, so its note is lower.' },

  // ---------- True or false? ----------
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'A louder sound is always a higher sound.', a: false, why: 'Loudness and pitch are different. A ship\'s horn is loud but low.' },
      { s: 'Every sound is made by something vibrating.', a: true, why: 'When the vibration stops, the sound stops.' },
      { s: 'Plucking a string harder makes the note higher.', a: false, why: 'Plucking harder makes bigger vibrations, so the note is louder, not higher.' },
      { s: 'A tighter string makes a higher note.', a: true, why: 'A tighter string vibrates faster, so the note is higher.' },
      { s: 'A longer ruler overhang makes a higher note.', a: false, why: 'A longer overhang vibrates more slowly, so the note is lower.' },
      { s: 'Blowing across a bottle with more water in it makes a higher note.', a: true, why: 'When you blow, the air vibrates. More water means less air, and less air vibrates faster.' },
    ] },
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'A big drum makes a lower note than a small drum.', a: true, why: 'A bigger drum skin vibrates more slowly.' },
      { s: 'Hitting a drum harder makes the rice on it jump higher.', a: true, why: 'Hitting harder makes bigger vibrations, so the sound is louder and the rice jumps higher.' },
      { s: 'Tapping a bottle with more water in it makes a higher note.', a: false, why: 'When you tap, the glass and water vibrate. More water makes the note lower.' },
      { s: 'You can usually see a guitar string vibrate as fast as it really moves.', a: false, why: 'Real vibrations are far too fast to see. They can be hundreds every second.' },
    ] },

  // ---------- Odd one out ----------
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['Make the string tighter', 'Make the string shorter', 'Use a thinner string', 'Pluck the string harder'], odd: 3,
    reasons: ['It makes the note louder, not higher – the others make it higher', 'It is the only one that changes the string', 'It is the only one that makes a sound'], reason: 0,
    explain: 'Tighter, shorter and thinner all make a higher note. Plucking harder makes a louder note.' },

  // ---------- Build a sentence ----------
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['A shorter ruler overhang vibrates', ['faster', 'slower'], ', so the note is', ['higher', 'lower'], '.'],
    explain: 'More vibrations per second make a higher note.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Hitting a drum harder makes the sound', ['louder', 'higher'], 'because the skin makes', ['bigger', 'faster'], 'vibrations.'],
    explain: 'Volume depends on how big the vibrations are.' },

  // ---------- Read the table ----------
  { type: 'table', prompt: 'A class twanged a ruler over the edge of a desk. They counted the vibrations per second on a slow-motion video. They did each test three times.', caption: 'Vibrations per second',
    table: { head: ['Overhang', 'Try 1', 'Try 2', 'Try 3'], rows: [['10 cm', '60', '62', '58'], ['15 cm', '27', '28', '26'], ['20 cm', '15', '8', '15'], ['25 cm', '10', '10', '9']] },
    questions: [
      { q: 'Which result does not fit the pattern?', options: ['10 cm, try 1', '15 cm, try 3', '20 cm, try 2', '25 cm, try 3'], a: 2, why: 'At 20 cm the other tries were 15, but try 2 was only 8.' },
      { q: 'What might have caused it?', options: ['Someone lost count', 'The ruler got longer', 'The desk was too high'], a: 0, why: 'Losing count makes the number too low.' },
      { q: 'What pattern do the results show?', options: ['The longer the overhang, the fewer vibrations per second', 'The longer the overhang, the more vibrations per second', 'The overhang makes no difference'], a: 0, why: 'The numbers get smaller as the overhang gets longer. Fewer vibrations per second means a lower note.' },
      { q: 'Which overhang made the highest note?', options: ['10 cm', '15 cm', '20 cm', '25 cm'], a: 0, why: '10 cm had the most vibrations per second, so it made the highest note.' },
    ] },
  ]
});
})();
