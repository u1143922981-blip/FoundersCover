
import React, { useState } from 'react';
import { Header, Footer, MobileStickyCTA } from '../components/Layout';
import { Button, SectionTitle, ComparisonRow, FeatureCard } from '../components/UI';
import { LeadMagnetForm } from '../components/LeadMagnetForm';
import { Shield, Zap, Search, Laptop, UserCheck, CheckCircle2, LayoutDashboard, Mail, FileText, BarChart3, TrendingUp, Layers, Users, Rocket, Target, Globe } from 'lucide-react';
import { STARTUP_PHASES_DATA, FAQS, PHASE_COMPARISON } from '../constants';

const Phasen: React.FC = () => {
  const [activePhase, setActivePhase] = useState(STARTUP_PHASES_DATA[0].id);

  const currentPhase = STARTUP_PHASES_DATA.find(p => p.id === activePhase) || STARTUP_PHASES_DATA[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-32 pb-44 overflow-hidden px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/10 blur-[130px] rounded-full opacity-40"></div>
        </div>

        <div className="max-w-content mx-auto relative">
          <div className="inline-flex items-center gap-3 px-5 py-2 glass rounded-full text-[11px] font-bold text-primary mb-12 tracking-[0.25em] uppercase border-primary/20 fade-in-up">
            <Rocket size={14} fill="currentColor" /> Skalierbarer Schutz
          </div>

          <h1 className="font-display font-bold text-4xl md:text-7xl text-white mb-8 leading-[1.05] tracking-tighter max-w-4xl mx-auto fade-in-up">
            Startup-Versicherungen: <br /><span className="text-primary italic">Seed bis Scale-up.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed fade-in-up">
            Dein Risiko-Profil ändert sich von Seed bis Scale-up deutlich. <br className="hidden md:block" />
            Wir zeigen dir, was jetzt wichtig ist und was noch warten kann.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up">
            <div className="flex flex-col items-center gap-2">
              <Button to="https://outlook.office.com/book/Lassunssprechen@versiflex.de/" variant="secondary" className="h-16 px-12">Risiko-Check buchen (20 Min)</Button>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Must-have / Later Logik</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WARUM PHASEN ENTSCHEIDEN */}
      <section className="py-24 px-6 bg-surface/10 border-y border-white/5">
        <div className="max-w-content mx-auto">
          <SectionTitle
            title="Phasen-spezifisches Risikomanagement"
            subtitle="Pauschale Pakete führen entweder zu Unterdeckung oder zu unnötigen Kosten. Deine Phase bestimmt die Prioritäten."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Target />, title: 'Modell & Branche', desc: 'SaaS, E-Com oder Hardware haben völlig andere Risk-Profile.' },
              { icon: <Users />, title: 'Teamgröße', desc: 'Mit jedem Mitarbeiter steigen Haftungs- und Benefit-Anforderungen.' },
              { icon: <TrendingUp />, title: 'Funding-Status', desc: 'Investoren fordern spezifische Audit-Ready Policen.' },
              { icon: <Shield />, title: 'Kunden-Deals', desc: 'Enterprise-Kunden setzen oft Versicherungs-Summen voraus.' }
            ].map((item, i) => (
              <div key={i} className="glass p-8 rounded-3xl border-white/5 group hover:border-primary/30 transition-all">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-6 border border-white/10 group-hover:border-primary/50 transition-colors">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PHASE NAVIGATOR */}
      <section className="py-32 px-6">
        <div className="max-w-content mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-20 bg-surface/40 p-2 rounded-full border border-white/5 max-w-3xl mx-auto">
            {STARTUP_PHASES_DATA.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all ${activePhase === phase.id
                  ? 'bg-primary text-black shadow-[0_0_20px_rgba(18,201,255,0.4)]'
                  : 'text-slate-500 hover:text-white'
                  }`}
              >
                {phase.title}
              </button>
            ))}
          </div>

          <div className="fade-in-up" key={activePhase}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              <div>
                <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.3em] mb-6">
                  <Zap size={14} /> Phase: {currentPhase.period}
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                  {currentPhase.title}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                  {currentPhase.desc}
                </p>

                <div className="p-8 glass rounded-[2.5rem] border-primary/20 bg-primary/5 mb-10">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Target size={18} className="text-primary" /> Trigger für Upgrades
                  </h4>
                  <ul className="space-y-3">
                    {currentPhase.triggers.map((t, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-primary shrink-0" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8">
                <div className="glass p-10 rounded-[3rem] border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10 text-primary pointer-events-none"><Shield size={120} /></div>
                  <h4 className="text-xl font-bold text-white mb-8 uppercase tracking-widest text-primary">Must-have Jetzt</h4>
                  <ul className="space-y-4">
                    {currentPhase.mustHaves.map((m, i) => (
                      <li key={i} className="flex gap-3 text-white font-medium">
                        <CheckCircle2 size={20} className="text-primary shrink-0" /> {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass p-10 rounded-[3rem] border-white/5 opacity-80">
                  <h4 className="text-xl font-bold text-slate-400 mb-8 uppercase tracking-widest">Later / Nice-to-have</h4>
                  <ul className="space-y-4">
                    {currentPhase.laters.map((l, i) => (
                      <li key={i} className="flex gap-3 text-slate-500 font-medium">
                        <div className="w-5 h-5 border border-slate-700 rounded-full flex items-center justify-center shrink-0 text-[10px]">L</div> {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {currentPhase.scenarios.map((scen, i) => (
                <div key={i} className="p-10 glass rounded-[2.5rem] border-white/5 hover:bg-white/[0.02] transition-colors">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 block">Szenario: {scen.case}</span>
                  <p className="text-white text-lg font-medium leading-relaxed italic">"{scen.text}"</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button to="https://outlook.office.com/book/Lassunssprechen@versiflex.de/" variant="secondary" className="px-12 h-16">Risiko-Check (20 Min)</Button>
              <p className="mt-4 text-[10px] text-slate-600 font-bold uppercase tracking-widest">Kostenlos</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BENEFITS & TEAM SECTION */}
      <section className="py-32 px-6 bg-surface/20">
        <div className="max-w-content mx-auto">
          <SectionTitle
            title="Benefits & Team-Absicherung"
            subtitle="Ab wann lohnen sich bAV und bKV für Startups? Wann wird aus 'Nice-to-have' ein 'Must-have' für das Recruiting?"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="p-8 glass rounded-[2.5rem] border-white/5">
                <h4 className="text-xl font-bold text-white mb-4">Gründung (Phase 1)</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Hier meist irrelevant. Bei 2-3 Gründern liegt der Fokus auf Stabilität und Produkt. bAV ist hier meist 'Later'.</p>
              </div>
              <div className="p-8 glass rounded-[2.5rem] border-primary/20 bg-primary/5">
                <h4 className="text-xl font-bold text-white mb-4">Wachstum & Scale-up</h4>
                <p className="text-white text-sm leading-relaxed">Wird zum 'Must-have' im War for Talent. Betriebliche Altersvorsorge (bAV) und Krankenversicherung (bKV) sind mächtige Tools, um Top-Leute zu binden und Steuer-Vorteile zu nutzen.</p>
              </div>
            </div>
            <div className="glass p-12 rounded-[3.5rem] border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5 text-primary pointer-events-none"><Users size={200} /></div>
              <h3 className="text-3xl font-display font-bold text-white mb-8 tracking-tight">Echte Attraktivität.</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0"><CheckCircle2 size={20} /></div>
                  <p className="text-slate-300 text-sm">Nachweisbarer finanzieller Mehrwert für Mitarbeiter bei geringen AG-Kosten.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERGLEICH: STANDARD vs PHASEN */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Standardpaket vs. Phasen-Ansatz" subtitle="Ruhiger, sachlicher Vergleich unserer Arbeitsweise für moderne Gründerteams." centered />
          <div className="glass p-10 rounded-[3rem] border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10 pb-6 mb-4 gap-4">
              <div className="text-[10px] font-bold text-slate-600 uppercase">Faktor</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Standard-Pauschalpaket</div>
              <div className="text-[10px] font-bold text-primary uppercase">FoundersCover Phasen-Ansatz</div>
            </div>
            {PHASE_COMPARISON.map((row, i) => (
              <ComparisonRow key={i} label={row.label} standard={row.standard} founders={row.founders} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEADMAGNET BLOCK */}
      <section className="py-32 px-6">
        <div className="max-w-content mx-auto glass rounded-[4rem] p-12 md:p-20 border-secondary/20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-10 text-secondary pointer-events-none"><FileText size={180} /></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-[10px] font-bold mb-8 uppercase tracking-widest border border-secondary/20">Gratis Risikoanalyse</div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Risikoanalyse für dein Startup erhalten.</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                In wenigen Minuten erhältst du dein grobes Risikoprofil anhand deiner Website per E-Mail:
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex gap-3 text-white font-medium"><CheckCircle2 className="text-secondary shrink-0" /> Canvas-Übersicht aller Risikofelder</li>
                <li className="flex gap-3 text-white font-medium"><CheckCircle2 className="text-secondary shrink-0" /> Top-3 Empfehlungen (Must-have/Later)</li>
              </ul>

              <LeadMagnetForm />
            </div>
            <div className="hidden lg:block relative">
              <div className="hidden lg:flex justify-center items-center h-full">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-32 px-6 bg-surface/10">
        <div className="max-w-3xl mx-auto">
          <SectionTitle title="Häufige Fragen zum Phasen-Schutz" centered />
          <div className="space-y-4">
            {FAQS.slice(0, 6).map((faq, i) => (
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

      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Phasen;
