import { Bell, ChevronDown, GitBranch } from 'lucide-react';

export default function StatusBar() {
  return (
    <div className="flex h-6 justify-between border-t border-[#3C3C3C] bg-muted text-xs pr-2 text-muted-foreground bg-[#1E2022] text-[#C0C0C0]">
      <div className="flex h-full items-center space-x-3">
        <div className='flex h-full items-center bg-blue-500 px-3'>
          <GitBranch className="h-3.5 w-3.5" />
        </div>
        <div className="flex h-full items-center space-x-1">
          <GitBranch className="h-3.5 w-3.5" />
          <span>main</span>
        </div>
        <div className="flex h-full items-center space-x-2">
          <span>○ 0 Δ 0</span>
          <span>⚡ 0</span>
        </div>
      </div>
      <div className="flex h-full items-center space-x-3">
        <div className="flex h-full items-center">
          <button className="px-2 hover:bg-[#3C3C3C] h-full">
            Ln 1, Col 1
          </button>
          <button className="px-2 hover:bg-[#3C3C3C] h-full">
            Spaces: 2
          </button>
          <button className="px-2 hover:bg-[#3C3C3C] h-full">
            UTF-8
          </button>
          <button className="flex items-center hover:bg-[#3C3C3C] h-full">
            CRLF <ChevronDown className="ml-0.5 h-3 w-3" />
          </button>
          <button className="px-2 hover:bg-[#3C3C3C] h-full">
            { } JSON with Comments
          </button>
          <button className="px-2 hover:bg-[#3C3C3C] h-full">
            Cursor Tab
          </button>
        </div>
        <div className="flex items-center px-2 hover:bg-[#3C3C3C] h-full">
          <Bell className="h-3.5 w-3.5" />
        </div>
      </div>
    </div>
  );
} 