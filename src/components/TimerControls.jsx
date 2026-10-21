import React from 'react'
import { Play, RotateCcw } from "lucide-react";


const TimerControls = ({isRunning , setIsRunning}) => {
  return (
    <div className="flex items-center gap-3">
        <button
        onClick={() => setIsRunning(prev => !prev)}
        className="flex gap-2 bg-[#6F8068] text-white px-6 py-3 rounded-xl cursor-pointer hover:bg-[#5F7059]">
          <Play size={20} />
         {isRunning ? "Pause" : "Start"}
        </button>
        <button 
        onClick={() => setIsRunning( )}
        className="bg-white text-[#423B35] border border-[#E7E5E4] rounded-xl px-4 py-3 cursor-pointer">
          <RotateCcw size={20} />
        </button>
      </div>
  )
}

export default TimerControls
