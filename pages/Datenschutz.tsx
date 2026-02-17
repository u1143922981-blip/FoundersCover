import React from 'react';
import { Header, Footer } from '../components/Layout';

const Datenschutz: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-slate-400 font-sans">
            <Header />

            <main className="pt-32 pb-24 px-6">
                <div className="max-w-3xl mx-auto space-y-12">

                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Datenschutz</h1>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">Verantwortlicher</h2>
                        <p>
                            <strong>FoundersCover (Online-Service)</strong><br />
                            Verantwortlicher: VersiFlex Versicherungsmakler GmbH<br />
                            Waldbleeke 50, 45481 Mülheim an der Ruhr<br />
                            Tel. 0208 8802667 0, E-Mail: <a href="mailto:Info@VersiFlex.de" className="text-primary hover:underline">Info@VersiFlex.de</a>
                        </p>
                        <p>
                            Kontakt für Datenschutzanfragen: Geschäftsführung (siehe oben)
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">Aufsichtsbehörde</h2>
                        <p>
                            Landesbeauftragte für Datenschutz und Informationsfreiheit NRW<br />
                            Kavalleriestraße 2-4, 40213 Düsseldorf
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">Verarbeitung auf der Website</h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-white font-semibold mb-1">Server-Logs</h3>
                                <p className="text-sm">Erhebung von Browser-Typ, OS, Referrer, Hostname, Uhrzeit, IP-Adresse. Zweck: Sicherstellung des technischen Betriebs und Sicherheit. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>
                            </div>

                            <div>
                                <h3 className="text-white font-semibold mb-1">Cookies</h3>
                                <p className="text-sm">Wir setzen technisch notwendige Cookies ein. Zusätzlich nutzen wir (nach Einwilligung) Google Analytics und Google Tag Manager zur Reichweitenmessung.</p>
                            </div>

                            <div>
                                <h3 className="text-white font-semibold mb-1">Google Analytics & Tag Manager</h3>
                                <p className="text-sm">
                                    Soweit Sie eingewilligt haben, nutzen wir Google Analytics 4 (Google Ireland Limited). Zweck: Analyse der Websitenutzung. Rechtsgrundlage: Art. 6 Abs. 1 a) DSGVO. Datenübermittlung in die USA ist möglich (EU-Standardvertragsklauseln). Speicherdauer: 2 bzw. 14 Monate. Sie können die Einwilligung jederzeit über unser Cookie-Banner widerrufen.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-white font-semibold mb-1">Formulare & Anfragen</h3>
                                <p className="text-sm">Die in Formularen (z.B. Risiko-Check) eingegebenen Daten werden zur Bearbeitung Ihrer Anfrage, Angebotserstellung oder im Schadensfall verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung/Vorvertraglich) und/oder Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</p>
                            </div>

                            <div>
                                <h3 className="text-white font-semibold mb-1">Datenübermittlung</h3>
                                <p className="text-sm">Eine Übermittlung an Versicherer, Maklerdienstleister oder öffentliche Stellen erfolgt nur, soweit dies zur Vertragserfüllung erforderlich oder gesetzlich vorgeschrieben ist.</p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">Empfänger / Kategorien</h2>
                        <p>
                            Versicherer, Maklerdienstleister, technische Dienstleister (Hostinganbieter, IT-Support); Behörden bei gesetzlicher Pflicht.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">Speicherdauer</h2>
                        <p>
                            Daten werden gelöscht, sobald der Zweck der Speicherung entfällt, sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen. In diesem Fall wird die Verarbeitung eingeschränkt.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">Betroffenenrechte</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Recht auf Auskunft</li>
                            <li>Recht auf Berichtigung</li>
                            <li>Recht auf Löschung</li>
                            <li>Recht auf Einschränkung der Verarbeitung</li>
                            <li>Recht auf Widerspruch</li>
                            <li>Recht auf Datenübertragbarkeit</li>
                            <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">Drittinhalte</h2>
                        <p>
                            Diese Website kann Inhalte Dritter (z.B. Google Maps, externe Fonts) einbinden. Dabei wird Ihre IP-Adresse an den jeweiligen Anbieter übermittelt. Bitte beachten Sie deren Datenschutzhinweise.
                        </p>
                    </section>

                    <section className="pt-8 border-t border-white/10">
                        <a href="https://www.versiflex.de/datenschutz" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium transition-colors">
                            &rarr; Zur vollständigen Datenschutz-Richtlinie der VersiFlex Versicherungsmakler GmbH
                        </a>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Datenschutz;
