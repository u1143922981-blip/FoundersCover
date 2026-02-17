import React, { useState, useEffect } from 'react';
import { injectTracking } from '../utils/analytics';

const CookieBanner: React.FC = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('fc_cookie_consent');
        if (consent === 'true') {
            injectTracking();
        } else if (consent === null) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('fc_cookie_consent', 'true');
        injectTracking();
        setShowBanner(false);
    };

    const handleDecline = () => {
        localStorage.setItem('fc_cookie_consent', 'false');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-surface/90 backdrop-blur-md border-t border-white/10 animate-fade-in-up">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-300">
                    <p>
                        <strong>Wir nutzen Cookies & Tracking</strong> (Google Analytics / GTM), um unsere Webseite für Startups zu verbessern.
                        Rechtsgrundlage: Art. 6 Abs. 1 a) DSGVO. Sind Sie damit einverstanden?
                    </p>
                    <a href="/datenschutz" className="text-primary hover:underline text-xs mt-1 inline-block">
                        Datenschutzerklärung lesen
                    </a>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={handleDecline}
                        className="px-4 py-2 text-sm text-slate-400 hover:text-white border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                    >
                        Ablehnen
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-4 py-2 text-sm font-bold bg-primary text-black rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(18,201,255,0.3)]"
                    >
                        Alles Akzeptieren
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
