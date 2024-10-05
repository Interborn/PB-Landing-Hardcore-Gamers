import React from "react";
import '../../styles/LightRays.scss';

// Function to generate a random value between min and max
const getRandomValue = (min: number, max: number) => Math.random() * (max - min) + min;

const LightRays = () => {
  // Array of 32 light rays, each with randomized styles
  const lightRayItems = Array.from({ length: 32 }, (_, i) => {
    // Randomized values for each ray
    const deg = getRandomValue(0, 1);
    const thickness = `${getRandomValue(8, 34)}px`;
    const length = `${getRandomValue(-50, 50)}px`;
    const duration = `${getRandomValue(1, 2.5)}s`;
    const delay = `${getRandomValue(2, 3)}s`;
    const rotate = `${getRandomValue(-4, 4)}deg`;

    // Inline styles using CSS variables for each light ray
    const style = {
      "--deg": deg,
      "--thickness": thickness,
      "--length": length,
      "--duration": duration,
      "--delay": delay,
      "--rotate": rotate,
    } as React.CSSProperties;

    return <li key={i} style={style}></li>;
  });

  return (
    <ul className="light-rays overflow-hidden">
      {lightRayItems}
    </ul>
  );
};

export default LightRays;