import { Zap, Wallet, Shield, Briefcase, Banknote, TrendingUp } from 'lucide-react';

export default function Benefits() {
  const employerBenefits = [
    {
      icon: Zap,
      title: "Akses Talent Cepat",
      description: "Jalankan campaign Anda dengan cepat - worker siap mengerjakan dalam hitungan jam"
    },
    {
      icon: Wallet,
      title: "Biaya Transparan",
      description: "Tanpa hidden fee, pembayaran per task"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rating & review sistem untuk kualitas kerja"
    }
  ];

  const workerBenefits = [
    {
      icon: Briefcase,
      title: "Fleksibilitas Penuh",
      description: "Kerja kapan saja, di mana saja"
    },
    {
      icon: Banknote,
      title: "Pembayaran Cepat",
      description: "Withdraw langsung ke rekening Anda"
    },
    {
      icon: TrendingUp,
      title: "Kesempatan Berkembang",
      description: "Bangun reputasi, tingkatkan skill"
    }
  ];

  return (
    <section id="manfaat" className="py-24 gradient-cta relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mengapa Micro Worker Indonesia?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Solusi terbaik untuk employer dan worker dalam satu platform
          </p>
        </div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Employer Benefits Card */}
          <div className="card-hover bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#00D4FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="16" height="16" x="4" y="4" rx="2" ry="2"/>
                  <path d="M9 9h7"/>
                  <path d="M9 13h7"/>
                  <path d="M9 17h4"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Untuk Employer</h3>
                <p className="text-gray-500 text-sm">Butuh talent untuk bisnis Anda?</p>
              </div>
            </div>
            <div className="space-y-5">
              {employerBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Worker Benefits Card */}
          <div className="card-hover bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#00D4FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Untuk Worker</h3>
                <p className="text-gray-500 text-sm">Cari penghasilan tambahan?</p>
              </div>
            </div>
            <div className="space-y-5">
              {workerBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
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
