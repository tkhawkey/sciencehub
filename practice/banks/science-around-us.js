/* Question bank: Science around us (SC5-WLD-2, SC5-WLD-4)
   Each question is one object. "type" says which activity it is – see the engine (index.html) for the formats.
   In "sentence" questions the right choice is written first (the engine shuffles them).
   Matches the Science in Bratislava explorer: places in a city like Bratislava, the people who work there, and the science they use. */
window.BANKS = window.BANKS || [];
(() => {
window.BANKS.push({
  id: 'science-around-us', title: 'Science around us', icon: '🏰', objectives: 'SC5-WLD-2 · SC5-WLD-4',
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
      { s: 'Water from the tap is tested to check it is safe.', a: true, why: 'Water scientists test it every day.' },
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
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['A meteorologist measures the', ['rain and clouds', 'planets'], 'to', ['forecast the weather', 'make bread'], '.'],
    explain: 'Meteorologists use measurements to tell people what the weather will be like.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Doctors use what scientists know about the', ['human body', 'weather'], 'to help people get', ['better', 'taller'], '.'],
    explain: 'Doctors find out why people are ill, and help them get better.' },

  // ---------- More people and places ----------
  { type: 'match', prompt: 'Match each person to their job.',
    pairs: [['Zuzana', 'Water scientist'], ['Peter', 'Engineer'], ['Eva', 'Baker'], ['Katarína', 'Farmer'], ['Marek', 'Zoo keeper']],
    explain: 'The people are made up, but these are real jobs in Bratislava.' },
  { type: 'match', prompt: 'Match each place to the science people use there.',
    pairs: [['The observatory', 'Space, the Sun and the planets'], ['The concert hall', 'Sound and music'], ['The farm', 'Seeds, flowers and growing'], ['The zoo', 'Animals and their habitats'], ['The hospital', 'The human body and digestion']],
    explain: 'Every Year 5 topic is used somewhere in the city.' },
  { type: 'sort', prompt: 'Where would you find this science?', groups: ['💧 The water works', '🌦️ The weather station', '🔭 The observatory'],
    items: [{ t: 'Filtering water through sand and gravel', em: '🪨', g: 0 }, { t: 'Testing water every day', em: '🧪', g: 0 },
      { t: 'Measuring the rain', em: '🌧️', g: 1 }, { t: 'Forecasting tomorrow\'s weather', em: '🌤️', g: 1 },
      { t: 'Looking at the planets through a telescope', em: '🪐', g: 2 }, { t: 'Measuring how the Moon moves', em: '🌙', g: 2 }],
    explain: 'Each place uses a different part of science.' },
  { type: 'sort', prompt: 'At the recycling centre, which things can a big magnet lift out?', groups: ['🧲 Lifted by the magnet', '🚫 Sorted another way'],
    items: [{ t: 'Steel can', em: '🥫', g: 0 }, { t: 'Iron nail', em: '🔩', g: 0 },
      { t: 'Aluminium can', em: '🥤', g: 1 }, { t: 'Plastic bottle', em: '🧴', g: 1 }, { t: 'Glass jar', em: '🫙', g: 1 }],
    explain: 'A magnet lifts steel and iron. Aluminium, plastic and glass are sorted in other ways.' },
  { type: 'order', prompt: 'Put the steps at the water works in order.',
    items: ['Water comes from wells and the river', 'It is filtered through sand and gravel', 'It is cleaned to kill germs', 'It is tested to check it is safe', 'It is safe to drink'],
    explain: 'Filtering takes out bits. Cleaning kills germs. Testing checks the water is safe.' },
  { type: 'cloze', prompt: 'Fill the gaps about the bakery.',
    text: 'Butter and chocolate {melt} when they are warmed. They go {solid} again when they cool.',
    extra: ['dissolve', 'gas'],
    explain: 'Melting and going solid again are changes of state.' },
  { type: 'cloze', prompt: 'Fill the gaps about science in the city.',
    text: 'Instrument makers change the length of strings to change the {pitch}. Astronomers use big {telescopes} to study the planets. Bees {pollinate} the flowers of fruit trees.',
    extra: ['magnets', 'filter'],
    explain: 'Sound, space and plants: all used by people in the city.' },
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'Water from wells is cleaned to kill germs before we drink it.', a: true, why: 'It is filtered, cleaned to kill germs, then tested.' },
      { s: 'You can take as much medicine as you like.', a: false, why: 'Only take medicine the way the label or a doctor says.' },
      { s: 'Good grip between tyres and the road is friction.', a: true, why: 'Friction keeps cars safe on the road.' },
      { s: 'Engineers shape cars so the air flows smoothly round them.', a: true, why: 'Less air resistance means the car uses less fuel.' },
      { s: 'Once dough is baked into bread, you can change it back.', a: false, why: 'Baking changes dough into bread. That change can\'t be undone.' },
    ] },
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'Every animal needs the same food.', a: false, why: 'Every animal needs its own balanced diet. Vets and zoo keepers know this.' },
      { s: 'Farmers plant seeds when the soil is warm and damp.', a: true, why: 'Seeds need water and the right temperature to germinate.' },
      { s: 'Zoo keepers know how each animal is adapted to where it lives in the wild.', a: true, why: 'Then they can give it the right home and the right food.' },
    ] },
  { type: 'odd', prompt: 'Which place is the odd one out?', items: ['The vet', 'The zoo', 'The farm', 'The car factory'], odd: 3,
    reasons: ['It is the only one that is not about living things', 'It is the only place where people work', 'It is the only one in the city'], reason: 0,
    explain: 'Vets, zoo keepers and farmers look after living things. Engineers at the car factory design cars.' },
  { type: 'odd', prompt: 'Which one would the big magnet NOT lift out?', items: ['Steel can', 'Iron nail', 'Aluminium can', 'Steel lid'], odd: 2,
    reasons: ['Aluminium is not magnetic – the others are steel or iron', 'It is the only metal', 'It is the biggest'], reason: 0,
    explain: 'Magnets attract iron and steel. Aluminium is a metal, but it is not magnetic.' },
  ]
});
})();
