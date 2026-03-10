import { Building2, User, Check } from 'lucide-react';

export default function Join() {
  return (
    <section id="join" className="py-24 gradient-cta relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Siap Memulai?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Bergabung sekarang dan mulai perjalanan Anda bersama kami
          </p>
        </div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Employer Card */}
          <div className="card-hover bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#00D4FF]/20 flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-[#00D4FF]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Untuk Employer</h3>
            <p className="text-gray-400 mb-6">
              Butuh talent untuk campaign Anda?
            </p>
            <a 
              href="#" 
              className="btn-shiny inline-flex items-center justify-center w-full py-4 bg-white text-black font-semibold rounded-full text-lg hover:bg-gray-100 transition-all gap-2"
            >
              Daftar sebagai Employer
            </a>
            <div className="mt-6 space-y-3 text-left">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-5 h-5 rounded-full bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-[#00D4FF]" />
                </div>
                Akses 1000+ worker
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-5 h-5 rounded-full bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-[#00D4FF]" />
                </div>
                Mulai dalam 5 menit
              </div>
            </div>
          </div>

          {/* Worker Card */}
          <div className="card-hover bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#00D4FF]/20 flex items-center justify-center mx-auto mb-6">
              <User className="w-8 h-8 text-[#00D4FF]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Untuk Worker</h3>
            <p className="text-gray-400 mb-6">
              Mencari pekerjaan fleksibel?
            </p>
            <a 
              href="#" 
              className="btn-shiny inline-flex items-center justify-center w-full py-4 bg-[#00D4FF] text-black font-semibold rounded-full text-lg hover:bg-[#00B8E6] transition-all glow-blue gap-2"
            >
              Daftar sebagai Worker
            </a>
            <div className="mt-6 space-y-3 text-left">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-5 h-5 rounded-full bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-[#00D4FF]" />
                </div>
                Kerja dari mana saja
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-5 h-5 rounded-full bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-[#00D4FF]" />
                </div>
                Pembayaran cepat
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
