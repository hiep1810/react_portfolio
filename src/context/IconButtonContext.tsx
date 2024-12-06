'use client'

import { createContext, useContext, ReactNode, useState } from 'react'

interface IconButtonContextType {
    activeIconButton: string | null
    setActiveIconButton: (id: string | null) => void
}

const IconButtonContext = createContext<IconButtonContextType | undefined>(undefined)

export function IconButtonProvider({ children }: { children: ReactNode }) {
    const [activeIconButton, setActiveIconButton] = useState<string | null>(null)

    return (
        <IconButtonContext.Provider value={{ activeIconButton, setActiveIconButton }}>
            {children}
        </IconButtonContext.Provider>
    )
}

export function useIconButtons() {
    const context = useContext(IconButtonContext)
    if (context === undefined) {
        throw new Error('useIconButtons must be used within an IconButtonProvider')
    }
    return context
} 