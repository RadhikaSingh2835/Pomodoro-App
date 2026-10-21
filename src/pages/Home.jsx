import React, { useEffect, useState } from "react";
import ModeSelector from "../components/ModeSelector";
import TimerDisplay from "../components/TimerDisplay";
import TimerControls from "../components/TimerControls";
import SessionProgress from "../components/SessionProgress";
import usePomodoroTimer from "../hooks/usePomodoroTimer";

const Home = () => {

   const durations = {
    focus: 25*60,
    short: 5*60,
    long: 15*60,
  };

const [selectedMode , setSelectedMode] = useState("focus");

const {remainingTime , isRunning , setIsRunning , resetTimer} = usePomodoroTimer();

useEffect(() => {
  resetTimer(durations[selectedMode]);
} , [selectedMode])

  return (
    <div className="flex flex-1 flex-col justify-center items-center bg-[#F5F0E8] p-3 sm:p-5">
      <div className="flex flex-col items-center gap-2">
        <p className="text-xl sm:text-xl md:text-2xl font-sans text-[#6F8068]">
          a little time for yourself
        </p>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#423B35]">
          Let's focus
        </h3>
        <p className="text-base sm:text-lg md:text-xl font-sans text-[#6F8068]">
          One thing at a time
        </p>
      </div>
      
      <div className="bg-white w-full flex flex-col gap-3 p-3 sm:p-5 mt-6 rounded-2xl items-center">
        
      <ModeSelector selectedMode={selectedMode} setSelectedMode={setSelectedMode}/>
      <TimerDisplay selectedMode={selectedMode} remainingTime={remainingTime}/>
      <TimerControls isRunning={isRunning} setIsRunning={setIsRunning} />
      <SessionProgress/>
        
        <p className="font-sans text-base mt-3 text-[#6F8068]">
          A little progress every day
        </p>
        <h4 className="font-display text-[#423B35] font-semibold text-xl sm:text-2xl md:text-3xl">
          Your time, your pace ♡
        </h4>
      </div>
    </div>
  );
};

export default Home;
