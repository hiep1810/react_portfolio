import MenuBar from './layout/MenuBar';
import StatusBar from './layout/StatusBar';
import Drawer from './layout/Drawer';
import SidebarIcons from './layout/SidebarIcons';
import EditorTabs from './layout/EditorTabs';

export default function ContactScreen() {
  return (
    <div className="h-screen flex flex-col">
      <MenuBar />
      <div className="flex-1 flex">
        <SidebarIcons />
        <Drawer />
        <main className="flex-1 bg-[#1e1e1e] overflow-auto">
          <EditorTabs />
          {/* Projects content here */}
        </main>
      </div>
      <StatusBar />
    </div>
  );
} 