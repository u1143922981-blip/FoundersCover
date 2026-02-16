
import React from 'react';
import { Header, Footer, MobileStickyCTA } from '../components/Layout';
import { Button, SectionTitle, ComparisonRow, FeatureCard } from '../components/UI';
import { LeadMagnetForm } from '../components/LeadMagnetForm';
import { Shield, Zap, Search, Laptop, UserCheck, CheckCircle2, LayoutDashboard, Mail, FileText, BarChart3, TrendingUp } from 'lucide-react';
import { SERVICE_PROCESS, MODULES, FAQS, COMPARISON } from '../constants';

const Leistungen: React.FC = () => {
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
            <Zap size={14} fill="currentColor" /> VERSICHERUNGEN FÜR STARTUPS
          </div>

          <h1 className="font-display font-bold text-4xl md:text-7xl text-white mb-8 leading-[1.05] tracking-tighter max-w-4xl mx-auto fade-in-up">
            Experten für Startup <br /><span className="text-primary italic">Risk-Management.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed fade-in-up">
            Von der Marktausschreibung bis zur Schadensabwicklung. <br className="hidden md:block" />
            In 20 Minuten weißt du, was du wirklich brauchst – Must-have / Nice-to-have / Later.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up">
            <div className="flex flex-col items-center gap-2">
              <Button to="https://outlook.office.com/book/Lassunssprechen@versiflex.de/" variant="secondary" className="h-16 px-12">Risiko-Check buchen (20 Min)</Button>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Klarer Output.</span>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-80">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white"><Shield size={14} className="text-secondary" /> 100+ VERSICHERER</div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white"><CheckCircle2 size={14} className="text-secondary" /> PROZESSOPTIMIERT</div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white"><UserCheck size={14} className="text-secondary" /> PERSÖNLICH</div>
          </div>
        </div>
      </section>

      {/* 2. OUTCOME SECTION */}
      <section className="py-16 md:py-32 px-6 bg-surface/10 border-y border-white/5">
        <div className="max-w-content mx-auto">
          <SectionTitle
            title="Ganzheitliche Versicherungslösungen für Startups"
            subtitle="Wir machen Versicherungen so einfach und transparent, dass sich Startups kaum damit beschäftigen müssen. Maximale Entlastung für euer Team."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Search />, title: 'Full-Market Ausschreibung', desc: 'Wir scannen über 100+ Gesellschaften. Ihr bekommt nicht das einfachste Paket, sondern das, was am besten zu euch passt.' },
              { icon: <Laptop />, title: 'Digitale KundenApp', desc: 'Alle Dokumente, Bestätigungen für Kunden und Schadensmeldungen zentral an einem Ort.' },
              { icon: <UserCheck />, title: 'Persönliche Betreuung', desc: 'Kein anonymes Callcenter. Ihr habt einen festen Ansprechpartner, der euer Business-Modell von Seed bis Scale-up versteht.' }
            ].map((item, i) => (
              <div key={i} className="space-y-6 group">
                <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-primary border border-white/10 group-hover:border-primary/50 transition-colors">
                  {/* Fix: cast to React.ReactElement<any> to allow 'size' prop for Lucide icons */}
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SO LÄUFT ES AB (1-6) */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-content mx-auto">
          <SectionTitle title="Der FoundersCover-Prozess" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_PROCESS.map((p, i) => (
              <div key={i} className="glass p-10 rounded-[3rem] border-white/5 relative group hover:border-primary/40 transition-all flex flex-col h-full">
                <div className="text-primary/10 font-display font-bold text-6xl absolute top-6 right-8 group-hover:text-primary/20 transition-colors">0{i + 1}</div>
                <h4 className="text-xl font-bold text-white mb-6 pr-12">{p.title}</h4>
                <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed">{p.desc}</p>

                <div className="space-y-4 pt-6 border-t border-white/5 mt-auto">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Was wir brauchen:</span>
                    <span className="text-xs text-white font-medium">{p.need}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Was ihr bekommt:</span>
                    <span className="text-xs text-white font-medium">{p.get}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="flex flex-col items-center gap-3">
              <Button to="https://outlook.office.com/book/Lassunssprechen@versiflex.de/" variant="secondary" className="px-12">Jetzt Prozess starten</Button>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Umsetzung optional · Klarer Fokus</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LEISTUNGSBAUSTEINE */}
      <section className="py-16 md:py-32 px-6 bg-surface/20">
        <div className="max-w-content mx-auto">
          <SectionTitle
            title="Die Module eurer Absicherung"
            subtitle="Fachchinesisch beherrschen wir, für euch übersetzen wir es in geschäftlichen Nutzen. Gruppiert nach Relevanz."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((m, i) => {
              // Generate ID for anchor linking
              let id = '';
              if (m.title.includes('Betriebshaftpflicht')) id = 'betriebshaftpflicht';
              else if (m.title.includes('Vermögensschaden')) id = 'vermoegensschaden';
              else if (m.title.includes('Cyber')) id = 'cyber';
              else if (m.title.includes('D&O')) id = 'do';
              else if (m.title.includes('Betriebliche Vorsorge')) id = 'vorsorge';

              return (
                <div key={i} id={id} className="p-8 glass rounded-3xl border-white/5 flex flex-col justify-between h-full group hover:bg-white/[0.03] transition-colors scroll-mt-32">
                  <div>
                    <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase mb-6 ${m.category === 'Must-have' ? 'bg-primary/20 text-primary' : m.category === 'Nice-to-have' ? 'bg-secondary/20 text-secondary' : 'bg-slate-800 text-slate-400'
                      }`}>
                      {m.category}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{m.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{m.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-16 p-8 glass rounded-3xl border-primary/20 bg-primary/5 text-center">
            <p className="text-white font-medium">Welche Bausteine für euch sinnvoll sind, hängt von eurem Geschäftsmodell, der Phase und den Kundenanforderungen ab.</p>
          </div>
        </div>
      </section>

      {/* 5. WARUM FOUNDERSCOVER / VERGLEICH */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Der Vergleich" subtitle="Ruhig und sachlich: Warum FoundersCover die bessere Wahl für moderne Startups ist." centered />
          <div className="glass p-10 rounded-[3rem] border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10 pb-6 mb-4 gap-4">
              <div className="text-[10px] font-bold text-slate-600 uppercase">Vergleichsfaktor</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Klassisches Standardpaket</div>
              <div className="text-[10px] font-bold text-primary uppercase">FoundersCover Prinzip</div>
            </div>
            {COMPARISON.map((row, i) => (
              <ComparisonRow key={i} label={row.label} standard={row.standard} founders={row.founders} />
            ))}

            <div className="mt-16 pt-10 border-t border-white/5 text-center px-6">
              <div className="max-w-3xl mx-auto">
                <h4 className="text-xl font-bold text-white mb-4">Qualität + Speed</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Wir verzichten konsequent auf alles, was Prozesse verlangsamt. Keine Papierformulare, keine Warteschleifen.
                  Dafür automatisierte Prozesse, wo sie Sinn machen, und persönliche Beratung, wo sie den Unterschied macht.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEADMAGNET BLOCK */}
      <section className="py-16 md:py-32 px-6">
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
      <section className="py-16 md:py-32 px-6 bg-surface/10">
        <div className="max-w-3xl mx-auto">
          <SectionTitle title="Fragen zu unseren Leistungen" centered />
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

      {/* 8. FINAL CTA */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-content mx-auto glass rounded-[4rem] p-16 md:p-28 text-center relative overflow-hidden border-white/10 shadow-[0_32px_128px_rgba(0,0,0,0.8)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/15 blur-[160px] -z-10 opacity-30"></div>

          <div className="relative z-10">
            <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary mx-auto mb-12 border border-primary/20 shadow-[0_0_40px_rgba(18,201,255,0.2)]">
              <Shield size={48} />
            </div>
            <h2 className="font-display font-bold text-3xl md:text-6xl text-white mb-12 tracking-tight leading-[1.1]">
              Sichert euer Wachstum <br className="hidden md:block" />
              heute ab.
            </h2>
            <div className="flex justify-center">
              <Button to="https://outlook.office.com/book/Lassunssprechen@versiflex.de/" variant="secondary" className="h-16 px-14">Ersttermin buchen (20 Min)</Button>
            </div>
            <p className="mt-14 text-slate-500 font-display font-bold text-[10px] uppercase tracking-[0.4em] opacity-80">Klarer Output. Umsetzung optional.</p>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Leistungen;
