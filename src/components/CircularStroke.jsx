import React from "react";

const CircularStroke = () => {
  return (
    <div className="text-container">
      <h1 className="font-[Quantico] text-black font-bold mb-5 tracking-wider text-3xl sm:text-4xl">
        Rido Amali
      </h1>
      <svg
        className="stroke-animation"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* oval menyamping dengan path */}
        <ellipse
          cx="200"
          cy="100"
          rx="180"
          ry="90"
          fill="none"
          stroke="orange"
          strokeWidth="6"
          strokeDasharray="850" // Keliling lingkaran (2 * π * r)
          strokeDashoffset="850" // Mulai dari offset penuh
        />
      </svg>
    </div>
  );
};

export default CircularStroke;