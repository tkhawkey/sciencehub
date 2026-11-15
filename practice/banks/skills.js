/* Question bank: Science skills (Cambridge Primary Science 5TWSp.01, 5TWSp.02, 5TWSc.07)
   Each question is one object. "type" says which activity it is – see the engine (index.html) for the formats.
   In "sentence" questions the right choice is written first (the engine shuffles them).
   Matches the Science Skills explorer: the five types of enquiry, which questions science can answer, and choosing good sources. */
window.BANKS = window.BANKS || [];
(() => {
window.BANKS.push({
  id: 'skills', title: 'Science skills', icon: '🔬', objectives: '5TWSp.01 · 5TWSp.02 · 5TWSc.07',
  explorer: { name: 'Science Skills', icon: '🔬', href: '../science-skills/index.html' },
  intro: 'How do scientists find things out? Which enquiry suits a question? Which sources can you trust?',
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
  ]
});
})();
