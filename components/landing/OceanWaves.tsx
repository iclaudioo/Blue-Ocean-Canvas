/**
 * Three layered ocean-wave bands at the bottom of the hero.
 * Each SVG is twice the viewport width; the path tiles every 600 viewBox
 * units (the 1200-unit pattern duplicated across 2400), so the
 * translateX(-50%) drift loops seamlessly. Pure presentational.
 */

const WAVE_PATH =
  "M0,32 C100,12 200,12 300,32 C400,52 500,52 600,32 " +
  "C700,12 800,12 900,32 C1000,52 1100,52 1200,32 " +
  "C1300,12 1400,12 1500,32 C1600,52 1700,52 1800,32 " +
  "C1900,12 2000,12 2100,32 C2200,52 2300,52 2400,32 " +
  "L2400,64 L0,64 Z";

type Layer = {
  height: number;
  fill: string;
  opacity: number;
  animation: string;
};

const LAYERS: Layer[] = [
  {
    height: 64,
    fill: "var(--blue)",
    opacity: 0.06,
    animation: "wave-drift 24s linear infinite",
  },
  {
    height: 46,
    fill: "var(--green)",
    opacity: 0.05,
    animation: "wave-drift-r 32s linear infinite",
  },
  {
    height: 32,
    fill: "var(--blue-dim)",
    opacity: 0.09,
    animation: "wave-drift 17s linear infinite",
  },
];

export default function OceanWaves() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-16 overflow-hidden"
    >
      {LAYERS.map((layer, i) => (
        <svg
          key={i}
          className="wave-layer absolute bottom-0 left-0 block w-[200%] will-change-transform"
          style={{
            height: layer.height,
            fill: layer.fill,
            opacity: layer.opacity,
            animation: layer.animation,
          }}
          viewBox="0 0 2400 64"
          preserveAspectRatio="none"
        >
          <path d={WAVE_PATH} />
        </svg>
      ))}
    </div>
  );
}
