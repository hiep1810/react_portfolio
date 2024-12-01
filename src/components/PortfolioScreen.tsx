export default function PorfilioSection() {
  return (
    <div className="flex-1 flex items-center justify-between p-8 relative overflow-hidden">
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
      
      {/* Decorative circles */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 mr-8">
        <div className="relative w-[400px] h-[400px]">
          <div className="absolute right-0 top-0 w-32 h-32 rounded-full bg-[#E2FF6F]" />
          <div className="absolute right-16 top-16 w-24 h-24 rounded-full bg-[#FF6B6B]" />
          <div className="absolute right-0 top-32 w-64 h-64 rounded-full border-[32px] border-[#FF6B6B]" />
        </div>
      </div>
    </div>
  )
} 