/* =========================================================
   RecoverWell — script.js
   Handles: streak calendar generation, scroll reveal
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  // ─── BUILD STREAK CALENDAR ───────────────────────────────
  const cal = document.getElementById('streakCal');

  if (cal) {
    const dayLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    // Render day-of-week headers
    dayLabels.forEach(function (label) {
      const header = document.createElement('div');
      header.className = 'streak-cal-header';
      header.textContent = label;
      cal.appendChild(header);
    });

    // Render 28 day cells
    for (let i = 1; i <= 28; i++) {
      const cell = document.createElement('div');
      cell.className = 'day-cell';

      if (i < 14) {
        // Past sober days
        cell.classList.add('sober');
        if (i >= 10) cell.classList.add('bright'); // brighter for recent days
        cell.textContent = '✓';
      } else if (i === 14) {
        // Today
        cell.classList.add('today');
        cell.textContent = '🔥';
      } else {
        // Future days
        cell.textContent = i;
      }

      cal.appendChild(cell);
    }
  }

  // ─── SCROLL REVEAL ───────────────────────────────────────
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(function (el) {
    revealObserver.observe(el);
  });

});