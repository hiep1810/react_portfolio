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
                  <img src="/images/flash_lingo.png" alt="Portfolio preview" className="w-full h-48 object-cover rounded-lg" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-400 overflow-hidden text-ellipsis">
                    <a href="https://portfolio-hiep1810.vercel.app/" target="_blank" rel="noopener noreferrer">
                      FlashLingo
                    </a>
                  </h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Flash Lingo is a flashcard app that helps you learn new words.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className={`flex items-center text-white border border-blue-500 rounded-md px-2 py-1`}>
                    Next.js
                  </span>
                  <span className={`flex items-center text-white border border-green-500 rounded-md px-2 py-1`}>
                    Tailwind CSS
                  </span>
                </div>
              </div>

              <div className="bg-[#1A1A1A] p-6 rounded-lg text-left">
                <div className="mb-4">
                  <img src="/images/japlify.png" alt="Japlify preview" className="w-full h-48 object-cover rounded-lg" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-400 overflow-hidden text-ellipsis">
                    <a href="https://japlify.vercel.app/" target="_blank" rel="noopener noreferrer">
                      Japlify - Japanese Text Converter
                    </a>
                  </h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  This tool helps you convert text between different Japanese writing formats, including full-width/half-width characters, romaji, hiragana, and katakana.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className={`flex items-center text-white border border-blue-500 rounded-md px-2 py-1`}>
                    Next.js
                  </span>
                  <span className={`flex items-center text-white border border-green-500 rounded-md px-2 py-1`}>
                    Tailwind CSS
                  </span>
                </div>
              </div>

              <div className="bg-[#1A1A1A] p-6 rounded-lg text-left">
                <div className="mb-4">
                  <img src="/images/wheel_of_fortune.png" alt="Wheel of Fortune preview" className="w-full h-48 object-cover rounded-lg" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-400 overflow-hidden text-ellipsis">
                    <a href="https://next-wheeloffortune.vercel.app/" target="_blank" rel="noopener noreferrer">
                      Wheel of Fortune
                    </a>
                  </h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Wheel of Fortune is a game for fun.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className={`flex items-center text-white border border-blue-500 rounded-md px-2 py-1`}>
                    Next.js
                  </span>
                  <span className={`flex items-center text-white border border-green-500 rounded-md px-2 py-1`}>
                    Tailwind CSS
                  </span>
                </div>
              </div>

              <div className="bg-[#1A1A1A] p-6 rounded-lg text-left">
                <div className="mb-4">
                  <img src="/images/pomofocus-clone.png" alt="Pomofocus clone preview" className="w-full h-48 object-cover rounded-lg" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-400 overflow-hidden text-ellipsis">
                    <a href="https://pomodoro-clone-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">
                      Pomofocus Clone
                    </a>
                  </h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Pomofocus Clone is a clone of the Pomofocus app.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">

                  <span className={`flex items-center text-white border border-blue-500 rounded-md px-2 py-1`}>
                    Next.js
                  </span>
                  <span className={`flex items-center text-white border border-green-500 rounded-md px-2 py-1`}>
                    Tailwind CSS
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