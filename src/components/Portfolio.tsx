import MenuBar from './MenuBar'
import Drawer from './Drawer'
import SidebarIcons from './SidebarIcons'
import EditorTabs from './EditorTabs'
import PortfolioScreen from './PortfolioScreen'

export default function Portfolio() {
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
          <PortfolioScreen />
        </div>
      </div>
      {/* Status Bar */}
      <div className="bg-[#007ACC] text-white px-4 py-1 flex justify-between items-center text-xs fixed bottom-0 w-full h-[22px]">
        <div className="flex">
          <span className="flex items-center gap-1 mx-2">Ln 1, Col 1</span>
          <span className="flex items-center gap-1 mx-2">Spaces: 2</span>
          <span className="flex items-center gap-1 mx-2">UTF-8</span>
        </div>
        <div className="flex">
          <span className="flex items-center gap-1 mx-2">JavaScript</span>
          <span className="flex items-center gap-1 mx-2">🔥 Ready</span>
        </div>
      </div>
    </div>
  )
}

