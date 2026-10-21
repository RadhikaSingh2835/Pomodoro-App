import React from "react";

const ModeSelector = ({selectedMode , setSelectedMode}) => {
  return (
    <div className="w-full my-1 flex justify-evenly gap-2 sm:gap-4">
      <button 
      onClick={() => setSelectedMode("focus")}
      className={` ${selectedMode==="focus" ? "bg-[#E7EDE3]" : "bg-white" } hover:bg-[#E7EDE3] hover:font-semibold cursor-pointer border border-[#E7E5E4] font-sans text-[#423B35] rounded-xl w-full py-3`}>
        Focus
      </button>
      <button 
      onClick={() => setSelectedMode("short")}
      className={` ${selectedMode==="short" ? "bg-[#E7EDE3]" : "bg-white" } hover:bg-[#E7EDE3] hover:font-semibold cursor-pointer border border-[#E7E5E4] font-sans text-[#423B35] rounded-xl w-full py-3`}>
        Short break
      </button>
      <button
      onClick={() => setSelectedMode("long")}
      className={` ${selectedMode==="long" ? "bg-[#E7EDE3]" : "bg-white" } hover:bg-[#E7EDE3] hover:font-semibold cursor-pointer border border-[#E7E5E4] font-sans text-[#423B35] rounded-xl w-full py-3`}>
        Long break
      </button>
    </div>
  );
};

export default ModeSelector;
