import MenuBar from './layout/MenuBar'
import Drawer from './layout/Drawer'
import SidebarIcons from './layout/SidebarIcons'
import EditorTabs from './layout/EditorTabs'
import StatusBar from './layout/StatusBar'
import Image from 'next/image'

export default function HomeScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1E2022]">
      <MenuBar />
      <div className="flex-1 flex">
        <SidebarIcons />
        <Drawer />
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="scrollbar-vscode">
            <EditorTabs />
          </div>
          <div className="flex-1 flex items-center justify-between p-8 relative overflow-hidden">
      <Image
        src="/images/bg-image.jpg"
        alt="Background Image"
        fill
        className="object-cover opacity-10"
        priority
      />
      <div className="z-10">
        <h1 className="text-6xl md:text-7xl font-mono text-white mb-4">
          Hiep Truong
        </h1>
        <p className="text-xl md:text-2xl font-mono mb-8">
          <span className="text-[#4A9FFF]">COBOL</span>{" "}
          <span className="text-[#FF6B6B]">Full Stack</span>{" "}
          <span className="text-white">Developer</span>
          <span className="text-[#FF6B6B] animate-blink">|</span>
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-[#FF6B6B] text-white rounded hover:bg-[#ff5252] transition-colors">
            View Work
          </button>
          <button className="px-6 py-3 border border-[#FF6B6B] text-[#FF6B6B] rounded hover:bg-[#FF6B6B] hover:text-white transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </div>        </div>
      </div>
      <StatusBar />
    </div>
  )
}

