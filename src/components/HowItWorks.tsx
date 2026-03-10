import { FileText, Users, BarChart3, CheckCircle, Search, Send, Play, Wallet } from 'lucide-react';

export default function HowItWorks() {
  const employerSteps = [
    { title: "Post Campaign", description: "Buat task dengan deskripsi jelas", icon: FileText },
    { title: "Pilih Worker", description: "Review profil dan pilih kandidat", icon: Users },
    { title: "Track Progress", description: "Pantau pekerjaan secara real-time", icon: BarChart3 },
    { title: "Bayar & Selesai", description: "Release payment setelah approve", icon: CheckCircle }
  ];

  const workerSteps = [
    { title: "Browse Task", description: "Temukan campaign yang cocok", icon: Search },
    { title: "Apply & Accept", description: "Submit proposal, tunggu approval", icon: Send },
    { title: "Kerjakan Task", description: "Selesaikan sesuai deadline", icon: Play },
    { title: "Dapat Pembayaran", description: "Withdraw ke rekening Anda", icon: Wallet }
  ];

  return (
    <section id="alur" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 212, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Accent Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D4FF]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cara Kerjanya
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proses mudah dan transparan untuk employer dan worker
          </p>
        </div>

        {/* Two Flow Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Employer Flow Card */}
          <div className="card-hover bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#00D4FF] flex items-center justify-center">
                <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="16" height="16" x="4" y="4" rx="2" ry="2"/>
                  <path d="M9 9h7"/>
                  <path d="M9 13h7"/>
                  <path d="M9 17h4"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Employer Flow</h3>
                <p className="text-gray-500 text-sm">Langkah mudah untuk employer</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {employerSteps.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D4FF] transition-colors">
                      <IconComponent className="w-5 h-5 text-[#00D4FF] group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Worker Flow Card */}
          <div className="card-hover bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#00D4FF] flex items-center justify-center">
                <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Worker Flow</h3>
                <p className="text-gray-500 text-sm">Langkah mudah untuk worker</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {workerSteps.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D4FF] transition-colors">
                      <IconComponent className="w-5 h-5 text-[#00D4FF] group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
