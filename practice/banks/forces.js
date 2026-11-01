/* Question bank: Forces (Cambridge Primary Science 5Pf.01, 5Pf.02, 5Pf.03)
   Each question is one object. "type" says which activity it is – see the engine (index.html) for the formats.
   In "sentence" questions the right choice is written first (the engine shuffles them); "answers" lists other true versions.
   Only the seven forces in 5Pf.01 are used: gravity, applied force, normal force, upthrust, friction, air resistance and water resistance.
   Pictures are unlabelled force diagrams from the Forces Playground. Label positions are in % across and down the picture. */
window.BANKS = window.BANKS || [];
(() => {
const P = f => `../forces-playground/pics/${f}`;
window.BANKS.push({
  id: 'forces', title: 'Forces', icon: '🛝', objectives: '5Pf.01, 5Pf.02, 5Pf.03',
  explorer: { name: 'Forces Playground', icon: '🛝', href: '../forces-playground/index.html' },
  intro: 'Naming forces, drawing force diagrams, balanced and unbalanced forces, parachutes, upthrust and friction.',
  items: [

  // ---------- Label the diagram ----------
  { type: 'label', prompt: 'A book is lying still on a table. Label the forces on the book.', img: P('book.svg'), alt: 'A book on a table with an arrow pointing up and an arrow pointing down',
    labels: [{ text: 'Normal force', x: 78, y: 22, px: 50, py: 36 }, { text: 'Gravity', x: 78, y: 86, px: 50, py: 80 }],
    extra: ['Upthrust', 'Friction'],
    explain: 'Gravity pulls the book down. The table pushes it up with a normal force. They are the same size, so they are balanced.' },
  { type: 'label', prompt: 'A toy boat is floating still. Label the forces on the boat.', img: P('boat.svg'), alt: 'A boat floating on water with an arrow pointing up and an arrow pointing down',
    labels: [{ text: 'Upthrust', x: 78, y: 22, px: 50, py: 36 }, { text: 'Gravity', x: 78, y: 86, px: 50, py: 82 }],
    extra: ['Normal force', 'Water resistance'],
    explain: 'Gravity pulls the boat down. The water pushes it up with upthrust. They are balanced, so the boat floats.' },
  { type: 'label', prompt: 'A trolley is pushed to the right at a steady speed. Label the forces on the trolley.', img: P('trolley.svg'), alt: 'A trolley with arrows pointing up, down, left and right',
    labels: [{ text: 'Normal force', x: 78, y: 18, px: 53, py: 36 }, { text: 'Gravity', x: 78, y: 90, px: 53, py: 84 }, { text: 'Applied force', x: 86, y: 46, px: 78, py: 60 }, { text: 'Friction', x: 14, y: 46, px: 30, py: 60 }],
    extra: ['Upthrust', 'Water resistance'],
    explain: 'The person pushes forwards (applied force) and friction acts backwards, against the movement. Gravity pulls down and the floor pushes up (normal force).' },

  // ---------- Put in order ----------
  { type: 'order', prompt: 'A toy car rolls onto four different surfaces. Put them in order of how far it rolls.', first: 'Rolls furthest', last: 'Stops soonest',
    items: ['Ice', 'Wood', 'Carpet', 'Sandpaper'],
    explain: 'The rougher the surface, the more friction, and the sooner the car stops. Ice is the smoothest, sandpaper the roughest.' },
  { type: 'order', prompt: 'Put the steps for measuring upthrust in order.', first: 'First', last: 'Last',
    items: ['Hang the object on a force meter', 'Read the force meter in air', 'Lower the object into the water', 'Read the force meter again', 'Take the second reading away from the first'],
    explain: 'The reading in water is smaller. The difference between the two readings is the upthrust.' },

  // ---------- Match up ----------
  { type: 'match', prompt: 'Match each force to what it is.',
    pairs: [['Gravity', 'Pulls everything down towards the Earth'], ['Normal force', 'The push from a solid surface, like a table or the floor'], ['Upthrust', 'The push up from a liquid or gas'], ['Applied force', 'A push or pull from someone or something']],
    explain: 'These four forces can act on objects even when they are still.' },
  { type: 'match', prompt: 'Match each force to what it does.',
    pairs: [['Friction', 'Acts when surfaces slide, or try to slide, over each other'], ['Air resistance', 'Slows things moving through the air'], ['Water resistance', 'Slows things moving through water']],
    explain: 'All three of these forces act against the movement.' },
  { type: 'match', prompt: 'Match each word to its meaning.',
    pairs: [['Newton (N)', 'The unit we measure forces in'], ['Force meter', 'Equipment for measuring forces'], ['Balanced forces', 'Forces that are the same size but act in opposite directions'], ['Anomalous result', 'A result that does not fit the pattern']],
    explain: 'These are useful words for investigating forces.' },

  // ---------- Fill the gaps ----------
  { type: 'cloze', prompt: 'Fill the gaps about a book on a table.',
    text: 'The book is still, but it still has forces on it. {Gravity} pulls it down, and the table pushes it up with a {normal} force. The two forces are the same size, so they are {balanced}.',
    extra: ['upthrust', 'unbalanced'],
    explain: 'An object can have several forces on it even when it is not moving.' },
  { type: 'cloze', prompt: 'Fill the gaps about parachutes.',
    text: 'A bigger parachute has more {air} resistance at the same speed, so it falls more {slowly} and takes {longer} to land.',
    extra: ['water', 'quickly', 'less'],
    explain: 'A bigger canopy pushes against more air, so air resistance balances gravity while it is still falling slowly.' },
  { type: 'cloze', prompt: 'Fill the gaps about upthrust.',
    text: 'A stone weighs 5 N on a force meter. In water the reading is only 3 N, because the water pushes up on it with {upthrust}. The upthrust is {2} N. We measure forces in {newtons}.',
    extra: ['friction', '8', 'metres'],
    explain: '5 N − 3 N = 2 N of upthrust.' },

  // ---------- True or false ----------
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'A book lying still on a table has no forces acting on it.', a: false, why: 'Gravity pulls it down and the table pushes it up. The forces are balanced, so it stays still.' },
      { s: 'Friction acts in the opposite direction to the movement.', a: true, why: 'Friction always works against the movement, so it slows things down.' },
      { s: 'Upthrust only acts on things that float.', a: false, why: 'Things that sink have upthrust too. It is just smaller than their weight.' },
      { s: 'A skydiver falling at a steady speed has balanced forces.', a: true, why: 'Air resistance is the same size as gravity, so the skydiver doesn\'t speed up or slow down.' },
      { s: 'In a force diagram, a longer arrow means a bigger force.', a: true, why: 'The arrow shows the direction of the force, and its length shows how big it is.' },
    ],
    explain: 'Watch out for these common mix-ups!' },
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'A moving object must always have unbalanced forces on it.', a: false, why: 'A trolley pushed at a steady speed is moving, but the push and friction are balanced.' },
      { s: 'Gravity pulls things down towards the Earth.', a: true, why: 'Gravity pulls everything down, whether it is moving or still.' },
      { s: 'A car rolls further on sandpaper than on ice.', a: false, why: 'Sandpaper is rough, so there is more friction and the car stops sooner.' },
      { s: 'Forces are measured in newtons.', a: true, why: 'We write newtons as N, so 5 newtons is 5 N.' },
      { s: 'Water resistance acts on a boat floating still on calm water.', a: false, why: 'Water resistance only acts on things moving through water.' },
    ],
    explain: 'Some of these surprise people!' },

  // ---------- Sort into groups ----------
  { type: 'sort', prompt: 'Which force is slowing each one down?', groups: ['🧱 Friction', '💨 Air resistance', '💧 Water resistance'],
    items: [{ t: 'Bike brakes on a wheel', g: 0 }, { t: 'A box sliding across a carpet', g: 0 }, { t: 'Rubbing your hands together', g: 0 }, { t: 'A falling feather', g: 1 }, { t: 'An open parachute', g: 1 }, { t: 'A paper plane gliding', g: 1 }, { t: 'A swimmer moving through a pool', g: 2 }, { t: 'A fish gliding forwards', g: 2 }],
    explain: 'Friction acts between surfaces. Air resistance acts on things moving through air, and water resistance on things moving through water.' },
  { type: 'sort', prompt: 'Is each force a push or a pull?', groups: ['👉 Push', '🤏 Pull'],
    items: [{ t: 'Kicking a football', g: 0 }, { t: 'A table holding up a book', g: 0 }, { t: 'Water holding up a boat', g: 0 }, { t: 'Opening a drawer by its handle', g: 1 }, { t: 'Gravity on a falling apple', g: 1 }, { t: 'A dog tugging its lead', g: 1 }],
    explain: 'Every force is a push or a pull. The normal force and upthrust are pushes; gravity is a pull.' },

  // ---------- Carroll diagram ----------
  { type: 'carroll', prompt: 'Sort these into the Carroll diagram.', rows: ['Moving', 'Still'], cols: ['Forces are balanced', 'Forces are unbalanced'],
    items: [{ t: 'Skydiver at a steady speed', em: '🪂', r: 0, c: 0 }, { t: 'Trolley pushed at a steady speed', em: '🛒', r: 0, c: 0 }, { t: 'Skydiver who has just jumped', em: '⏩', r: 0, c: 1 }, { t: 'Box sliding and slowing down', em: '📦', r: 0, c: 1 }, { t: 'Book lying on a table', em: '📕', r: 1, c: 0 }, { t: 'Boat floating on calm water', em: '⛵', r: 1, c: 0 }],
    explain: 'Balanced forces mean an object stays still or keeps moving at a steady speed. Unbalanced forces make it speed up or slow down.' },

  // ---------- Read the table ----------
  { type: 'table', prompt: 'A class dropped parachutes of different sizes and timed the fall. Use their results.', caption: 'Parachute drop from 2.5 m',
    table: { head: ['Canopy width', 'Fall time'], rows: [['10 cm', '0.81 s'], ['20 cm', '1.19 s'], ['30 cm', '0.93 s'], ['40 cm', '2.07 s'], ['50 cm', '2.58 s']] },
    questions: [
      { q: 'Which parachute fell the most slowly?', options: ['10 cm', '20 cm', '40 cm', '50 cm'], a: 3, why: 'It took the longest time to land: 2.58 s.' },
      { q: 'Which result is anomalous (does not fit the pattern)?', options: ['10 cm', '20 cm', '30 cm', '50 cm'], a: 2, why: 'The times go up as the canopy gets bigger, but 0.93 s is shorter than the 20 cm time.' },
      { q: 'If they dropped the 30 cm parachute again, about how long would it take?', options: ['0.9 s', '1.6 s', '2.6 s', '3.5 s'], a: 1, why: 'It should be between the 20 cm time (1.19 s) and the 40 cm time (2.07 s).' },
    ],
    explain: 'The bigger the canopy, the longer the fall time. An anomalous result should be checked by doing it again.' },
  { type: 'table', prompt: 'Some objects were weighed on a force meter in air and in water. Use the results.', caption: 'Force meter readings',
    table: { head: ['Object', 'In air', 'In water'], rows: [['Stone', '5 N', '3 N'], ['Metal weight', '8 N', '7 N'], ['Apple', '2 N', '0 N (it floats)']] },
    questions: [
      { q: 'How big is the upthrust on the stone?', options: ['2 N', '3 N', '5 N', '8 N'], a: 0, why: '5 N − 3 N = 2 N.' },
      { q: 'Which object has the smallest upthrust?', options: ['Stone', 'Metal weight', 'Apple'], a: 1, why: '8 N − 7 N = 1 N. That is the smallest.' },
      { q: 'Why does the force meter read 0 N for the apple?', options: ['The upthrust is as big as its weight', 'Gravity stops in water', 'The apple has no weight', 'The force meter is broken'], a: 0, why: 'Upthrust (2 N) holds up all of the apple\'s weight, so it floats.' },
    ],
    explain: 'Every reading is smaller in water. The difference is the upthrust.' },

  // ---------- Odd one out ----------
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['Friction', 'Gravity', 'Air resistance', 'Water resistance'], odd: 1,
    reasons: ['It does not act against movement – the others all slow moving things down', 'It is the only force that is a push', 'It only acts on things that are moving'], reason: 0,
    explain: 'Friction, air resistance and water resistance all act against movement. Gravity pulls things down whether they are moving or not.' },
  { type: 'odd', prompt: 'Which is the odd one out?', items: ['📕 Book on a table', '⛵ Boat floating still', '⏩ Skydiver who has just jumped', '🛒 Trolley at a steady speed'], odd: 2,
    reasons: ['Its forces are unbalanced – the others all have balanced forces', 'It is the only one that is moving', 'It is the only one with gravity acting on it'], reason: 0,
    explain: 'The skydiver is speeding up, so gravity is bigger than air resistance. The trolley is moving too, but at a steady speed its forces are balanced.' },
  { type: 'odd', prompt: 'Which surface is the odd one out?', items: ['Ice', 'Glass', 'Sandpaper', 'Polished wood'], odd: 2,
    reasons: ['It is rough, so it has lots of friction – the others are smooth', 'It is the only one that is hard', 'It is the only one that is cold'], reason: 0,
    explain: 'Sandpaper is rough, so a toy car would stop on it quickly. The others are smooth, with little friction.' },

  // ---------- Build a sentence ----------
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['When an object is still, the forces on it are', ['balanced', 'unbalanced'], '.'],
    explain: 'The forces on a still object are the same size and act in opposite directions.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['Friction acts in the', ['opposite', 'same'], 'direction to the movement, so it', ['slows', 'speeds'], 'things down.'],
    explain: 'Friction always works against the movement.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['In a force diagram, the arrow shows the', ['direction', 'colour'], 'of a force, and a longer arrow means a', ['bigger', 'smaller'], 'force.'],
    explain: 'Arrows start on the object and point the way the force acts. Their length shows the size.' },
  ],
});
})();
