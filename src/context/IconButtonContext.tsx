'use client'

import { iconButtons } from '@/data/icon_buttons'
import { createContext, useContext, ReactNode, useState } from 'react'

interface IconButtonContextType {
  activeIconButton: string
  setActiveIconButton: (id: string) => void
}

const IconButtonContext = createContext<IconButtonContextType | undefined>(undefined)

export function IconButtonProvider({ children }: { children: ReactNode }) {
  const [activeIconButton, setActiveIconButton] = useState<string>(iconButtons[0].id)

  return (
    <IconButtonContext.Provider 
      value={{ 
        activeIconButton, 
        setActiveIconButton,
      }}
    >
      {children}
    </IconButtonContext.Provider>
  )
}

export function useIconButtons() {
  const context = useContext(IconButtonContext)
  if (!context) {
    throw new Error('useIconButtons must be used within an IconButtonProvider')
  }
  return context
} 