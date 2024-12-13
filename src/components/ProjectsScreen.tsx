import MenuBar from './layout/MenuBar';
import StatusBar from './layout/StatusBar';
import Drawer from './layout/Drawer';
import SidebarIcons from './layout/SidebarIcons';
import EditorTabs from './layout/EditorTabs';

export default function ProjectsScreen() {
  return (
    <div className="h-screen flex flex-col">
      <MenuBar />
      <div className="flex-1 flex overflow-hidden">
        <SidebarIcons />
        <Drawer />
        <main className="flex-1 bg-[#1e1e1e]">
          <EditorTabs />
          {/* Projects content here */}
          <div 
          className="p-10 bg-[#1E2022] text-center h-full overflow-auto scrollbar-vscode-thick text-white">
            <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-[#1A1A1A] p-6 rounded-lg text-left">
                <div className="mb-4">
                  <img src="/images/bg-image.jpg" alt="Portfolio preview" className="w-full h-48 object-cover rounded-lg" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-400 overflow-hidden text-ellipsis">
                    <a href="https://portfolio-hiep1810.vercel.app/" target="_blank" rel="noopener noreferrer">
                      Portfolio
                    </a>
                  </h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Một trang web portfolio được xây dựng bằng Next.js và Tailwind CSS
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                    Next.js
                  </span>
                </div>
              </div>

              <div className="bg-[#1A1A1A] p-6 rounded-lg text-left">
                <div className="mb-4">
                  <img src="/images/bg-image.jpg" alt="Chat App preview" className="w-full h-48 object-cover rounded-lg" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-400 overflow-hidden text-ellipsis">
                    <a href="https://chat-app-hiep1810.vercel.app/" target="_blank" rel="noopener noreferrer">
                      Chat App
                    </a>
                  </h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Ứng dụng chat thời gian thực sử dụng Next.js, Firebase và Tailwind CSS
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                    Next.js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <StatusBar />
    </div>
  );
} 