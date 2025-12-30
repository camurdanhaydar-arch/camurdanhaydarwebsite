import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkimizda" },
  { href: "/urunler", label: "Urunlerimiz" },
  { href: "/iletisim", label: "Iletisim" },
];

const productLinks = [
  { href: "/urunler?category=bireysel", label: "Bireysel Klimalar" },
  { href: "/urunler?category=ticari", label: "Ticari Klimalar" },
  { href: "/urunler?category=multisplit", label: "Multi Split Sistemler" },
  { href: "/urunler?category=hava-temizleyici", label: "Hava Temizleyicileri" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/logo.svg"
                alt="Sefa Iklimlendirme"
                width={180}
                height={45}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Mersin ve cevresinde klima satis, montaj, bakim ve onarim hizmetleri sunan guvenilir Daikin yetkili bayiiniz.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-brand-cyan rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Hizli Linkler</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Urunlerimiz</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Iletisim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-cyan flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Mezitli Mah. GMK Bulvari No:123<br />Mezitli / Mersin</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-cyan flex-shrink-0" />
                <a href="tel:+903241234567" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">(0324) 123 45 67</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-cyan flex-shrink-0" />
                <a href="mailto:info@sefaiklimlendirme.com" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">info@sefaiklimlendirme.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-brand-cyan flex-shrink-0" />
                <span className="text-gray-400 text-sm">Pzt - Cmt: 09:00 - 19:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Sefa Iklimlendirme. Tum haklari saklidir.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/gizlilik-politikasi" className="text-gray-500 hover:text-brand-cyan transition-colors text-sm">Gizlilik Politikasi</Link>
              <Link href="/kullanim-kosullari" className="text-gray-500 hover:text-brand-cyan transition-colors text-sm">Kullanim Kosullari</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
