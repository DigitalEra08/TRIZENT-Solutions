import { Cpu, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => handleNav('home')} className="flex items-center gap-3 mb-4 group">
              <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-md shadow-cyan-500/30">
                <Cpu size={20} className="text-white" />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-base tracking-widest uppercase">TRIZENT</span>
                <span className="block text-cyan-400 text-[10px] tracking-[0.3em] uppercase font-medium">Solutions</span>
              </div>
            </button>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted partner for premium computer accessories and smart gadgets in Karachi.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', page: 'home' },
                { label: 'Products', page: 'products' },
                { label: 'Terms & Conditions', page: 'terms' },
                { label: 'Contact Us', page: 'contact' },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNav(link.page)}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Categories</h3>
            <ul className="space-y-3">
              {[
                'Keyboards & Mice',
                'Monitors & Displays',
                'Cables & Adapters',
                'Smart Watches',
                'Wireless Earbuds',
                'Smart Home Devices',
              ].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => handleNav('products')}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  Mezzanine-1, Sb-39, Sector X-4,<br />Gulshan e Maymar, Karachi
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-cyan-400 flex-shrink-0" />
                <a href="tel:03208750927" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                  0320-8750927
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-cyan-400 flex-shrink-0" />
                <a href="mailto:trizentsolutions@gmail.com" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                  trizentsolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} TRIZENT Solutions. All rights reserved. Owner: Moazzam
          </p>
          <div className="flex gap-6">
            <button onClick={() => handleNav('terms')} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => handleNav('contact')} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
