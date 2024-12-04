'use client'

import { ChevronDownIcon, ChevronRightIcon, MoreHorizontal } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { initialTabs } from '@/data/tabs'
import { useTab } from '@/context/TabContext'

export default function Drawer() {
  const [activeTab, setActiveTab] = useState<string | null>(null)
  return (
    <div className="bg-[#252526] text-[#CCCCCC] w-64 flex-shrink-0 overflow-y-auto border-r border-[#3C3C3C]">
      <div className="flex items-center justify-between mb-2">
        <span className="p-2">EXPLORER</span>
        <MoreHorizontal size={16} className="mr-2" />
      </div>
      <div className="mb-2">
        <div className={`flex flex-row items-center cursor-pointer`}
          onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <ChevronDownIcon size={16} className="mr-1" /> : <ChevronRightIcon size={16} className="mr-1" />}
          <span className="font-bold">PORTFOLIO</span>
        </div>

        <div className={`flex flex-col overflow-hidden transition-[max-height]
          ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          {initialTabs.map((tab) => (
            <div key={tab.id} className={`flex items-center cursor-pointer py-1 pl-2 
          ${activeTab === tab.id ? 'bg-[#3C3C3C] text-white' : 'hover:bg-[#2D2D2D]'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Image src={tab.icon}
                alt={tab.name}
                width={16}
                height={16}
                className={`mr-1 ${getIconColor(tab.icon)}`}
              />
              <span>{tab.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function getIconColor(icon: string) {
  switch (icon) {
    case 'jsx':
      return 'text-[#61dafb]'
    case 'html':
      return 'text-[#e34c26]'
    case 'css':
      return 'text-[#563d7c]'
    case 'js':
      return 'text-[#f1e05a]'
    case 'md':
      return 'text-[#083fa1]'
    default:
      return 'text-[#CCCCCC]'
  }
}

