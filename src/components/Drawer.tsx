'use client'

import { FolderIcon, FileIcon, ChevronDownIcon } from 'lucide-react'

const files = [
  { name: 'home.jsx', type: 'file', icon: 'jsx' },
  { name: 'about.html', type: 'file', icon: 'html' },
  { name: 'contact.css', type: 'file', icon: 'css' },
  { name: 'projects.js', type: 'file', icon: 'js' },
  { name: 'github.md', type: 'file', icon: 'md' },
]

export default function Drawer() {
  return (
    <div className="bg-[#252526] text-[#CCCCCC] w-64 flex-shrink-0 overflow-y-auto">
      <div className="p-2">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold">EXPLORER</span>
          <ChevronDownIcon size={16} />
        </div>
        <div className="mb-2">
          <div className="flex items-center">
            <ChevronDownIcon size={16} className="mr-1" />
            <FolderIcon size={16} className="mr-1 text-[#dcb67a]" />
            <span>PORTFOLIO</span>
          </div>
        </div>
        {files.map((file) => (
          <div key={file.name} className="flex items-center py-1">
            <FileIcon size={16} className={`mr-1 ${getIconColor(file.icon)}`} />
            <span>{file.name}</span>
          </div>
        ))}
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

