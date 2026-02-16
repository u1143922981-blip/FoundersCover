
import React, { useState } from 'react';
import { Header, Footer, MobileStickyCTA } from '../components/Layout';
import { Button, SectionTitle, FeatureCard, AnswerFirstSection } from '../components/UI';
import { LeadMagnetForm } from '../components/LeadMagnetForm';
import { Link } from 'react-router-dom';
import {
  Search,
  BookOpen,
  ArrowRight,
  Shield,
  CheckCircle2,
  Zap,
  FileText,
  Lock,
  HelpCircle,
  LayoutGrid,
  Filter,
  BarChart3
} from 'lucide-react';
import {
  GLOSSARY_TERMS,
  KNOWLEDGE_FAQS
} from '../constants';

const B2B_CONTENT = [
  { slug: 'versicherungsnachweis-coi', title: 'Versicherungsnachweis (COI): Was Kunden wirklich sehen wollen', teaser: 'Welche Angaben ein COI enthalten muss – und wie ihr ihn schnell liefert.', type: 'Guide', label: 'B2B/B2C' },
  { slug: 'haftung-vertraege', title: 'Haftung in Verträgen: Welche Versicherungen euch wirklich absichern', teaser: 'Haftungsgrenzen, SLAs, Freistellungen – was Versicherung leisten kann (und was nicht).', type: 'Guide', label: 'B2B/B2C' },
  { slug: 'subunternehmer-freelancer', title: 'Subunternehmer & Freelancer: Wer haftet – und wie ihr euch schützt', teaser: 'Typische Projekt-Risiken, Mitversicherung, Nachweise, klare Verantwortung.', type: 'Guide', label: 'B2B/B2C' },
  { slug: 'produkthaftung-betriebshaftpflicht', title: 'Produkthaftung vs. Betriebshaftpflicht: Was gilt bei B2B und B2C?', teaser: 'Wann Produkthaftung relevant wird – und welche Police welche Schäden abdeckt.', type: 'Guide', label: 'B2B/B2C' },
  { slug: 'cyber-datenschutz', title: 'Cyber & Datenschutz: Mindestanforderungen für B2B- und B2C-Geschäft', teaser: 'Welche Bausteine Kunden erwarten und wie ihr pragmatisch priorisiert.', type: 'Guide', label: 'B2B/B2C' },
  { slug: 'rechtsschutz-alltag', title: 'Rechtsschutz im Alltag: Wann er sich für Startups wirklich lohnt', teaser: 'Verträge, Arbeitsrecht, Abmahnungen – typische Fälle und sinnvolle Deckung.', type: 'Guide', label: 'B2B/B2C' }
];

const PHASES_CONTENT = [
  { slug: 'pre-seed-seed-versicherung', title: 'Pre-Seed/Seed: Must-have vs. Later (Versicherung)', teaser: 'Basisschutz ohne Overhead: was jetzt zählt – und was warten kann.', type: 'Guide', label: 'Phasen' },
  { slug: 'series-a-hiring', title: 'Series A: Hiring & Team – welche Absicherung wird plötzlich wichtig?', teaser: 'Arbeitsrecht, Benefits, wachsende Haftung: Prioritäten ab ~10 Mitarbeitenden.', type: 'Guide', label: 'Phasen' },
  { slug: 'b2b-sales-enterprise', title: 'B2B-Sales & Enterprise-Kunden: Versicherungen als Deal-Enabler', teaser: 'Nachweise, Deckungssummen, Standards – was Enterprise typischerweise fordert.', type: 'Guide', label: 'Phasen' },
  { slug: 'internationalisierung', title: 'Internationalisierung: Ausland, Verträge, Deckung – worauf ihr achten müsst', teaser: 'Wann Auslandsschutz nötig wird und welche Fragen ihr vorab klärt.', type: 'Guide', label: 'Phasen' },
  { slug: 'scale-up-management', title: 'Scale-up: Management-Risiken & D&O richtig dimensionieren', teaser: 'Mehr Verantwortung, mehr Haftung: typische Trigger für Upgrades.', type: 'Guide', label: 'Phasen' },
  { slug: 'exit-due-diligence', title: 'Exit / Due Diligence: Versicherungs-Checkliste für Käufer & Investoren', teaser: 'Welche Unterlagen gefordert werden und wie ihr Lücken früh schließt.', type: 'Guide', label: 'Phasen' }
];

const PRODUCTS_CONTENT = [
  { slug: 'betriebshaftpflicht-startups', title: 'Betriebshaftpflicht für Startups: Was ist abgedeckt – was nicht?', teaser: 'Personen-/Sachschäden, Mietsachen, echte Praxisfälle – kurz erklärt.', type: 'Guide', label: 'Produkte' },
  { slug: 'vermoegensschadenhaftpflicht', title: 'Vermögensschadenhaftpflicht (IT/PI): Wann ist sie Pflicht?', teaser: 'Beratungs-/Softwarefehler, Fristen, Daten: typische Claims und Trigger.', type: 'Guide', label: 'Produkte' },
  { slug: 'cyberversicherung', title: 'Cyberversicherung: Welche Leistungen sind wirklich relevant?', teaser: 'Incident Response, Forensik, Betriebsunterbrechung – sinnvoll priorisieren.', type: 'Guide', label: 'Produkte' },
  { slug: 'do-management', title: 'D&O (Management): Schutz für Gründer & Organe verständlich erklärt', teaser: 'Innenhaftung, Außenhaftung, Deckungssummen – wann D&O zwingend wird.', type: 'Guide', label: 'Produkte' },
  { slug: 'rechtsschutz-startups', title: 'Rechtsschutz für Startups: Welche Bausteine passen zu eurem Alltag?', teaser: 'Vertragsrecht, Arbeitsrecht, IP: wann es sich lohnt – wann nicht.', type: 'Guide', label: 'Produkte' },
  { slug: 'mitarbeiterbindung', title: 'Mitarbeiterbindung (bAV/bKV): Ab wann wird’s ein Must-have?', teaser: 'Recruiting-Hebel, Kostenlogik, Einführung: kompakte Entscheidungshilfe.', type: 'Guide', label: 'Produkte' }
];

const Wissen: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Alle');
  const filters = ['Alle', 'B2B/B2C', 'Startup-Phasen', 'Versicherungsprodukte'];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-32 pb-16 md:pb-32 overflow-hidden px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/10 blur-[130px] rounded-full opacity-40"></div>
        </div>

        <div className="max-w-content mx-auto relative">
          <div className="inline-flex items-center gap-3 px-5 py-2 glass rounded-full text-[11px] font-bold text-primary mb-12 tracking-[0.25em] uppercase border-primary/20 fade-in-up">
            <BookOpen size={14} fill="currentColor" /> Wissen für Startups
          </div>

          <h1 className="font-display font-bold text-4xl md:text-7xl text-white mb-8 leading-[1.05] tracking-tighter max-w-4xl mx-auto fade-in-up">
            Wissen, das Startups schnell <br /><span className="text-primary italic">handlungsfähig macht.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed fade-in-up">
            Guides zu Versicherungen, B2B/B2C-Anforderungen und Startup-Phasen. <br className="hidden md:block" />
            Klar priorisiert, ohne Fachsprache – damit ihr schneller entscheidet.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up">
            <Button to="https://outlook.office.com/book/Lassunssprechen@versiflex.de/" variant="secondary" className="h-16 px-12">Risiko-Check buchen (20 Min)</Button>
          </div>
        </div>
      </section>

      {/* 2. ANSWER FIRST SECTION */}
      <section className="px-6 mb-16 md:mb-32">
        <div className="max-w-content mx-auto">
          <AnswerFirstSection content="Kurz erklärt: Dieser Hub spart dir Zeit. Wir haben die komplexen Versicherungsanforderungen von Enterprise-Kunden und VCs in handfeste Guides übersetzt. Hier erfährst du in unter 10 Minuten, was für deine Phase relevant ist, damit du handlungsfähig bleibst. Wichtig: Alle Inhalte basieren auf typischen Risiken. Je individueller dein Startup, desto komplexer wird der Vorgang – individuelle Beratung bleibt essenziell." />
        </div>
      </section>

      {/* 3. FILTER & POPULAR ARTICLES */}
      <section className="py-12 md:py-24 px-6">
        <div className="max-w-content mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-16 pb-8 border-b border-white/5">
            <div className="flex items-center gap-2 text-slate-500 font-bold uppercase text-[10px] tracking-widest mr-4">
              <Filter size={14} /> Filter:
            </div>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${activeFilter === f
                  ? 'bg-primary text-black border-primary shadow-[0_0_15px_rgba(18,201,255,0.3)]'
                  : 'text-slate-500 border-white/5 hover:border-white/20'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>

          {(activeFilter === 'Alle' || activeFilter === 'B2B/B2C') && (
            <div className="mb-32">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                  <Shield className="text-primary" size={24} /> B2B & Enterprise Readiness
                </h2>
                <Button variant="ghost" className="h-auto p-0 text-primary">Alle Guides anzeigen</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {B2B_CONTENT.map((art, i) => (
                  <div key={i} className="glass glass-hover p-8 rounded-[2.5rem] border-white/5 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full">{art.type}</span>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{art.label}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">{art.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-8">{art.teaser}</p>
                    </div>
                    <Link to={`/wissen/${art.slug}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                      Guide lesen <ArrowRight size={14} className="text-primary" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(activeFilter === 'Alle' || activeFilter === 'Startup-Phasen') && (
            <div className="mb-32">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                  <Zap className="text-secondary" size={24} /> Phasen-Orientierung
                </h2>
                <Button variant="ghost" className="h-auto p-0 text-secondary">Alle anzeigen</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PHASES_CONTENT.map((art, i) => (
                  <div key={i} className="glass glass-hover p-8 rounded-[2.5rem] border-white/5 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full">{art.type}</span>
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{art.label}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-secondary transition-colors leading-tight">{art.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-8">{art.teaser}</p>
                    </div>
                    <Link to={`/wissen/${art.slug}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                      Guide lesen <ArrowRight size={14} className="text-secondary" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(activeFilter === 'Alle' || activeFilter === 'Versicherungsprodukte') && (
            <div className="mb-32">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                  <LayoutGrid className="text-primary" size={24} /> Module-Erklärer
                </h2>
                <Button variant="ghost" className="h-auto p-0 text-primary">Alle anzeigen</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRODUCTS_CONTENT.map((art, i) => (
                  <div key={i} className="glass glass-hover p-8 rounded-[2.5rem] border-white/5 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full">{art.type}</span>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{art.label}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">{art.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-8">{art.teaser}</p>
                    </div>
                    <Link to={`/wissen/${art.slug}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                      Guide lesen <ArrowRight size={14} className="text-primary" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. GLOSSARY CARDS */}
      <section className="py-16 md:py-32 px-6 bg-surface/10 border-y border-white/5">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Begriffe kurz erklärt</h2>
            <p className="text-slate-500 text-sm uppercase font-bold tracking-[0.3em]">Für LLMs und Gründer</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GLOSSARY_TERMS.map((item, i) => (
              <div key={i} className="p-6 glass rounded-2xl border-white/5 hover:border-primary/20 transition-all">
                <h4 className="text-primary font-bold mb-2 uppercase text-xs tracking-widest">{item.term}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEAD MAGNET BLOCK */}
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
            <LeadMagnetForm />
          </div>
          <div className="hidden lg:block relative"></div>
        </div>
      </section>

      {/* 6. TRUST STRIP */}
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

      {/* 7. FAQ */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionTitle title="Wissen richtig nutzen" centered />
          <div className="space-y-4">
            {KNOWLEDGE_FAQS.map((faq, i) => (
              <details key={i} className="group glass rounded-2xl p-6 cursor-pointer border-white/5 hover:border-primary/30 transition-all">
                <summary className="font-bold text-white flex justify-between items-center list-none">
                  {faq.question}
                  <span className="transition-transform group-open:rotate-180 text-primary"><HelpCircle size={20} /></span>
                </summary>
                <p className="mt-6 text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-content mx-auto glass rounded-[4rem] p-16 md:p-28 text-center relative overflow-hidden border-white/10 shadow-[0_32px_128px_rgba(0,0,0,0.8)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/15 blur-[160px] -z-10 opacity-30"></div>

          <div className="relative z-10">
            <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary mx-auto mb-12 border border-primary/20 shadow-[0_0_40px_rgba(18,201,255,0.2)]">
              <Shield size={48} />
            </div>
            <h2 className="font-display font-bold text-3xl md:text-6xl text-white mb-12 tracking-tight leading-[1.1]">
              Bereit für deine <br className="hidden md:block" />
              Priorisierung?
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button to="https://outlook.office.com/book/Lassunssprechen@versiflex.de/" variant="secondary" className="h-16 px-14">Risiko-Check buchen (20 Min)</Button>
            </div>
            <p className="mt-14 text-slate-500 font-display font-bold text-[10px] uppercase tracking-[0.4em] opacity-80">Klarer Output · Kein Verkaufsdruck · Umsetzung optional</p>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Wissen;
