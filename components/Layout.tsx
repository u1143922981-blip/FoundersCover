
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Leistungen', path: '/leistungen' },
    { name: 'Phasen', path: '/phasen' },
    { name: 'Wissen', path: '/wissen' },
    { name: 'Über uns', path: '/ueber-uns' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Impressum', path: '/impressum' },
    { name: 'Datenschutz', path: '/datenschutz' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-background/60 backdrop-blur-2xl transition-all duration-300">
      <div className="max-w-content mx-auto px-6 h-20 flex items-center justify-between gap-12">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary border border-primary/20 group-hover:scale-105 transition-transform">
            <Shield size={20} />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">FoundersCover</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-slate-400'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button aria-label="Menu Toggle" className="lg:hidden text-white relative z-50 cursor-pointer p-2 -mr-2 hover:bg-white/10 rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full h-[calc(100vh-5rem)] bg-background border-b border-white/10 p-8 flex flex-col gap-6 fade-in-up overflow-y-auto pb-32">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://outlook.office.com/book/Lassunssprechen@versiflex.de/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-background text-center py-4 rounded-xl font-bold"
          >
            Risiko-Check buchen
          </a>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-white/5 py-24 px-6">
      <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <Shield size={20} className="text-primary" />
            <span className="font-display font-bold text-lg text-white">FoundersCover</span>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Smarte Versicherungen für die nächste Generation von Entrepreneuren. Audit-ready. Founder-friendly.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-6">Lösungen</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><Link to="/leistungen#betriebshaftpflicht" className="hover:text-primary transition-colors">Betriebshaftpflichtversicherung</Link></li>
            <li><Link to="/leistungen#vermoegensschaden" className="hover:text-primary transition-colors">Vermögensschadenhaftpflichtversicherung</Link></li>
            <li><Link to="/leistungen#do" className="hover:text-primary transition-colors">D&O-Versicherung</Link></li>
            <li><Link to="/leistungen#cyber" className="hover:text-primary transition-colors">Cyberversicherung</Link></li>
            <li><Link to="/leistungen#vorsorge" className="hover:text-primary transition-colors">Betriebliche Altersvorsorge</Link></li>
            <li><Link to="/leistungen#vorsorge" className="hover:text-primary transition-colors">Betriebliche Krankenversicherung</Link></li>
          </ul>
        </div>

        <div className="md:pl-28">
          <h4 className="font-display font-semibold text-white mb-6">Ressourcen</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><Link to="/leistungen" className="hover:text-primary transition-colors">Leistungen</Link></li>
            <li><Link to="/phasen" className="hover:text-primary transition-colors">Phasen</Link></li>
            <li><Link to="/wissen" className="hover:text-primary transition-colors">Wissen</Link></li>
            <li><Link to="/ueber-uns" className="hover:text-primary transition-colors">Über uns</Link></li>
            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4 border-t border-white/5 pt-12 mt-12">
          <h4 className="font-display font-semibold text-white mb-6 text-center">Wir sind in allen Startup-Hubs Deutschlands für euch da</h4>
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {['Berlin', 'München', 'Hamburg', 'Köln', 'Frankfurt am Main', 'Stuttgart', 'Düsseldorf', 'Leipzig', 'Dresden', 'Hannover', 'Nürnberg', 'Mannheim', 'Karlsruhe', 'Freiburg', 'Heidelberg', 'Darmstadt', 'Aachen', 'Bonn', 'Münster', 'Bielefeld', 'Dortmund', 'Essen', 'Bochum', 'Bremen', 'Kiel', 'Lübeck', 'Rostock', 'Potsdam', 'Mainz', 'Wiesbaden', 'Saarbrücken', 'Regensburg', 'Augsburg', 'Ulm', 'Würzburg'].map((city) => (
              <span key={city} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold text-slate-500 tracking-wider hover:bg-white/10 hover:text-primary transition-colors cursor-default border border-white/5">
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-content mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-[10px] uppercase tracking-widest font-bold">
        <span>© {new Date().getFullYear()} FoundersCover | Experten für Startup Versicherung</span>
        <div className="flex gap-8">
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
};

export const MobileStickyCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] z-40">
      <a
        href="https://outlook.office.com/book/Lassunssprechen@versiflex.de/"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-primary text-background text-center py-4 rounded-full font-bold shadow-[0_8px_32px_rgba(18,201,255,0.4)]"
      >
        Risiko-Check buchen
      </a>
    </div>
  );
};
