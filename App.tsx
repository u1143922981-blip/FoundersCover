import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Termin from './pages/Termin';
import Leistungen from './pages/Leistungen';
import Phasen from './pages/Phasen';
import Wissen from './pages/Wissen';
import UeberUns from './pages/UeberUns';
import FAQ from './pages/FAQ';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import ArticleDetail from './pages/ArticleDetail';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';

const SEOManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const metaDescriptions: Record<string, string> = {
      '/': 'Wir vergleichen über 100 Versicherer für dein Startup. D&O, Cyberversicherung & Haftpflicht für jede Phase – von Gründung bis Exit. Der Partner für Startup-Versicherungen.',
      '/termin': 'Buche deinen 20-minütigen Risiko-Check bei FoundersCover. Professionelle Beratung für Startups.',
      '/leistungen': 'Unsere Module: D&O, IT-Haftpflicht und Cyber Shield. Maßgeschneiderte Versicherungen für SaaS & E-Commerce.',
      '/phasen': 'Versicherungsschutz für jede Phase: Von Gründung bis Series B. Proaktives Risikomanagement für Startups.',
      '/wissen': 'Der Knowledge Hub für Startup-Risiken. Leitfäden, Glossar und VC-Anforderungen im Überblick.',
      '/ueber-uns': 'Lerne FoundersCover kennen. Warum wir Versicherungen für das Startup-Ökosystem neu denken.',
      '/faq': 'Häufige Fragen zu D&O, Cyber und Haftpflicht für Startups. Klare Antworten ohne Jargon.',
      '/impressum': 'Impressum | FoundersCover - Ein Service der VersiFlex Versicherungsmakler GmbH.',
      '/datenschutz': 'Datenschutzerklärung | FoundersCover - Ihre Daten sind bei uns sicher.',
    };

    const titles: Record<string, string> = {
      '/': 'FoundersCover | Der Startup-Versicherungsmakler für Deutschland',
      '/termin': 'Risiko-Check buchen | FoundersCover',
      '/leistungen': 'Versicherungs-Module für Startups | FoundersCover',
      '/phasen': 'Startup-Phasen & Schutz | FoundersCover',
      '/wissen': 'Knowledge Hub | Startup Risikomanagement',
      '/ueber-uns': 'Über uns | Das Team hinter FoundersCover',
      '/faq': 'FAQ & Hilfe | Startup Versicherungen verstehen',
      '/impressum': 'Impressum | FoundersCover',
      '/datenschutz': 'Datenschutz | FoundersCover',
    };

    const path = location.pathname;
    document.title = titles[path] || 'FoundersCover | Startup Versicherung';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', metaDescriptions[path] || metaDescriptions['/']);
    }

    // Set canonical link for SEO
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    const baseUrl = 'https://founderscover.de';
    // Remove trailing slash if present unless it's the home page
    const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
    canonicalLink.setAttribute('href', `${baseUrl}${cleanPath}`);
  }, [location]);

  return null;
};

// Placeholder pages to maintain navigation
const Placeholder: React.FC<{ title: string }> = ({ title }) => (
  <div className="min-h-screen flex flex-col bg-black">
    <div className="p-8 text-center mt-32">
      <h1 className="text-4xl font-display font-bold text-primary mb-4">{title}</h1>
      <p className="text-slate-400 mb-8 italic">Diese Seite ist aktuell noch in Arbeit – der Risiko-Check ist jedoch bereits live!</p>
      <a href="/termin" className="bg-primary text-black px-8 py-3 rounded-full font-bold">Direkt zum Risiko-Check</a>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <SEOManager />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termin" element={<Termin />} />
        <Route path="/leistungen" element={<Leistungen />} />
        <Route path="/phasen" element={<Phasen />} />


        <Route path="/wissen" element={<Wissen />} />
        <Route path="/wissen/:slug" element={<ArticleDetail />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/scorecard" element={<Termin />} /> {/* Re-use booking for demo */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
