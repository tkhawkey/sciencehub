/* Question bank: Science around us (Cambridge Primary Science 5SIC.02, 5SIC.04)
   Each question is one object. "type" says which activity it is – see the engine (index.html) for the formats.
   In "sentence" questions the right choice is written first (the engine shuffles them).
   Matches the Science in Bratislava explorer: places in a city like Bratislava, the people who work there, and the science they use. */
window.BANKS = window.BANKS || [];
(() => {
window.BANKS.push({
  id: 'science-around-us', title: 'Science around us', icon: '🏰', objectives: '5SIC.02 · 5SIC.04',
  explorer: { name: 'Science in Bratislava', icon: '🏰', href: '../science-in-bratislava/index.html' },
  intro: 'Where is science used in our city? Who uses science in their job, and how?',
  items: [

  // ---------- Match up ----------
  { type: 'match', prompt: 'Match each person to what they do.',
    pairs: [['Meteorologist', 'Measures the rain and clouds, and forecasts the weather'], ['Pharmacist', 'Gives out medicines and checks the right amount'], ['Engineer', 'Designs and tests things like cars and bridges'], ['Vet', 'Makes sick animals better'], ['Astronomer', 'Studies the Moon, the planets and the stars']],
    explain: 'All of these people use science in their jobs.' },
  { type: 'match', prompt: 'Match each place to the science used there.',
    pairs: [['Recycling centre', 'Magnets lift out steel and iron'], ['Water works', 'Water is filtered and tested'], ['Bakery', 'Chocolate melts, then sets as it cools'], ['Concert hall', 'Changing the pitch and volume of sounds']],
    explain: 'Science is used all over a city, not just in schools.' },

  // ---------- Sort into groups ----------
  { type: 'sort', prompt: 'Which science do these people use most?', groups: ['🧲 Forces and magnets', '🌱 Living things', '🧪 Materials'],
    items: [{ t: 'Engineer testing a car in a wind tunnel', em: '👷', g: 0 }, { t: 'Recycling worker using a big magnet', em: '♻️', g: 0 },
      { t: 'Farmer planting seeds', em: '👩‍🌾', g: 1 }, { t: 'Zoo keeper looking after camels', em: '🦒', g: 1 }, { t: 'Vet helping a sick dog', em: '🐶', g: 1 },
      { t: 'Baker melting chocolate', em: '🧑‍🍳', g: 2 }, { t: 'Pharmacist dissolving a tablet', em: '💊', g: 2 }],
    explain: 'Different jobs use different parts of science. Many jobs use more than one!' },

  // ---------- Fill the gaps ----------
  { type: 'cloze', prompt: 'Fill the gaps about people who use science.',
    text: 'A {meteorologist} measures rain and clouds to forecast the weather. A {farmer} knows that seeds need water and warmth to grow. At the recycling centre, a big {magnet} lifts out steel cans.',
    extra: ['astronaut', 'filter'],
    explain: 'People all over the city use science in their jobs.' },

  // ---------- True or false? ----------
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'Only people called "scientists" use science in their jobs.', a: false, why: 'Doctors, bakers, farmers, engineers, vets and many more use science every day.' },
      { s: 'A baker uses science when melting chocolate.', a: true, why: 'Melting and setting are changes of state. Bakers need the right temperature.' },
      { s: 'Water from the tap is tested to check it is safe.', a: true, why: 'Water scientists test it many times a day.' },
      { s: 'A recycling centre can use a magnet to lift out aluminium cans.', a: false, why: 'Aluminium is not magnetic. A magnet lifts out steel and iron.' },
    ] },

  // ---------- Odd one out ----------
  { type: 'odd', prompt: 'Which job is the odd one out?', items: ['Doctor', 'Vet', 'Zoo keeper', 'Engineer'], odd: 3,
    reasons: ['They design machines – the others look after people or animals', 'They are the only one who uses science', 'They are the only one with a job'], reason: 0,
    explain: 'Doctors, vets and zoo keepers all care for living things. Engineers design and build things.' },

  // ---------- Build a sentence ----------
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['A pharmacist uses science to', ['measure medicines carefully', 'paint pictures'], ', and a vet uses science to', ['help sick animals', 'build bridges'], '.'],
    explain: 'Lots of different jobs use science.' },
  ]
});
})();
