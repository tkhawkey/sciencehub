/* Shared helpers for every Science Hub tool: the four levels and the objective list.
   Load after objectives.js:  <script src="../hub/objectives.js"></script><script src="../hub/levels.js"></script>
   Levels (tier): 'core' (the default when a mission, tab or question has no tier), 'back', 'further', 'next'. */
(() => {
  const T = {
    core:    { em: '⭐', name: 'Core', long: '⭐ Core', head: '⭐ Core missions', note: '' },
    back:    { em: '↩️', name: 'Look back', long: '↩️ Look back – from earlier years', head: '↩️ Look back – from earlier years',
               note: '↩️ Look back – from earlier years. This helps with the Year 5 work.' },
    further: { em: '🔭', name: 'Going further', long: '🔭 Going further – optional', head: '🔭 Going further – optional',
               note: '🔭 Going further – optional. You don\'t need this for Year 5.' },
    next:    { em: '⏩', name: 'Next year', long: '⏩ Next year – a sneak peek', head: '⏩ Next year – a sneak peek',
               note: '⏩ Next year – a sneak peek. You will learn this properly in Year 6 or later.' },
  };
  const ORDER = ['core', 'back', 'further', 'next'];
  const tier = x => (x && T[x.tier]) ? x.tier : 'core';
  const OBJ = () => window.HUB_OBJECTIVES || {};

  const HUB = window.HUB = {
    TIERS: T, ORDER, tier,
    // A small badge: badge('further') → "🔭 Going further". long = true → "🔭 Going further – optional"
    badge: (t, long) => T[t] && t !== 'core' || long ? `<span class="lvl lvl-${t}">${long ? T[t].long : T[t].em + ' ' + T[t].name}</span>` : '',
    // The one-line note at the top of a panel that is not Core ('' for Core)
    note: t => t && t !== 'core' && T[t] ? `<p class="lvl-note lvl-${t}">${T[t].note}</p>` : '',
    // Missions in teaching order: Core, then Look back, Going further, Next year (the order inside each level is kept)
    sort: list => ORDER.flatMap(t => list.filter(m => tier(m) === t)),
    // The mission list, with a small heading for each level. item(m, i) returns one button (i = index in list).
    missionList(list, item) {
      return ORDER.map(t => {
        const ms = list.map((m, i) => [m, i]).filter(([m]) => tier(m) === t);
        if (!ms.length) return '';
        return `<h4 class="lvl-head lvl-${t}">${T[t].head}</h4>` + ms.map(([m, i]) => item(m, i)).join('');
      }).join('');
    },
    // "Core: 6 of 8 ⭐ · Extra: 2 of 4"
    starLine(list, done) {
      const has = m => done.includes(m.id), core = list.filter(m => tier(m) === 'core'), extra = list.filter(m => tier(m) !== 'core');
      return `<p class="lvl-stars">Core: ${core.filter(has).length} of ${core.length} ⭐${extra.length ? ` · Extra: ${extra.filter(has).length} of ${extra.length}` : ''}</p>
        ${extra.length ? '<p class="lvl-why">⭐ Core missions are the main Year 5 learning. The others are optional.</p>' : ''}`;
    },
    // Objectives for the "For teachers" panel
    objText: c => (OBJ()[c] || {}).text || '',
    objPupil: c => (OBJ()[c] || {}).pupil || '',
    objList: codes => codes.map(c => `<p><b>${c}</b> ${(OBJ()[c] || {}).text || ''}</p>`).join(''),
  };

  const css = `
    .lvl { display: inline-block; border-radius: 8px; padding: 1px 7px; font-size: 12.5px; font-weight: 700; white-space: nowrap; vertical-align: middle; line-height: 1.5; }
    .lvl-core { background: #fff3c4; color: #7a5600; }
    .lvl-back { background: #dff3ec; color: #136b4c; }
    .lvl-further { background: #e8e0ff; color: #5a3fb0; }
    .lvl-next { background: #dceaff; color: #1f4fae; }
    .lvl-note { margin: 0 0 10px; padding: 7px 10px; border-radius: 12px; font-size: 15px; font-weight: 600; }
    .lvl-head { margin: 12px 0 2px; font-size: 15px; color: #5b6386; background: none; padding: 0; }
    .lvl-head:first-child { margin-top: 0; }
    .lvl-head.lvl-core { color: #7a5600; }
    .lvl-stars { margin: 0 0 2px; font-weight: 700; }
    .lvl-why { margin: 0 0 10px; color: #5b6386; font-size: 15px; }`;
  const add = () => { if (document.getElementById('hub-levels-css')) return; const s = document.createElement('style'); s.id = 'hub-levels-css'; s.textContent = css; document.head.appendChild(s); };
  if (document.head) add(); else document.addEventListener('DOMContentLoaded', add);
})();
