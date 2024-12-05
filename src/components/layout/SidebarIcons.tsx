import { FileIcon, GitBranchIcon, SearchIcon, SettingsIcon, UserIcon } from 'lucide-react'

export default function SidebarIcons() {
  return (
    <div className="bg-[#333333] w-12 flex-shrink-0 flex flex-col items-center py-4">
      <IconButton icon={FileIcon} isActive={true} />
      <IconButton icon={SearchIcon} />
      <IconButton icon={GitBranchIcon} />
      <IconButton icon={UserIcon} />
      <div className="flex-grow" />
      <IconButton icon={SettingsIcon} />
    </div>
  )
}

function IconButton({ icon: Icon, isActive = false }: { icon: React.ElementType; isActive?: boolean }) {
  return (
    <button
      className={`w-12 h-12 flex items-center justify-center text-[#858585] hover:text-white ${
        isActive ? 'border-l-2 border-white text-white' : ''
      }`}
    >
      <Icon size={24} />
    </button>
  )
}

