function updateBeamPosition() {
  const beams = document.querySelectorAll(".experience-beam");
  const dots = document.querySelectorAll(".experience-dot");

  beams.forEach((beam, index) => {
    const rect = beam.getBoundingClientRect();
    const scrollProgress =
      (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
    const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);

    const gradient = `linear-gradient(
      to bottom,
      rgba(76, 29, 149, ${clampedProgress}) 20%,
      rgba(76, 29, 149, ${clampedProgress}) 70%,
      rgba(76, 29, 149, ${clampedProgress}) 90%,
      rgba(76, 29, 149, ${clampedProgress}) 100%
    )`;

    beam.style.backgroundImage = gradient;

    if (dots[index]) {
      dots[index].style.backgroundColor =
        clampedProgress > 0.25 ? "rgb(76, 29, 149)" : "white";
      dots[index].style.transform = `scale(${1 + clampedProgress * 0.5})`;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateBeamPosition();
  window.addEventListener("scroll", updateBeamPosition);
  window.addEventListener("resize", updateBeamPosition);
});
