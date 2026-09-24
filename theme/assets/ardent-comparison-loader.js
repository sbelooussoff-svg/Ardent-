(function () {
  'use strict';

  var initialized = new WeakSet();
  var animated = new WeakSet();

  function sync(root) {
    var wrapper = root.querySelector('[ref="mediaWrapper"]');
    var slider = root.querySelector('[ref="slider"]');
    if (!wrapper || !slider) return;

    var min = Number(slider.min || 0);
    var max = Number(slider.max || 100);
    var value = Number(slider.value || 50);
    var percent = ((value - min) / ((max - min) || 100)) * 100;
    percent = Math.max(0, Math.min(100, percent));
    wrapper.style.setProperty('--compare', String(Math.round(percent)));
  }

  function animate(root) {
    if (!root || initialized.has(root)) return;

    var wrapper = root.querySelector('[ref="mediaWrapper"]');
    var slider = root.querySelector('[ref="slider"]');
    if (!wrapper || !slider) return;

    initialized.add(root);
    sync(root);

    slider.addEventListener('input', function () {
      if (!animated.has(root)) sync(root);
    });
    slider.addEventListener('change', function () {
      if (!animated.has(root)) sync(root);
    });

    function run() {
      if (animated.has(root)) return;
      animated.add(root);

      /* Animate the actual visual property, not only the CSS custom property. */
      wrapper.style.setProperty('transition', 'clip-path 550ms cubic-bezier(0.22, 1, 0.36, 1)', 'important');
      wrapper.style.setProperty('--transition-duration', '0.55s');

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          wrapper.style.setProperty('--compare', '40');
          setTimeout(function () { wrapper.style.setProperty('--compare', '60'); }, 600);
          setTimeout(function () { wrapper.style.setProperty('--compare', '50'); }, 1200);
          setTimeout(function () {
            slider.value = '50';
            wrapper.style.setProperty('--transition-duration', '0s');
            wrapper.style.removeProperty('transition');
            sync(root);
          }, 1850);
        });
      });
    }

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        if (entries.some(function (entry) { return entry.isIntersecting; })) {
          observer.disconnect();
          setTimeout(run, 200);
        }
      }, { threshold: 0.01 });
      observer.observe(root);
    } else {
      setTimeout(run, 500);
    }
  }

  function init() {
    document.querySelectorAll('comparison-slider-component').forEach(animate);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  window.addEventListener('load', init, { once: true });
  new MutationObserver(init).observe(document.documentElement, { childList: true, subtree: true });
})();
