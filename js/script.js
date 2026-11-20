// ===== CHAYAMANA 2026 e-invitation – script =====

// 1) EVENT DATE for the countdown (Sri Lanka time, +05:30). Change this.
const EVENT_DATE = new Date('2026-12-19T09:00:00+05:30');

const page = document.getElementById('page');
const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('openBtn');
const replayBtn = document.getElementById('replayBtn');

// 2) Open the envelope
function openInvitation() {
  envelope.classList.add('open');
  page.classList.add('go');
  document.body.style.overflow = '';
}

// Lock scrolling until the envelope is opened
document.body.style.overflow = 'hidden';
openBtn.addEventListener('click', openInvitation);

// 3) Replay the opening animation
replayBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0 });
  envelope.classList.remove('open');
  page.classList.remove('go');
  void envelope.offsetWidth; // restart CSS animations
  document.body.style.overflow = 'hidden';
});

// 4) Filmstrip: duplicate the photos so the loop is seamless
const film = document.getElementById('film');
film.innerHTML += film.innerHTML;

// 5) Countdown timer
const els = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  mins: document.getElementById('mins'),
  secs: document.getElementById('secs')
};
const pad = (n) => String(n).padStart(2, '0');

function setNum(el, value) {
  if (el.textContent !== value) {
    el.textContent = value;
    el.classList.remove('tick');
    void el.offsetWidth;
    el.classList.add('tick');
  }
}

function updateCountdown() {
  let ms = Math.max(0, EVENT_DATE - new Date());
  const d = Math.floor(ms / 86400000); ms -= d * 86400000;
  const h = Math.floor(ms / 3600000);  ms -= h * 3600000;
  const m = Math.floor(ms / 60000);    ms -= m * 60000;
  const s = Math.floor(ms / 1000);
  setNum(els.days, pad(d));
  setNum(els.hours, pad(h));
  setNum(els.mins, pad(m));
  setNum(els.secs, pad(s));
}
updateCountdown();
setInterval(updateCountdown, 1000);
