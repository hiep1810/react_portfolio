import MenuBar from './layout/MenuBar';
import StatusBar from './layout/StatusBar';
import Drawer from './layout/Drawer';
import SidebarIcons from './layout/SidebarIcons';
import EditorTabs from './layout/EditorTabs';

export default function AboutScreen() {
  return (
    <div className="h-screen flex flex-col">
      <MenuBar />
      <div className="flex-1 flex overflow-hidden">
        <SidebarIcons />
        <Drawer />
        <main className="flex-1 bg-[#1e1e1e]">
          <EditorTabs />
          <section className="p-10 bg-[#1E2022] text-center h-full overflow-auto scrollbar-vscode-thick">
            <h1 className="text-4xl font-bold text-white mb-4">
              🚀 COBOL Developer | Mainframe Expert 🖥️
            </h1>
            <p className="text-lg text-gray-300">
              Greetings! I&apos;m [Your Name], an experienced COBOL Developer with a deep understanding of legacy systems and a passion for maintaining and enhancing enterprise-level applications.
            </p>

            <div className="mt-8 text-left max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-[#4A9FFF] mb-3">💼 Professional Experience</h2>
              <p className="text-base text-gray-300 mb-6">
                Over the past [X] years, I&apos;ve successfully navigated the world of mainframe programming, specializing in COBOL development, CICS, and DB2. My expertise includes creating and maintaining high-performance applications that drive critical business operations in industries such as finance, insurance, and healthcare.
              </p>

              <h2 className="text-2xl font-semibold text-[#4A9FFF] mb-3">🔧 Backend Expertise</h2>
              <p className="text-base text-gray-300 mb-6">
                On the backend, I excel at optimizing legacy COBOL applications, ensuring their seamless operation, and implementing modern integrations while preserving system integrity. My work involves enhancing existing systems to meet current needs without compromising the reliability and scalability that legacy systems are known for.
              </p>

              <h2 className="text-2xl font-semibold text-[#4A9FFF] mb-3">⚙️ Solution Design</h2>
              <p className="text-base text-gray-300 mb-6">
                I specialize in analyzing business requirements, designing solutions, and developing COBOL programs that interface with modern technologies and databases. I take pride in improving efficiency, minimizing downtime, and ensuring robust data handling.
              </p>

              <h2 className="text-2xl font-semibold text-[#4A9FFF] mb-3">🌐 Modern Integration & Performance</h2>
              <p className="text-base text-gray-300 mb-6">
                My commitment to preserving the value of legacy systems while introducing modern practices ensures that I deliver solutions that are both reliable and future-proof. I&apos;m particularly interested in integrating COBOL applications with cloud-based solutions and enhancing performance through automation.
              </p>

              <h2 className="text-2xl font-semibold text-[#4A9FFF] mb-3">🚀 Let&apos;s Collaborate!</h2>
              <p className="text-base text-gray-300 mb-6">
                Let&apos;s collaborate on optimizing your mainframe applications and ensuring they continue to meet business needs. Whether it&apos;s maintaining legacy systems, modernizing architecture, or solving complex performance challenges, I&apos;m ready to bring my expertise to your projects.
              </p>

              <h2 className="text-2xl font-semibold text-[#4A9FFF] mb-3">📬 Get in Touch</h2>
              <p className="text-base text-gray-300 mb-6">
                Feel free to reach out for discussions on COBOL programming, legacy system modernization, or anything related to enterprise technology. Looking forward to connecting with fellow professionals who value the power of COBOL in today&apos;s digital world!
              </p>
            </div>
          </section>
        </main>
      </div>
      <StatusBar />
    </div>
  );
}