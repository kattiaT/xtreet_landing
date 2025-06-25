import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 25 },
          color: { value: ["#04F7E6", "#F70CF0", "#0E52F6"] },
          shape: { type: "line" },
          stroke: {
            width: 1,
            color: "#ffffff"
          },
          opacity: {
            value: 0.2,
            random: true
          },
          size: {
            value: { min: 60, max: 100 },
            random: true
          },
          move: {
            enable: true,
            speed: 2,
            direction: "top-right",
            straight: false,
            outModes: { default: "out" },
            trail: {
              enable: false
            }
          }
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: false,
              mode: "repulse"
            },
            resize: true
          }
        },
        detectRetina: true
      }}
    />
  );
}
