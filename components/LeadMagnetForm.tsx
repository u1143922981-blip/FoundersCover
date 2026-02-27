import React, { useState } from 'react';
import { Button } from './UI';
import { Link } from 'react-router-dom';


export const LeadMagnetForm: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', url: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        if (!formData.email || !formData.url) {
            alert('Bitte E-Mail und URL ausfüllen.');
            return;
        }

        setIsSubmitting(true);

        const payload = {
            ...formData,
            timestamp: new Date().toISOString(),
            source: 'founderscover_website_lead_magnet',
            privacy_notice_version: 'privacy_notice_v1',
            userAgent: navigator.userAgent
        };

        try {
            // Send data to n8n Webhook
            const response = await fetch('https://n8n.srv1432644.hstgr.cloud/webhook/founderscover-risk-analysis', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert('Vielen Dank! Die Risikoanalyse kommt in den nächsten 2–3 Minuten in deinem Postfach an. Bitte prüfe auch deinen Spam-Ordner.');
                setFormData({ name: '', email: '', url: '' }); // Reset form
            } else {
                console.error('Webhook Error:', response.statusText);
                alert('Fehler bei der Übermittlung. Bitte versuche es später noch einmal.');
            }
        } catch (error) {
            console.error('Network/CORS Error:', error);
            // Fallback: If CORS blocks readability but request was sent, we might want to be optimistic or just warn.
            // For now, treat as error.
            alert('Netzwerkfehler. Bitte versuche es später noch einmal.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col gap-4 max-w-md w-full">
            <input
                type="text"
                placeholder="Name"
                className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-secondary/50 placeholder:text-slate-600 block w-full"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                disabled={isSubmitting}
            />
            <input
                type="email"
                placeholder="E-Mail"
                className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-secondary/50 placeholder:text-slate-600 block w-full"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                disabled={isSubmitting}
            />
            <input
                type="text"
                placeholder="URL deiner Startup-Website (oder Startup Name)"
                className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-secondary/50 placeholder:text-slate-600 block w-full"
                value={formData.url}
                onChange={e => setFormData({ ...formData, url: e.target.value })}
                disabled={isSubmitting}
            />

            <Button
                variant="secondary"
                className="w-full justify-center mt-2"
                onClick={handleSubmit}
                disabled={isSubmitting}
            >
                {isSubmitting ? 'WIRD GESENDET...' : 'ANALYSE PER E-MAIL SENDEN'}
            </Button>

            {/* Privacy Section -> 12-16px spacing */}
            <div className="pt-4 mt-2 space-y-4">
                {/* Divider Line */}
                <div className="h-px w-full bg-white/10 mb-3" />

                {/* A) Mandatory Notice */}
                <p className="text-[10px] text-primary/60 leading-relaxed">
                    <span className="font-bold text-primary/80">Datenschutzhinweis:</span> Wir verarbeiten deine Angaben (Name, E-Mail, Website-URL) ausschließlich, um dir die angefragte Risikoanalyse zu erstellen und zuzusenden. Speicherdauer: bis zu 6 Monate. Weitere Infos findest du in unserer <Link to="/datenschutz" className="underline hover:text-white transition-colors">Datenschutzerklärung</Link>. <Link to="/impressum" className="underline hover:text-white transition-colors ml-1">Impressum</Link>
                </p>
            </div>

            <div className="text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2">DAUER: WENIGE MINUTEN</div>
        </div>
    );
};
