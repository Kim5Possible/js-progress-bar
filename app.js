document.addEventListener("DOMContentLoaded", () => {
  const progressBlock = document.getElementById("progressBlock");
  const valueInput = document.getElementById("valueInput");
  const animateToggle = document.getElementById("animateToggle");
  const hideToggle = document.getElementById("hideToggle");

  const progress = new Progress(progressBlock);

  valueInput.addEventListener("input", (e) => {
    const value = parseInt(e.target.value) || 0;
    progress.setValue(value);
  });

  animateToggle.addEventListener("change", (e) => {
    progress.setAnimated(e.target.checked);
  });

  hideToggle.addEventListener("change", (e) => {
    progress.setHidden(e.target.checked);
  });
});
