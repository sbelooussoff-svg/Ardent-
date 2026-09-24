class ArdentComparisonSlider extends HTMLElement {
  constructor() {
    super();
    this.animated = false;
    this.animating = false;
    this.timers = [];
    this.sync = this.sync.bind(this);
    this.start = this.start.bind(this);
  }

  connectedCallback() {
    this.wrapper = this.querySelector('[ref="mediaWrapper"]');
    this.slider = this.querySelector('[ref="slider"]');
    if (!this.wrapper || !this.slider) return;

    this.sync();
    this.slider.addEventListener('input', this.sync);
    this.slider.addEventListener('change', this.sync);

    // Storefront-safe: do not depend on Shopify's editor-only component system.
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          this.observer.disconnect();
          this.timers.push(setTimeout(this.start, 250));
        }
      }, { threshold: 0.01 });
      this.observer.observe(this);
    } else {
      this.timers.push(setTimeout(this.start, 400));
    }
  }

  disconnectedCallback() {
    this.observer?.disconnect();
    this.slider?.removeEventListener('input', this.sync);
    this.slider?.removeEventListener('change', this.sync);
    this.timers.forEach(clearTimeout);
  }

  sync() {
    if (!this.wrapper || !this.slider || this.animating) return;
    const min = Number(this.slider.min || 0);
    const max = Number(this.slider.max || 100);
    const value = Number(this.slider.value || 50);
    const percent = Math.max(0, Math.min(100, ((value - min) / ((max - min) || 100)) * 100));
    this.wrapper.style.setProperty('--compare', String(Math.round(percent)));
  }

  start() {
    if (this.animated || !this.wrapper || !this.slider) return;
    this.animated = true;
    this.animating = true;
    this.wrapper.style.setProperty('--transition-duration', '0.55s');

    const move = (value, delay) => {
      this.timers.push(setTimeout(() => {
        if (this.wrapper) this.wrapper.style.setProperty('--compare', String(value));
      }, delay));
    };

    move(40, 80);
    move(60, 630);
    move(50, 1180);

    this.timers.push(setTimeout(() => {
      if (!this.wrapper || !this.slider) return;
      this.slider.value = '50';
      this.animating = false;
      this.wrapper.style.setProperty('--transition-duration', '0s');
      this.sync();
    }, 1800));
  }
}

if (!customElements.get('comparison-slider-component')) {
  customElements.define('comparison-slider-component', ArdentComparisonSlider);
}
