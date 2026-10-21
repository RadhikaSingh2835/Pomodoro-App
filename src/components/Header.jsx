import React from "react";
import { Cloud, Settings } from "lucide-react";
const Header = () => {
  return (
    <div className="flex justify-between p-3 sm:p-4 bg-[#E7EDE3]">
      <div>
        <h1 className="flex items-center gap-2 font-display text-[#6F8068] text-2xl sm:text-4xl md:text-5xl font-semibold">
          little focus
          <Cloud className="size-5 sm:size-6 md:size-8 text-[#6F8068]" strokeWidth={2} />
        </h1>
      </div>
      <button className="flex items-center gap-2 text-[#6F8068]">Settings <Settings size={20} strokeWidth={1.7} /></button>
    </div>
  );
};

export default Header;
