document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.carousel-wrapper');
  const track   = document.querySelector('.carousel-track');
  const items   = Array.from(track.children);
  let speed     = 0.5;      // px per frame
  let paused    = false;
  let pos       = 0;        // posizione corrente

  // 1) Clona le immagini finché non superano 2 volte la larghezza del wrapper
  const fillClones = () => {
    const wrapperW = wrapper.offsetWidth;
    let totalW = track.scrollWidth;
    let i = 0;
    while (totalW < wrapperW * 2) {
      const clone = items[i % items.length].cloneNode(true);
      track.appendChild(clone);
      totalW = track.scrollWidth;
      i++;
    }
  };
  fillClones();

  // 2) Animazione con requestAnimationFrame
  function animate() {
    if (!paused) {
      pos -= speed;
      // se abbiamo scollato un clone interamente, resettiamo pos
      if (Math.abs(pos) >= items[0].offsetWidth + 12) {
        // rimuovi il primo figlio e appendilo alla fine
        pos += items[0].offsetWidth + 12;
        track.appendChild(track.firstElementChild);
      }
      track.style.transform = `translateX(${pos}px)`;
    }
    requestAnimationFrame(animate);
  }
  animate();

  // 3) Rallenta / riprendi al passaggio del mouse
  wrapper.addEventListener('mouseenter', () => { paused = true; });
  wrapper.addEventListener('mouseleave', () => { paused = false; });
});