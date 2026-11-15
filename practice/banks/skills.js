/* Question bank: Science skills (SC5-SKL-1, SC5-SKL-2, SC5-SKL-3, SC5-SKL-18)
   Each question is one object. "type" says which activity it is – see the engine (index.html) for the formats.
   In "sentence" questions the right choice is written first (the engine shuffles them).
   Matches the Science Skills explorer: the five types of enquiry, which questions science can answer, choosing good sources, and using a key. */
window.BANKS = window.BANKS || [];
(() => {
window.BANKS.push({
  id: 'skills', title: 'Science skills', icon: '🔬', objectives: 'SC5-SKL-1 · SC5-SKL-2 · SC5-SKL-3 · SC5-SKL-18',
  explorer: { name: 'Science Skills', icon: '🔬', href: '../science-skills/index.html' },
  intro: 'How do scientists find things out? Which enquiry suits a question? Which sources can you trust? How do you use a key?',
  items: [

  // ---------- Match up ----------
  { type: 'match', prompt: 'Match each type of enquiry to what you do.',
    pairs: [['Fair testing', 'Change one thing and keep everything else the same'], ['Observing over time', 'Watch the same thing again and again, over days or weeks'], ['Pattern seeking', 'Look at lots of examples and find a pattern'], ['Identifying and classifying', 'Name things, or sort them into groups'], ['Research', 'Find out what others have already discovered']],
    explain: 'These are the five main types of scientific enquiry.' },
  { type: 'match', prompt: 'Match each word to its meaning.',
    pairs: [['Source', 'Where information comes from'], ['Evidence', 'Facts that help to answer a question'], ['Opinion', 'What someone thinks or likes'], ['Enquiry', 'A way of finding out']],
    explain: 'Good research uses evidence from good sources, not opinions.' },

  // ---------- Sort into groups ----------
  { type: 'sort', prompt: 'Which type of enquiry is best for each question?', groups: ['⚖️ Fair testing', '⏳ Observing over time', '📈 Pattern seeking', '🗂️ Identifying and classifying', '📚 Research'],
    items: [{ t: 'Which magnet is the strongest?', em: '🧲', g: 0 }, { t: 'How does a bean seed change over three weeks?', em: '🫘', g: 1 }, { t: 'Do bigger instruments make lower sounds?', em: '🎻', g: 2 },
      { t: 'Is this plant a flowering plant?', em: '🌻', g: 3 }, { t: 'What did Galileo discover?', em: '🔭', g: 4 }],
    explain: 'Think about what you would actually do to find the answer.' },
  { type: 'sort', prompt: 'Can science answer the question?', groups: ['🔬 Science can answer it', '💭 Not a science question'],
    items: [{ t: 'Does salt dissolve faster in hot water?', em: '🧂', g: 0 }, { t: 'How does my shadow change during the day?', em: '☀️', g: 0 }, { t: 'Which birds visit our playground?', em: '🐦', g: 0 },
      { t: 'Which flower is the prettiest?', em: '🌼', g: 1 }, { t: 'Is football more fun than tag?', em: '⚽', g: 1 }, { t: 'What should we have for dinner?', em: '🍽️', g: 1 }],
    explain: 'Science can answer questions you can test, watch, measure or look up. It can\'t answer opinions about what people like or want.' },

  // ---------- Fill the gaps ----------
  { type: 'cloze', prompt: 'Fill the gaps about research.',
    text: 'When you do research, use sources that answer the {question}. Check that the facts are up to {date}, and that the source is not trying to {sell} you something. A friend\'s guess is an {opinion}, not a fact.',
    extra: ['colour', 'pictures'],
    explain: 'Good sources are relevant, up to date, written by people who know, and not adverts.' },

  // ---------- True or false? ----------
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'An advert is a good place to find facts.', a: false, why: 'An advert wants to sell you something, so it may not tell the truth.' },
      { s: 'An old book can have facts that are out of date.', a: true, why: 'Scientists keep finding out more. In 2006, Pluto stopped being called a planet.' },
      { s: 'It is a good idea to check a fact in more than one source.', a: true, why: 'If good sources agree, you can be more sure the fact is true.' },
      { s: 'In a fair test, you change lots of things at once.', a: false, why: 'Change only one thing. Then you know what made the difference.' },
      { s: '"Which flower is the prettiest?" is a scientific question.', a: false, why: 'It is about what people like. There is no answer to find out.' },
    ] },

  // ---------- Odd one out ----------
  { type: 'odd', prompt: 'You want to know how many planets go round the Sun. Which source is the odd one out?', items: ['A new encyclopedia', 'A space agency website', 'A video by an astronomer', 'An advert for a telescope'], odd: 3,
    reasons: ['It wants to sell you something – the others are written by experts', 'It is the only one with pictures', 'It is the only one about space'], reason: 0,
    explain: 'Encyclopedias, space scientists and astronomers know about planets. An advert just wants you to buy.' },
  { type: 'odd', prompt: 'Which question is the odd one out?', items: ['Does warm water dissolve sugar faster?', 'Which magnet is the strongest?', 'Does a bigger parachute fall more slowly?', 'How does a bean change over three weeks?'], odd: 3,
    reasons: ['It needs observing over time – the others are fair tests', 'It is the only question about plants that grow', 'It is the only one you can answer'], reason: 0,
    explain: 'The first three change one thing and measure the effect. The bean is watched as it changes over time.' },

  // ---------- Build a sentence ----------
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['In a fair test, you change', ['one thing', 'everything'], 'and keep everything else the', ['same', 'different'], '.'],
    explain: 'If you change two things, you can\'t tell which one made the difference.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['To find out what Galileo discovered, you would do', ['research', 'a fair test'], ', because it happened', ['long ago', 'today'], '.'],
    explain: 'You can\'t test what happened in the past. You find out from good sources.' },
  { type: 'sentence', prompt: 'Build a true sentence.',
    parts: ['"Is this animal a mammal, a bird or a fish?" needs', ['identifying and classifying', 'a fair test'], '. You look closely at it, then put it in a', ['group', 'race'], '.'],
    explain: 'Identifying and classifying means looking closely, then naming things or sorting them into groups.' },

  // ---------- More on enquiries and sources ----------
  { type: 'match', prompt: 'Match each type of enquiry to a question it could answer.',
    pairs: [['Fair testing', 'Does a ball bounce higher on concrete or on grass?'], ['Observing over time', 'How does a banana change over a week?'], ['Pattern seeking', 'Do taller children run faster?'], ['Identifying and classifying', 'Which minibeasts live under the stones?'], ['Research', 'Who invented the fridge?']],
    explain: 'Think about what you would actually do to find the answer.' },
  { type: 'sort', prompt: 'Do bats use sound to find their food? Which sources would you use?', groups: ['✅ Use it', '❌ Leave it out'],
    items: [{ t: 'A nature charity website', em: '💻', g: 0 }, { t: 'A zoo keeper who works with bats', em: '🧑‍🔬', g: 0 }, { t: 'An encyclopedia', em: '📕', g: 0 },
      { t: 'An advert for bat spray', em: '🛍️', g: 1 }, { t: 'A very old book (1900)', em: '📜', g: 1 }, { t: 'A friend\'s brother says bats are blind', em: '🗣️', g: 1 }, { t: 'A page about bat babies', em: '📗', g: 1 }],
    explain: 'Use sources that answer the question and that you can trust. Leave out adverts, guesses, old books and pages that don\'t answer the question.' },
  { type: 'cloze', prompt: 'Fill the gaps about a fair test.',
    text: 'In a fair test, you change {one} thing. You {measure} what happens. You keep everything else the {same}.',
    extra: ['two', 'different'],
    explain: 'If you change only one thing, you know what made the difference.' },
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'Science can answer "Is chocolate cake the best cake?"', a: false, why: 'It is an opinion. People like different cakes.' },
      { s: 'A dentist is a good source about teeth.', a: true, why: 'A dentist is an expert on teeth.' },
      { s: 'One person\'s story is enough evidence.', a: false, why: 'One example is not enough. Scientists look at lots of people.' },
      { s: 'Observing over time means watching the same thing again and again.', a: true, why: 'You might look every day, or every week, and see how it changes.' },
      { s: 'Pattern seeking is useful when you can\'t control everything.', a: true, why: 'You collect lots of examples, then look for a pattern.' },
    ] },
  { type: 'odd', prompt: 'Which question is the odd one out?', items: ['How does a tadpole change over the summer?', 'Do seeds need water to start growing?', 'Which minibeasts live under the stones?', 'Which flower is the prettiest?'], odd: 3,
    reasons: ['It is an opinion – science can answer the others', 'It is the only question about the garden', 'It is the only question about living things'], reason: 0,
    explain: 'Science can\'t answer "Which is the prettiest?". It is about what people like.' },

  // ---------- Using a key ----------
  { type: 'cloze', prompt: 'Fill the gaps about keys.',
    text: 'A {key} is a set of yes/no questions. Each {answer} takes you to the next question. At the end, only one {name} is left.',
    extra: ['opinion', 'colour'],
    explain: 'A key helps you name something by looking closely at its features.' },
  { type: 'table', prompt: 'Use this key to name each plant.', caption: 'A key for 8 plants',
    table: { head: ['Step', 'Question', 'Yes', 'No'], rows: [
      ['1', 'Does it make flowers?', 'Go to 4', 'Go to 2'], ['2', 'Does it make cones?', 'Pine tree', 'Go to 3'], ['3', 'Does it make spores under its leaves?', 'Fern', 'Moss'],
      ['4', 'Does it have bright flowers with petals?', 'Go to 5', 'Go to 7'], ['5', 'Is it covered in sharp spines?', 'Cactus', 'Go to 6'],
      ['6', 'Is it a tree, with a thick woody trunk?', 'Apple tree', 'Sunflower'], ['7', 'Is it a tree, with a thick woody trunk?', 'Oak tree', 'Grass']] },
    questions: [
      { q: 'A plant has no flowers. It makes cones. What is it?', options: ['Pine tree', 'Fern', 'Moss', 'Oak tree'], a: 0, why: 'Step 1: no. Step 2: yes. That leads to the pine tree.' },
      { q: 'A plant has bright flowers and sharp spines. What is it?', options: ['Sunflower', 'Cactus', 'Apple tree', 'Grass'], a: 1, why: 'Step 1: yes. Step 4: yes. Step 5: yes. That leads to the cactus.' },
      { q: 'A plant has small, dull flowers and a thick woody trunk. What is it?', options: ['Grass', 'Apple tree', 'Oak tree', 'Pine tree'], a: 2, why: 'Step 1: yes. Step 4: no. Step 7: yes. That leads to the oak tree.' },
      { q: 'No flowers, no cones, and no spores under its leaves. What is it?', options: ['Fern', 'Pine tree', 'Grass', 'Moss'], a: 3, why: 'Moss makes spores in little cases on stalks, not under its leaves.' },
    ],
    explain: 'Start at step 1. Answer each question, then go where it tells you.' },
  { type: 'sort', prompt: 'Which questions could go in a key?', groups: ['✅ Good key question', '❌ Can\'t go in a key'],
    items: [{ t: 'Does it make cones?', em: '🌲', g: 0 }, { t: 'Is it covered in sharp spines?', em: '🌵', g: 0 }, { t: 'Does it have tiny hooks?', em: '🪝', g: 0 },
      { t: 'Is it pretty?', em: '💐', g: 1 }, { t: 'Is it the best plant?', em: '🏆', g: 1 }, { t: 'Is it nice?', em: '🙂', g: 1 }],
    explain: 'A key question is about something you can see. Everyone gives the same answer. Opinions can\'t go in a key.' },
  { type: 'tf', prompt: 'True or false?',
    statements: [
      { s: 'A key uses yes/no questions to help you name something.', a: true, why: 'Each answer takes you to the next question, until one name is left.' },
      { s: '"Is it pretty?" is a good question for a key.', a: false, why: 'It is an opinion. People would give different answers.' },
      { s: 'A fern makes spores under its leaves.', a: true, why: 'The brown dots under a fern\'s leaves are full of spores.' },
      { s: 'A pine tree makes flowers.', a: false, why: 'A pine tree makes seeds in cones. It never makes flowers.' },
      { s: 'Grass makes flowers.', a: true, why: 'Grass flowers are small and green, with no petals.' },
    ] },
  { type: 'odd', tier: 'further', prompt: 'You are making a key for seeds. Which question is the odd one out?', items: ['Does it have wings or a parachute?', 'Is it inside a pod?', 'Is it pretty?', 'Does it have tiny hooks?'], odd: 2,
    reasons: ['It is an opinion – the others are about what you can see', 'It is the shortest question', 'It is the only question about seeds'], reason: 0,
    explain: 'A key needs questions with one true answer. "Is it pretty?" has no true answer.' },
  ]
});
})();
