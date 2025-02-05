import React from "react";


const AnimatedText = () => {
  return (
    <div className="text-container">
      <h1 className="font-[Quantico] text-black font-bold mb-5 tracking-wider text-3xl sm:text-4xl">
        Rido Amali
      </h1>
      <svg
        className="stroke-animation"
        viewBox="0 0 500 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M 0,50 Q 125,10 250,50 T 500,50"
          fill="none"
          stroke="black"
          strokeWidth="4"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        />
      </svg>
    </div>
  );
};

export default AnimatedText;