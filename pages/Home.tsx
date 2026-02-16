
import React from 'react';
import { Header, Footer, MobileStickyCTA } from '../components/Layout';
import { Button, SectionTitle, FeatureCard, AnswerFirstSection } from '../components/UI';
import { LeadMagnetForm } from '../components/LeadMagnetForm';
import { Zap, Shield, Briefcase, FileText, BarChart3, LayoutDashboard, Target, CheckCircle2, TrendingUp, Users, Mail, Clock } from 'lucide-react';
import { BENEFITS, SEGMENTS, MODULES, FAQS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pb-32 overflow-hidden px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/10 blur-[130px] rounded-full opacity-40"></div>
        </div>

        <div className="max-w-content mx-auto relative">
          {/* Left Floating Card: Qualität × Tempo */}
          <div className="hidden xl:block absolute left-[-80px] top-44 glass p-5 rounded-3xl w-64 shadow-2xl fade-in-up border-primary/20 text-left" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest text-primary">Präzision</span>
              <Zap size={14} className="text-primary" />
            </div>
            <div className="text-xl font-display font-bold text-white mb-4">Qualität × Tempo</div>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-[11px] text-slate-300 font-medium">
                <div className="w-1 h-1 rounded-full bg-primary"></div> Inhouse-Prozesse optimiert
              </li>
              <li className="flex items-center gap-2 text-[11px] text-slate-300 font-medium">
                <div className="w-1 h-1 rounded-full bg-primary"></div> Zeit für indiv. Betreuung
              </li>
              <li className="flex items-center gap-2 text-[11px] text-slate-300 font-medium">
                <div className="w-1 h-1 rounded-full bg-primary"></div> Schnelle Umsetzung
              </li>
            </ul>
            <div className="pt-3 border-t border-white/5 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              Startup-Tempo, ohne Abkürzungen
            </div>
          </div>

          {/* Right Floating Card: Dein Output (Greifbarer Nutzen) */}
          <div className="hidden xl:block absolute right-[-80px] top-44 glass p-6 rounded-[2.5rem] w-64 shadow-2xl fade-in-up border-secondary/20" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Klarheit</span>
              </div>
              <CheckCircle2 size={14} className="text-secondary" />
            </div>
            <div className="text-lg font-display font-bold text-white mb-4">Dein Output in 20 Min</div>
            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={12} className="text-secondary" />
                <span className="text-[11px] text-white font-medium">Must-have (jetzt)</span>
              </div>
              <div className="flex items-center gap-2 opacity-80">
                <CheckCircle2 size={12} className="text-secondary" />
                <span className="text-[11px] text-white font-medium">Nice-to-have (nächster Schritt)</span>
              </div>
              <div className="flex items-center gap-2 opacity-60">
                <CheckCircle2 size={12} className="text-secondary" />
                <span className="text-[11px] text-white font-medium">Later (erst bei Triggern)</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              Klarer Fokus. Umsetzung optional.
            </div>
          </div>

          <div className="inline-flex items-center gap-3 px-5 py-2 glass rounded-full text-[11px] font-bold text-primary mb-12 tracking-[0.25em] uppercase border-primary/20 fade-in-up">
            <Shield size={14} fill="currentColor" /> Versicherungen für Startups
          </div>

          <h1 className="font-display font-bold text-4xl md:text-7xl text-white mb-8 leading-[1.05] tracking-tighter max-w-4xl mx-auto fade-in-up">
            Der Partner für <span className="text-primary italic">Startup Versicherungen.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed fade-in-up">
            Als unabhängiger Versicherungsmakler vergleichen wir über 100 Versicherungsgesellschaften
            und finden die passende Lösung für dein Startup – inklusive laufender Betreuung.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-start fade-in-up">
            <div className="flex flex-col items-center gap-2">
              <Button to="https://outlook.office.com/book/Lassunssprechen@versiflex.de/" variant="secondary" className="h-16 px-12 flex items-center justify-center">Erstgespräch buchen (20 Min)</Button>
              <div className="flex gap-3 mt-1">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center gap-1"><CheckCircle2 size={10} className="text-primary" /> Klarer Output</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="border-y border-white/5 py-14 px-6 bg-surface/10">
        <div className="max-w-content mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center md:border-r border-white/10">
            <div className="text-2xl font-display font-bold text-white mb-1">1.000+</div>
            <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Verwaltete Verträge</div>
          </div>
          <div className="text-center md:border-r border-white/10">
            <div className="text-2xl font-display font-bold text-primary mb-1">Seit 2023</div>
            <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Kein Mandat verloren</div>
          </div>
          <div className="text-center md:border-r border-white/10">
            <div className="text-2xl font-display font-bold text-white mb-1 text-yellow-400">★★★★★</div>
            <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Via VersiFlex Versicherungsmakler GmbH</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-secondary mb-1">Teil deines Risk-Teams</div>
            <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Laufende Betreuung</div>
          </div>
        </div>
      </section>

      {/* PROBLEM -> SOLUTION */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-content mx-auto">
          <SectionTitle
            title="Warum herkömmliche Versicherungsberater an Startups scheitern."
            subtitle="Meistens bekommst du entweder 'Standard-Pakete' von früher oder wirst mit Fachchinesisch überhäuft. Wir ändern das."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-secondary border border-white/10">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Mitwachsender Schutz</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Wir passen deinen Versicherungsschutz proaktiv an jede Phase deines Startups an. Du musst uns nicht hinterherlaufen.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Fokus auf Gründer-Haftung</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">D&O ist bei uns kein Zusatzprodukt, sondern der Kern des Schutzes für dein Privatvermögen.</p>
                </div>
              </div>
            </div>
            <div className="glass p-10 rounded-[3rem] border-primary/20">
              <h4 className="text-2xl font-display font-bold text-white mb-6 italic">"Unser Anspruch: Qualität + Schnelligkeit kombinieren, um das Startup-Tempo mitzugehen."</h4>
              <p className="text-slate-500 text-sm">Anspruch unseres Teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 md:py-32 px-6 bg-surface/10">
        <div className="max-w-content mx-auto">
          <SectionTitle title="Deine Vorteile bei FoundersCover" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, i) => (
              <FeatureCard key={i} title={benefit.title} description={benefit.description} icon={<Zap size={24} />} />
            ))}
          </div>
        </div>
      </section>

      {/* LEAD MAGNET: CANVAS RISIKOANALYSE */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-content mx-auto glass rounded-[4rem] p-12 md:p-20 border-secondary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10 text-secondary"><FileText size={180} /></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-bold mb-8 uppercase tracking-widest border border-secondary/20">Gratis Risikoanalyse</div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Risikoanalyse für dein Startup erhalten.</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                In wenigen Minuten erhältst du dein grobes Risikoprofil anhand deiner Website per E-Mail:
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex gap-3 text-white font-medium"><CheckCircle2 className="text-secondary shrink-0" /> Canvas-Übersicht aller Risikofelder</li>
                <li className="flex gap-3 text-white font-medium"><CheckCircle2 className="text-secondary shrink-0" /> Top-3 Empfehlungen (Must-have/Later)</li>
              </ul>
              <p className="text-xs text-slate-500 italic">Keine versteckte Beratungspflicht. Du entscheidest.</p>
            </div>
            <div className="glass p-8 rounded-3xl border-white/10">
              <LeadMagnetForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHO SEGMENTS */}
      <section className="py-24 px-6 bg-surface/10 border-y border-white/5">
        <div className="max-w-content mx-auto">
          <SectionTitle
            title="Spezialisierter Schutz für jede Branche"
            subtitle="Dein Geschäftsmodell bestimmt dein Risiko. Wir kennen die Feinheiten jeder Branche."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SEGMENTS.map((seg, i) => (
              <div key={i} className="group relative rounded-[2.5rem] overflow-hidden aspect-[16/9] md:aspect-[21/9] glass border-white/5 cursor-pointer">
                <img src={seg.image} alt={seg.title} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute bottom-0 p-8 md:p-10">
                  <h3 className="font-display font-bold text-xl md:text-2xl mb-2 text-white tracking-tight">{seg.title}</h3>
                  <p className="text-slate-400 text-xs md:text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity max-w-md">{seg.description}</p>
                  <div className="w-12 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRIGGER MOMENTS */}
      <section className="py-16 md:py-32 px-6 bg-primary/5">
        <div className="max-w-content mx-auto">
          <SectionTitle title="Wann ist der richtige Zeitpunkt?" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Das nächste Funding steht an', desc: 'VCs fordern D&O und Cyber-Policen vor dem Closing.' },
              { title: 'Erster Enterprise-Deal', desc: 'Dein Kunde verlangt Nachweise über Vermögensschadenhaftpflicht.' },
              { title: 'Skalierung des Teams', desc: 'Risiken bei Kündigungen oder Hiring-Prozessen steigen an.' }
            ].map((t, i) => (
              <div key={i} className="p-8 border-l-2 border-primary/30 bg-surface/20 rounded-r-2xl">
                <h4 className="text-lg font-bold text-white mb-2">{t.title}</h4>
                <p className="text-slate-400 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-content mx-auto text-center mb-20">
          <h2 className="text-4xl font-display font-bold text-white mb-6">In 3 Schritten zur vollen Klarheit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative mt-20">
            {[
              { step: '01', title: 'Termin buchen', desc: 'Wähle einen Slot für den 20-Minuten Risiko-Check.' },
              { step: '02', title: '20 Min Check', desc: 'Wir priorisieren gemeinsam: Must-have / Later.' },
              { step: '03', title: 'Startfertig', desc: 'Erhalte das Angebot für dein Startup innerhalb von 24 Stunden.' }
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary font-display font-bold text-2xl mb-6 border border-primary/20">{s.step}</div>
                <h4 className="text-xl font-bold text-white mb-4">{s.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-16 md:py-32 px-6 bg-surface/20">
        <div className="max-w-content mx-auto">
          <SectionTitle
            title="Versicherungen für Startups"
            subtitle="Die wichtigsten Bausteine – klar priorisiert und passend zu deiner Phase."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((m, i) => (
              <div key={i} className="p-8 glass rounded-3xl border-white/5 flex flex-col justify-between h-full">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-6 bg-secondary/10 text-secondary border border-secondary/20">
                    {m.category}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{m.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEO FOCUS / SEO SECTION */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-content mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
                Vor Ort in den <span className="text-primary">Startup-Hubs</span> Deutschlands.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Egal ob Gründungsphase in Berlin oder Series B in München – wir begleiten unsere Startups in ganz Deutschland.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-start md:justify-end max-w-lg">
              {['Berlin', 'München', 'Hamburg', 'Köln', 'Frankfurt am Main', 'Stuttgart', 'Düsseldorf', 'Leipzig', 'Dresden', 'Hannover', 'Nürnberg', 'Mannheim', 'Karlsruhe', 'Freiburg', 'Heidelberg', 'Darmstadt', 'Aachen', 'Bonn', 'Münster', 'Bielefeld', 'Dortmund', 'Essen', 'Bochum', 'Bremen', 'Kiel', 'Lübeck', 'Rostock', 'Potsdam', 'Mainz', 'Wiesbaden', 'Saarbrücken', 'Regensburg', 'Augsburg', 'Ulm', 'Würzburg'].map((city) => (
                <span key={city} className="px-3 py-1 glass rounded-full text-[10px] font-bold text-slate-300 border-white/10 hover:border-primary/30 transition-colors cursor-default">{city}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionTitle title="Häufig gestellte Fragen" centered />
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group glass rounded-2xl p-6 cursor-pointer border-white/5 hover:border-primary/30 transition-all">
                <summary className="font-bold text-white flex justify-between items-center list-none">
                  {faq.question}
                  <span className="transition-transform group-open:rotate-180 text-primary"><Shield size={20} /></span>
                </summary>
                <p className="mt-6 text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-content mx-auto glass rounded-[4rem] p-16 md:p-28 text-center relative overflow-hidden border-white/10 shadow-[0_32px_128px_rgba(0,0,0,0.8)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/15 blur-[160px] -z-10 opacity-30"></div>

          <div className="relative z-10">
            <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary mx-auto mb-12 border border-primary/20 shadow-[0_0_40px_rgba(18,201,255,0.2)]">
              <Shield size={48} />
            </div>
            <h2 className="font-display font-bold text-3xl md:text-6xl text-white mb-12 tracking-tight leading-[1.1]">
              Bereit für volle Klarheit?
            </h2>
            <div className="flex justify-center">
              <Button to="https://outlook.office.com/book/Lassunssprechen@versiflex.de/" variant="secondary" className="h-16 px-14">Risiko-Check buchen (20 Min)</Button>
            </div>
            <p className="mt-14 text-slate-500 font-display font-bold text-[10px] uppercase tracking-[0.4em] opacity-80">Klarer Output. Kein Druck. Umsetzung optional.</p>
          </div>
        </div>
      </section>

      <Footer />
      <div className="h-24 md:hidden" />
      <MobileStickyCTA />
    </div>
  );
};

export default Home;
