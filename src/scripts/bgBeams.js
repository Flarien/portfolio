const cn = (...classes) => classes.filter(Boolean).join(" ");

function createBeams(container) {
  const beams = [
    { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2 },
    { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4 },
    {
      initialX: 100,
      translateX: 100,
      duration: 7,
      repeatDelay: 7,
      className: "h-6",
    },
    { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
    {
      initialX: 800,
      translateX: 800,
      duration: 11,
      repeatDelay: 2,
      className: "h-20",
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 4,
      repeatDelay: 2,
      className: "h-12",
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: "h-6",
    },
  ];

  beams.forEach((beam, index) => {
    const beamElement = document.createElement("div");
    beamElement.className = cn(
      "absolute left-0 top-20 m-auto w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent",
      beam.className || "h-14"
    );
    beamElement.style.cssText = `
      transform: translateX(${beam.initialX}px) translateY(-200px);
      animation: beam-animation-${index} ${beam.duration}s linear ${
      beam.delay || 0
    }s infinite;
    `;

    const keyframes = `
      @keyframes beam-animation-${index} {
        to {
          transform: translateX(${beam.translateX}px) translateY(1800px);
        }
      }
    `;
    const styleElement = document.createElement("style");
    styleElement.textContent = keyframes;
    document.head.appendChild(styleElement);

    container.appendChild(beamElement);
  });
}

function initBackgroundBeams() {
  const container = document.getElementById("beams-container");
  if (!container) return;

  container.className = cn(
    container.className,
    "h-screen bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative flex items-center w-full justify-center overflow-hidden"
  );

  createBeams(container);
}

document.addEventListener("DOMContentLoaded", initBackgroundBeams);
