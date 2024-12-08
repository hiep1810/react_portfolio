'use client'

import { ChevronDownIcon, ChevronRightIcon, MoreHorizontal } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { initialTabs } from '@/data/tabs'
import { useTab } from '@/context/TabContext'
import { useIconButtons } from '@/context/IconButtonContext'
import iconColor from '@/data/icon_color'
import { useRouter, usePathname } from 'next/navigation'

export default function Drawer() {
  const { activeTab, setActiveTab } = useTab()
  const { activeIconButton } = useIconButtons()
  const [isOpen, setIsOpen] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  return (
    <div className={`bg-[#252526] text-[#CCCCCC] flex-shrink-0 overflow-y-auto border-r border-[#3C3C3C] 
      ${!activeIconButton ? 'w-0' : 'w-64'} transition-[width] duration-300`}>
      <div className={`flex items-center justify-between mb-2`}>
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
          ${activeTab === tab.id && pathname === `${tab.link}` ? 'bg-[#3C3C3C] text-white' : 'hover:bg-[#2D2D2D]'
              }`}
              onClick={() => {
                setActiveTab(tab.id)
                router.push(`${window.location.origin}/${tab.link}`)
              }}
            >
              <Image src={tab.icon}
                alt={tab.name}
                width={16}
                height={16}
                className={`mr-1 ${iconColor[tab.icon]}`}
              />
              <span>{tab.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



