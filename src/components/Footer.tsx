export default function Footer() {
  const platformLinks = ["Cari Worker", "Cari Task", "Cara Kerja", "Pricing"];
  const companyLinks = ["Tentang Kami", "Karir", "Blog", "Press"];
  const supportLinks = ["FAQ", "Kontak", "Bantuan", "Terms", "Privacy"];

  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#00D4FF] flex items-center justify-center">
                <span className="text-black font-bold text-sm">MW</span>
              </div>
              <span className="text-white font-semibold">Micro Worker</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Platform micro worker Indonesia yang mempertemukan employer dengan talenta terbaik.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-500 hover:text-[#00D4FF] transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-500 hover:text-[#00D4FF] transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-500 hover:text-[#00D4FF] transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm text-center">
            © 2026 Micro Worker Indonesia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
