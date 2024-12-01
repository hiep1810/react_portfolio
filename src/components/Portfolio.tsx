import MenuBar from './MenuBar'
import Drawer from './Drawer'
import SidebarIcons from './SidebarIcons'
import EditorTabs from './EditorTabs'
import PorfilioScreen from './PortfolioScreen'

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1E2022]">
      <MenuBar />
      <div className="flex-1 flex">
        <SidebarIcons />
        <Drawer />
        {/* Main Section */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Editor Tabs with custom scrollbar */}
          <div className="scrollbar-vscode">
            <EditorTabs />
          </div>
          {/* Screen */}
          <PorfilioScreen />
        </div>
      </div>
    </div>
  )
}

