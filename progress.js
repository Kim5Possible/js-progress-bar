class Progress {
  constructor(element) {
    this.element = element;
    this.progressBar = element.querySelector(".progress-bar");
    this.value = 0;
    this.isAnimated = false;
    this.isHidden = false;

    this.init();
  }

  init() {
    const radius = this.progressBar.getAttribute("r");
    this.circumference = 2 * Math.PI * radius;
    this.progressBar.style.strokeDasharray = `${this.circumference}`;
  }

  setValue(value) {
    this.value = Math.min(100, Math.max(0, value));
    const offset = this.circumference - (this.value / 100) * this.circumference;
    this.progressBar.style.strokeDashoffset = offset;
  }

  setAnimated(isAnimated) {
    this.isAnimated = isAnimated;
    this.element.classList.toggle("animated", isAnimated);
  }

  setHidden(isHidden) {
    this.isHidden = isHidden;
    this.element.classList.toggle("hidden", isHidden);
  }
}
