import MenuBar from './MenuBar'
import Drawer from './Drawer'
import SidebarIcons from './SidebarIcons'
import EditorTabs from './EditorTabs'
import PortfolioScreen from './PortfolioScreen'
import StatusBar from './StatusBar'

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
      <StatusBar />
    </div>
  )
}

