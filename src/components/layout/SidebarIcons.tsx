'use client'

import { SettingsIcon } from 'lucide-react'
import { useIconButtons } from '@/context/IconButtonContext'
import { iconButtons } from '@/data/icon_buttons'

export default function SidebarIcons() {
  const { activeIconButton, setActiveIconButton } = useIconButtons()

  const handleIconClick = (id: string) => {
    if (activeIconButton === id) {
      setActiveIconButton('')
    } else {
      setActiveIconButton(id)
    }
    console.log(activeIconButton)
  }

  return (
    <div className="bg-[#333333] w-12 flex-shrink-0 flex flex-col items-center py-4 ">
      {iconButtons.map((icon) => (
        <IconButton 
          key={icon.id}
          icon={icon.icon} 
          isActive={activeIconButton === icon.id}
          onClick={() => handleIconClick(icon.id)}
        />
      ))}
      <div className="flex-grow" />
      <IconButton icon={SettingsIcon} onClick={() => handleIconClick('settings')} />
    </div>
  )
}

function IconButton({ icon: Icon, isActive = false, onClick }: { icon: React.ElementType; isActive?: boolean, onClick?: () => void }) {
  return (
    <button
      className={`w-12 h-12 flex items-center justify-center text-[#858585] hover:text-white ${
        isActive ? 'border-l-2 border-white text-white' : ''
      }`}
      onClick={onClick}
    >
      <Icon size={24} />
    </button>
  )
}

