/* Question bank: Sound (Year 5 Science SC5-SOU-1, SC5-SOU-2, SC5-SOU-3)
   Each question is one object. "type" says which activity it is – see the engine (index.html) for the formats.
   In "sentence" questions the right choice is written first (the engine shuffles them).
   Facts match the Sound Studio explorer: every sound is made by something vibrating; pitch depends on how fast it vibrates,
   volume on how big the vibrations are; tighter, shorter or thinner strings are higher; plucking or hitting harder is louder,
   not higher; a shorter ruler overhang is higher; bigger drums are lower; bottles: tapping, more water → lower;
   blowing, more water → higher; in the same family of instruments, bigger or longer → lower;
   covering more recorder holes → lower. All questions are Core. Plain words: no "frequency", "amplitude" or "hertz". */
window.BANKS = window.BANKS || [];
(() => {
window.BANKS.push({
  id: 'sound', title: 'Sound', icon: '🎵', objectives: 'SC5-SOU-1 · SC5-SOU-2 · SC5-SOU-3',
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
  { type: 'match', prompt: 'What is vibrating? Match each sound maker to the part that vibrates.',
    pairs: [['Tuning fork', 'The two prongs'], ['Ruler on a desk', 'The part over the edge'], ['Hand bell', 'The metal bell'], ['Tapping a bottle', 'The glass and the water']],
    explain: 'Look for the part that moves backwards and forwards. The handle of a tuning fork hardly moves.' },

  // ---------- Fill the gaps ----------
  { type: 'cloze', prompt: 'Fill the gaps about pitch and volume.',
    text: 'Every sound is made by something that {vibrates}. The faster it vibrates, the {higher} the pitch. The bigger the vibrations, the {louder} the sound. Plucking a string harder makes the note louder, but not {higher}.',
    extra: ['lower', 'quieter'],
    explain: 'Pitch depends on how fast something vibrates. Volume depends on how big the vibrations are.' },
  { type: 'cloze', prompt: 'Fill the gaps about a guitar string.',
    text: 'Three ways to make a guitar string play a higher note: turn the peg to make the string {tighter}, press a finger on it to make the vibrating part {shorter}, or change to a {thinner} string. To make the note louder, pluck it {harder}.',
    extra: ['looser', 'longer'],
    explain: 'Tighter, shorter and thinner strings vibrate faster, so the note is higher.' },
  { type: 'cloze', prompt: 'Fill the gaps about the bottle band.',
    text: 'When you tap a bottle, the {glass} and the water vibrate. More water makes the note {lower}. When you blow across the top, the {air} inside vibrates. More water means less air, so the note is {higher}.',
    extra: ['skin', 'louder'],
    explain: 'Tapping and blowing go in opposite directions, because a different thing vibrates.' },

  // ---------- Sort into groups ----------
  { type: 'sort', prompt: 'Does each change make the note higher, or louder?', groups: ['⬆️ Higher', '🔊 Louder'],
    items: [{ t: 'Make the guitar string tighter', em: '🎸', g: 0 }, { t: 'Use a thinner string', em: '〰️', g: 0 }, { t: 'Use a smaller drum', em: '🪘', g: 0 }, { t: 'Make the ruler overhang shorter', em: '📏', g: 0 },
      { t: 'Pluck the string harder', em: '🤘', g: 1 }, { t: 'Hit the drum harder', em: '🥁', g: 1 }, { t: 'Push the ruler down further', em: '👇', g: 1 }],
    explain: 'Faster vibrations make a higher note. Bigger vibrations make a louder sound.' },
  { type: 'sort', prompt: 'A class tested a ruler: does the overhang change the pitch? Sort each thing.', groups: ['🔀 Change it', '📏 Measure it', '🟰 Keep it the same'],
    items: [{ t: 'How far the ruler is over the edge', em: '↔️', g: 0 }, { t: 'Vibrations per second', em: '🔢', g: 1 }, { t: 'How far you push it down', em: '👇', g: 2 }, { t: 'Which ruler you use', em: '📏', g: 2 }, { t: 'How firmly you hold it on the desk', em: '✋', g: 2 }],
    explain: 'In a fair test, change only one thing. Then you know what made the difference.' },

  // ---------- Carroll diagram ----------
  { type: 'carroll', prompt: 'Sort these sounds into the Carroll diagram.', rows: ['High', 'Low'], cols: ['Loud', 'Quiet'],
    items: [{ t: 'A loud whistle', em: '📯', r: 0, c: 0 }, { t: 'A school bell, rung hard', em: '🔔', r: 0, c: 0 }, { t: 'A mouse squeak', em: '🐭', r: 0, c: 1 }, { t: 'A recorder, played softly', em: '🪈', r: 0, c: 1 },
      { t: 'A ship\'s horn', em: '🚢', r: 1, c: 0 }, { t: 'A big drum, hit hard', em: '🥁', r: 1, c: 0 }, { t: 'Thunder far away', em: '🌩️', r: 1, c: 1 }, { t: 'A double bass, plucked gently', em: '🎻', r: 1, c: 1 }],
    explain: 'High does not mean loud. A mouse squeak is high but quiet. A ship\'s horn is low but loud.' },

  // ---------- Put in order ----------
  { type: 'order', prompt: 'Put these instruments in order, from the lowest notes to the highest.', first: 'Lowest', last: 'Highest',
    items: [{ t: 'Double bass', em: '🎻', size: 40 }, { t: 'Cello', em: '🎻', size: 31 }, { t: 'Viola', em: '🎻', size: 24 }, { t: 'Violin', em: '🎻', size: 19 }],
    explain: 'In the violin family, the bigger the instrument, the longer and thicker its strings, and the lower its notes.' },
  { type: 'order', prompt: 'Put these xylophone bars in order, from the lowest note to the highest.', first: 'Lowest', last: 'Highest',
    items: ['The longest bar', 'A long bar', 'A short bar', 'The shortest bar'],
    explain: 'A longer bar vibrates more slowly, so its note is lower.' },
  { type: 'order', prompt: 'Put these recorder notes in order, from the lowest to the highest.', first: 'Lowest', last: 'Highest',
    items: ['All 7 holes covered', '5 holes covered', '3 holes covered', '1 hole covered'],
    explain: 'Covering more holes makes the column of vibrating air longer, so the note is lower.' },

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
      { s: 'You can count a guitar string\'s vibrations just by watching it.', a: false, why: 'You can see the string go blurry, but it moves backwards and forwards far too fast to count: often hundreds of times a second.' },
    ] },
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'In the same family of instruments, the bigger or longer it is, the lower the note.', a: true, why: 'A double bass is bigger than a violin, so its notes are lower.' },
      { s: 'Covering more holes on a recorder makes a higher note.', a: false, why: 'Covering more holes makes the vibrating air longer, so the note is lower.' },
      { s: 'A longer panpipe makes a lower note than a shorter one.', a: true, why: 'A longer pipe has more air inside. More air vibrates more slowly.' },
      { s: 'When you blow across a bottle, the water vibrates.', a: false, why: 'When you blow, the air inside the bottle vibrates, not the water.' },
    ] },

  // ---------- Odd one out ----------
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['Make the string tighter', 'Make the string shorter', 'Use a thinner string', 'Pluck the string harder'], odd: 3,
    reasons: ['It makes the note louder, not higher – the others make it higher', 'It is the only one that changes the string', 'It is the only one that makes a sound'], reason: 0,
    explain: 'Tighter, shorter and thinner all make a higher note. Plucking harder makes a louder note.' },
  { type: 'odd', prompt: 'A ruler twangs on a desk. Which is the odd one out?', items: ['Guitar string', 'Drum skin', 'Ruler over the edge', 'The desk'], odd: 3,
    reasons: ['It does not vibrate to make the sound – the others do', 'It is the only one made of wood', 'It is the only one you can touch'], reason: 0,
    explain: 'The desk does not move. The string, the skin and the ruler all vibrate to make their sounds.' },

  // ---------- Build a sentence ----------
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['A shorter ruler overhang vibrates', ['faster', 'slower'], ', so the note is', ['higher', 'lower'], '.'],
    explain: 'More vibrations per second make a higher note.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Hitting a drum harder makes the sound', ['louder', 'higher'], 'because the skin makes', ['bigger', 'faster'], 'vibrations.'],
    explain: 'Volume depends on how big the vibrations are.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['In the same family of instruments, the bigger or longer it is, the', ['lower', 'higher'], 'the note.'],
    explain: 'A double bass is lower than a violin. The longest xylophone bar is the lowest.' },

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
