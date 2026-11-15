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

  // ---------- Use a key (branching keys) ----------
  { type: 'key', mode: 'name', prompt: 'Use the key to name each plant.',
    key: { q: 'Does it have petals?', yes: { q: 'Are the petals yellow?', yes: 'Sunflower', no: 'Apple tree' }, no: { q: 'Does it have cones?', yes: 'Pine tree', no: 'Fern' } },
    things: [{ img: '../flower-lab/photos/sunflower-clue.jpg', alt: 'A big flower with yellow petals', at: 'Sunflower' }, { img: '../flower-lab/photos/apple-blossom.jpg', alt: 'A white and pink flower with petals', at: 'Apple tree' }, { img: '../flower-lab/photos/pine-cone.jpg', alt: 'Two brown cones among long thin leaves', at: 'Pine tree' }, { img: '../flower-lab/photos/fern-spores.jpg', alt: 'A leaf with brown dots underneath', at: 'Fern' }],
    credit: 'Photos (Wikimedia Commons): Brandon Weeks CC BY 3.0; Billpowellisalive CC BY-SA 3.0; Wilfredor CC0; Krzysztof Ziarnek, Kenraiz CC BY-SA 4.0',
    explain: 'A fern has no petals and no cones. It makes spores in the brown dots under its leaves.' },
  { type: 'key', mode: 'name', prompt: 'Use the key to name each plant. Look closely at the photos.',
    key: { q: 'Can you see a fruit or a pod?', yes: { q: 'Is it red?', yes: 'Tomato', no: 'Pea' },
      no: { q: 'Is it covered in sharp spines?', yes: 'Cactus', no: { q: 'Are there brown dots under its leaves?', yes: 'Fern', no: 'Moss' } } },
    things: [{ img: '../flower-lab/photos/tomato-fruit.jpg', alt: 'Round red fruits on a plant', at: 'Tomato' }, { img: '../flower-lab/photos/pea-pod.jpg', alt: 'An open green pod with peas inside', at: 'Pea' },
      { img: '../flower-lab/photos/cactus.jpg', alt: 'Round plants covered in sharp spines', at: 'Cactus' }, { img: '../flower-lab/photos/fern-spores.jpg', alt: 'A leaf with brown dots underneath', at: 'Fern' }, { img: '../flower-lab/photos/moss.jpg', alt: 'A soft green cushion of tiny plants', at: 'Moss' }],
    credit: 'Photos (Wikimedia Commons): Rob Bertholf CC BY 3.0; Rachael Gorjestani CC0; Diego Delso CC BY-SA 3.0; Krzysztof Ziarnek, Kenraiz CC BY-SA 4.0; Tomas Pocius CC0',
    explain: 'A pea pod is a fruit too. It holds the seeds. Moss has no fruit, no spines and no brown dots.' },
  { type: 'key', mode: 'name', prompt: 'Use the key to name each seed.',
    key: { q: 'Does it have wings or a parachute?', yes: { q: 'Is it fluffy?', yes: 'Dandelion', no: 'Sycamore' },
      no: { q: 'Does it have tiny hooks?', yes: 'Burdock', no: { q: 'Is it inside a pod?', yes: 'Pea', no: { q: 'Is it inside a juicy fruit?', yes: 'Cherry', no: 'Acorn' } } } },
    things: [{ pic: 'dandelion', alt: 'A seed with a fluffy parachute', at: 'Dandelion' }, { pic: 'sycamore', alt: 'A seed with two wings', at: 'Sycamore' },
      { pic: 'burdock', alt: 'A round seed case with hooks', at: 'Burdock' }, { pic: 'pea', alt: 'Seeds in a green pod', at: 'Pea' },
      { pic: 'cherry', alt: 'Two red juicy fruits', at: 'Cherry' }, { pic: 'acorn', alt: 'A seed with a little cap', at: 'Acorn' }],
    explain: 'Start at the top every time. Answer each question about the picture, and follow the branch.' },
  { type: 'key', mode: 'finish', prompt: 'Finish the key. Choose the missing questions.',
    key: { q: 'Does it have petals?', yes: { q: 'Are the petals yellow?', yes: 'Sunflower', no: 'Apple tree' },
      no: { q: 'Does it have cones?', gap: true, yes: 'Pine tree', no: { q: 'Are there brown dots under its leaves?', gap: true, yes: 'Fern', no: 'Moss' } } },
    things: [{ img: '../flower-lab/photos/sunflower-clue.jpg', alt: 'A big flower with yellow petals', at: 'Sunflower' }, { img: '../flower-lab/photos/apple-blossom.jpg', alt: 'A white and pink flower with petals', at: 'Apple tree' }, { img: '../flower-lab/photos/pine-cone.jpg', alt: 'Two brown cones among long thin leaves', at: 'Pine tree' }, { img: '../flower-lab/photos/fern-spores.jpg', alt: 'A leaf with brown dots underneath', at: 'Fern' }, { img: '../flower-lab/photos/moss.jpg', alt: 'A soft green cushion of tiny plants', at: 'Moss' }],
    credit: 'Photos (Wikimedia Commons): Brandon Weeks CC BY 3.0; Billpowellisalive CC BY-SA 3.0; Wilfredor CC0; Krzysztof Ziarnek, Kenraiz CC BY-SA 4.0; Tomas Pocius CC0',
    extra: ['Is it green?', 'Is it pretty?'],
    explain: 'A key question must split the group in two. Pine trees, ferns and moss are all green, so "Is it green?" cannot split them. "Is it pretty?" is an opinion.' },
  { type: 'key', mode: 'finish', prompt: 'Finish the key for these seeds.',
    key: { q: 'Does it have wings or a parachute?', yes: { q: 'Is it fluffy?', gap: true, yes: 'Dandelion', no: 'Sycamore' },
      no: { q: 'Is it inside a pod?', yes: 'Pea', no: { q: 'Does it have tiny hooks?', gap: true, yes: 'Burdock', no: 'Cherry' } } },
    things: [{ pic: 'dandelion', at: 'Dandelion' }, { pic: 'sycamore', at: 'Sycamore' }, { pic: 'pea', at: 'Pea' }, { pic: 'burdock', at: 'Burdock' }, { pic: 'cherry', at: 'Cherry' }],
    extra: ['Is it red?', 'Is it a seed?', 'Is it pretty?'],
    explain: 'Check each gap: the seed on the Yes branch must answer "yes". "Is it red?" would send the cherry down the Yes branch, not the burdock.' },
  { type: 'key', mode: 'finish', prompt: 'Finish the key for these animals.',
    key: { q: 'Does it have feathers?', gap: true, yes: { q: 'Can it fly?', yes: '🦅 Eagle', no: '🐧 Penguin' }, no: { q: 'Does it have fur?', gap: true, yes: '🐻‍❄️ Polar bear', no: '🦈 Shark' } },
    extra: ['Can it swim?', 'Is it cute?'],
    explain: 'Penguins, polar bears and sharks can all swim, so "Can it swim?" doesn\'t split them. "Is it cute?" is an opinion.' },
  ]
});
})();
