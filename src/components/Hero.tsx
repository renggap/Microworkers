export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Abstract 3D Shapes */}
      <div className="abstract-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Connect. <span className="text-[#00D4FF]">Work.</span> Grow.
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Platform micro worker Indonesia yang mempertemukan employer dengan talenta terbaik.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#join" 
            className="btn-shiny px-8 py-4 bg-[#00D4FF] text-black font-semibold rounded-full text-lg hover:bg-[#00B8E6] transition-all glow-blue glow-blue-hover"
          >
            Mulai sebagai Worker
          </a>
          <a 
            href="#join" 
            className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full text-lg hover:bg-white/10 transition-all"
          >
            Cari Worker Sekarang
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#00D4FF]">1000+</div>
            <div className="text-gray-500 text-sm mt-1">Worker Aktif</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#00D4FF]">500+</div>
            <div className="text-gray-500 text-sm mt-1">Campaign</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#00D4FF]">98%</div>
            <div className="text-gray-500 text-sm mt-1">Kepuasan</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
