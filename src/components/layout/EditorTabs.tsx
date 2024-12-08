'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { initialTabs } from '@/data/tabs'
import { useTab } from '@/context/TabContext'
import { usePathname, useRouter } from 'next/navigation'


export default function EditorTabs() {
  const { activeTab, setActiveTab } = useTab()
  const [tabs, setTabs] = useState(initialTabs)
  const pathname = usePathname()
  const router = useRouter()

  const closeTab = (id: string) => {
    setTabs(tabs.filter(tab => tab.id !== id))
    if (activeTab === id) {
      setActiveTab(tabs[0].id)
    }
  }

  return (
    <div className="scrollbar-vscode">
      <div className="flex bg-[#252526] text-[#CCCCCC] text-sm overflow-x-auto border-b border-[#3C3C3C]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center px-3 py-2 border-r border-[#3C3C3C] min-w-[120px] group ${activeTab === tab.id && pathname === `${tab.link}` ? 'bg-[#1E1E1E] text-white border-t-2 border-t-[#4A9FFF]' : 'hover:bg-[#2D2D2D]'
              }`}
            onClick={() => {
              setActiveTab(tab.id)
              router.push(`${window.location.origin}/${tab.link}`)
            }}
          >
            <Image
              src={tab.icon}
              alt={tab.name}
              width={16}
              height={16}
              className="mr-2"
            />
            <span className="truncate">{tab.name}</span>
            <X
              size={14}
              className="ml-auto opacity-0 group-hover:opacity-100 hover:bg-[#3C3C3C] hover:rounded-full ml-2"
              onClick={(e) => {
                e.stopPropagation()
                closeTab(tab.id)
              }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

