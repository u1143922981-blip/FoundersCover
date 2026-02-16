import React from 'react';
import { Header, Footer } from '../components/Layout';

const Impressum: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-slate-400 font-sans">
            <Header />

            <main className="pt-32 pb-24 px-6">
                <div className="max-w-3xl mx-auto space-y-12">

                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Impressum</h1>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">Anbieter (FoundersCover)</h2>
                        <p>
                            FoundersCover (Online-Service) – betrieben durch:<br />
                            <strong className="text-white">VersiFlex Versicherungsmakler GmbH</strong>
                        </p>
                        <p className="text-sm italic opacity-80">
                            Hinweis: „FoundersCover ist ein Online-Service der VersiFlex Versicherungsmakler GmbH.“
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">Angaben gem. §5 TMG</h2>
                        <p>
                            VersiFlex Versicherungsmakler GmbH<br />
                            Waldbleeke 50<br />
                            45481 Mülheim an der Ruhr
                        </p>
                        <p>
                            Geschäftsführer: Marcel Askerc<br />
                            Telefon: 0208 8802667 0<br />
                            E-Mail: <a href="mailto:Info@VersiFlex.de" className="text-primary hover:underline">Info@VersiFlex.de</a>
                        </p>
                        <p>Amtsgericht Duisburg, HRB 36993</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">Vermittlerstatus / Erlaubnis</h2>
                        <p>
                            Versicherungsmakler mit Erlaubnis nach §34d Abs.1 GewO (DE)<br />
                            Vermittlerregister-Nr.: D-OE1L-0E6J1-25
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">Aufsichtsbehörde</h2>
                        <p>
                            IHK für Essen, Mülheim an der Ruhr, Oberhausen zu Essen<br />
                            Am Waldthausenpark 2, 45127 Essen<br />
                            Tel. 0201 1892-0
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">Registerprüfung</h2>
                        <p>
                            DIHK | Deutsche Industrie- und Handelskammer<br />
                            Breite Straße 29, 10178 Berlin<br />
                            Tel. 0180-600-585-0
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">Streitbeilegung</h2>
                        <p>
                            Wir sind zur Teilnahme am Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nach §36 VSBG / §17 Abs.4 VersVermV bereit.
                        </p>
                        <p>
                            <strong>Schlichtungsstellen:</strong><br />
                            Versicherungsombudsmann e.V. (Postfach 08 06 32, 10006 Berlin)<br />
                            Ombudsmann Private Kranken- und Pflegeversicherung (Postfach 06 02 22, 10052 Berlin)
                        </p>
                        <p>
                            EU-OS-Plattform: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr</a>
                        </p>
                    </section>

                    <section className="pt-8 border-t border-white/10">
                        <a href="https://www.versiflex.de/impressum" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium transition-colors">
                            &rarr; Zum vollständigen Impressum der VersiFlex Versicherungsmakler GmbH
                        </a>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Impressum;
