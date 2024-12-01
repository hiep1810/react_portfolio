'use client'

import { useState } from 'react'

const menuItems = ['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help']

export default function MenuBar() {
  const [activeItem, setActiveItem] = useState<string | null>(null)

  return (
    <div className="bg-[#252526] text-[#CCCCCC] text-sm">
      <div className="flex items-center">
        <div className="flex-1 flex">
          {menuItems.map((item) => (
            <button
              key={item}
              className={`px-3 py-1 hover:bg-[#3C3C3C] ${
                activeItem === item ? 'bg-[#3C3C3C]' : ''
              }`}
              onMouseEnter={() => setActiveItem(item)}
              onMouseLeave={() => setActiveItem(null)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center pr-2">
          <div className="w-3 h-3 rounded-full bg-[#FF6057] mx-1"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] mx-1"></div>
          <div className="w-3 h-3 rounded-full bg-[#28CA41] mx-1"></div>
        </div>
      </div>
    </div>
  )
}

