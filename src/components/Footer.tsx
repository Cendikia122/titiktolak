import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="kontak" className="py-16" style={{ backgroundColor: "hsl(199, 60%, 78%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                TT
              </div>
              <span className="text-lg font-semibold text-foreground">TitikTolak</span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Platform pendidikan modern yang membantu kamu mencapai potensi terbaikmu melalui
              pembelajaran berkualitas tinggi.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-foreground transition">Home</a></li>
              <li><a href="#produk" className="hover:text-foreground transition">Produk</a></li>
              <li><a href="#tentang" className="hover:text-foreground transition">Tentang</a></li>
              <li><a href="#kontak" className="hover:text-foreground transition">Kontak</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="flex items-center gap-2">
                <Mail size={14} /> hello@titiktolak.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} /> +62 812 3456 7890
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-foreground/70 hover:text-foreground transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 pt-6 text-center text-sm text-foreground/50">
          © 2025 TitikTolak. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
