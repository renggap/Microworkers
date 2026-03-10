export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#00D4FF] flex items-center justify-center">
              <span className="text-black font-bold text-sm">MW</span>
            </div>
            <span className="text-white font-semibold text-lg hidden sm:block">
              Micro Worker
            </span>
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <a href="#manfaat" className="text-gray-400 hover:text-white transition-colors text-sm">
              Tentang
            </a>
            <a href="#alur" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cara Kerja
            </a>
            <a href="#join" className="px-4 py-2 bg-[#00D4FF] text-black font-medium rounded-full text-sm hover:bg-[#00B8E6] transition-colors">
              Join
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
