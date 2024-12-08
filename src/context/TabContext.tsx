'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { initialTabs } from '@/data/tabs'
import { usePathname } from 'next/navigation'

interface TabContextType {
  activeTab: string | null
  setActiveTab: (id: string | null) => void
}

const TabContext = createContext<TabContextType | undefined>(undefined)

export function TabProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState<string | null>(initialTabs.find((tab) => tab.link === pathname)?.id || null)

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  )
}

export function useTab() {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error('useTab must be used within an TabProvider')
  }
  return context
} 