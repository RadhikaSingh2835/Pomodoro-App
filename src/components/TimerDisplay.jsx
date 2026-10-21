import React from "react";

const TimerDisplay = ({ selectedMode , remainingTime }) => {

  const minutes = Math.floor(remainingTime/60);
  const seconds = remainingTime%60;

   const session = {
    focus: "FOCUS SESSION",
    short: "SHORT BREAK",
    long: "LONG BREAK",
  };

  return (
    <div className="w-full flex flex-col items-center gap-4 py-2">
      <p className="text-[#6F8068] font-sans text-base sm:text-lg md:text-xl">
        {session[selectedMode]}
      </p>
      <span className="font-sans text-[#423B35] bg-white text-6xl sm:text-7xl md:text-8xl rounded-xl py-2">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2,"0")}
      </span>
    </div>
  );
};

export default TimerDisplay;
