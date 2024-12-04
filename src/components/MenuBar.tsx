'use client'

import { menuItems } from '@/data/tabs'

export default function MenuBar() {  
  return (
    <div className="bg-[#252526] text-[#CCCCCC] text-sm border-b border-[#3C3C3C]">
      <div className="flex items-center">
        {/* Menu items */}
        <div className="flex-1 flex">
          {menuItems.map((item) => (
            <button
              key={item}
              className={`px-3 py-1 hover:bg-[#3C3C3C]`}
            >
              {item}
            </button>
          ))}
        </div>
        {/* Title */}
        <div className="flex-1 flex items-center">
            <span>Tuan Hiep Truong - Portfolio</span>
        </div>
        {/* Status bar */}
        <div className="flex items-center pr-2">
          <div className="w-3 h-3 rounded-full bg-[#FF6057] mx-1"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] mx-1"></div>
          <div className="w-3 h-3 rounded-full bg-[#28CA41] mx-1"></div>
        </div>
      </div>
    </div>
  )
}

