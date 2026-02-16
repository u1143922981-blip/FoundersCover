
import React from 'react';
import { Header, Footer, MobileStickyCTA } from '../components/Layout';
import { Button, SectionTitle, AnswerFirstSection } from '../components/UI';
// Added Search to the imports from lucide-react
import { Shield, Zap, Target, Users, CheckCircle2, LayoutDashboard, Star, MessageSquare, Briefcase, Info, Search } from 'lucide-react';
import { FAQS } from '../constants';

const UeberUns: React.FC = () => {
  // Filtern der allgemeinen FAQs auf relevante "Über uns" Themen
  const aboutFaqs = [
    {
      question: 'Ist FoundersCover ein Makler oder eine Versicherung?',
      answer: 'FoundersCover ist keine Versicherungsgesellschaft, sondern ein spezialisierter Online-Service der VersiFlex Versicherungsmakler GmbH. Wir agieren als Makler, was bedeutet: Wir stehen rechtlich auf deiner Seite und suchen aus über 100 Versicherern das beste Konzept für dich heraus.'
    },
    {
      question: 'Wer ist mein Vertragspartner und rechtlicher Träger?',
      answer: 'Dein rechtlicher Ansprechpartner und der Träger der Maklerzulassung ist die VersiFlex Versicherungsmakler GmbH. FoundersCover ist der Online-Service, unter dem wir unsere spezialisierten Prozesse und Kommunikationswege für Startups bündeln.'
    },
    {
      question: 'Warum ein spezialisierter Online-Service statt "alles für alle"?',
      answer: 'Versicherungen sind komplex. Wir glauben, dass man nur dann exzellente Ergebnisse liefern kann, wenn man die Zielgruppe tief versteht. Durch die Spezialisierung auf Startups kennen wir die Anforderungen von VCs, Enterprise-Kunden und schnellen Wachstumsphasen im Detail.'
    },
    {
      question: 'Arbeitet ihr deutschlandweit und rein digital?',
      answer: 'Ja. Unser Team sitzt in Berlin, aber wir betreuen Startups in ganz Deutschland. Alle Prozesse – vom Risiko-Check über die Policierung bis zur Schadenmeldung – funktionieren komplett digital via Video-Call und KundenApp.'
    },
    {
      question: 'Wie schnell geht es nach dem Risiko-Check los?',
      answer: 'In der Regel erhältst du innerhalb von 24 Stunden nach unserem Gespräch ein fertiges, VC-ready Konzept. Die Umsetzung erfolgt nach deiner digitalen Unterschrift oft noch am selben Werktag.'
    },
    {
      question: 'Habe ich einen festen Ansprechpartner?',
      answer: 'Absolut. Trotz digitaler Prozesse legen wir Wert auf persönliche Betreuung. Du bekommst einen festen Experten zugewiesen, der dein Business-Modell kennt und dich langfristig begleitet.'
    },
    {
      question: 'Wie transparent sind eure Empfehlungen?',
      answer: 'Wir arbeiten nach dem Must-have / Later Prinzip. Das bedeutet, wir raten dir aktiv von Versicherungen ab, die du in deiner aktuellen Phase noch nicht brauchst. Unser Ziel ist eine langfristige Partnerschaft, kein schneller Verkauf.'
    },
    {
      question: 'Was passiert, wenn wir wachsen oder ein Funding erhalten?',
      answer: 'Wir sind darauf spezialisiert, mitzuwachsen. Bei einem Funding prüfen wir proaktiv die Anforderungen eurer Investoren (SHA) und passen die Deckungssummen (z.B. D&O) innerhalb von Stunden an.'
    }
  ];

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
            <Users size={14} fill="currentColor" /> Das Team hinter eurer Sicherheit
          </div>

          <h1 className="font-display font-bold text-4xl md:text-7xl text-white mb-8 leading-[1.05] tracking-tighter max-w-4xl mx-auto fade-in-up">
            Wir denken Versicherungen für <span className="text-primary italic">Startups neu.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed fade-in-up">
            FoundersCover ist der Startup-Online-Service der VersiFlex Versicherungsmakler GmbH. Aus jahrelanger Maklerpraxis im KMU-Umfeld und gezieltem Know-how-Aufbau im Startup-Ökosystem beraten wir transparent, digital und auf Augenhöhe – im Tempo eures Teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up">
            <div className="flex flex-col items-center gap-2">
              <Button to="https://outlook.office.com/book/Lassunssprechen@versiflex.de/" variant="secondary" className="h-16 px-12">Unser Erstgespräch buchen (20 Min)</Button>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Klarer Output.</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="border-y border-white/5 py-14 px-6 bg-surface/10">
        <div className="max-w-content mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center md:border-r border-white/10">
            <div className="text-2xl font-display font-bold text-white mb-1">200+</div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Gewerbe-Mandate betreut</div>
          </div>
          <div className="text-center md:border-r border-white/10">
            <div className="text-2xl font-display font-bold text-white mb-1">500.000+ €</div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Beitragsvolumen (Sachgeschäft)</div>
          </div>
          <div className="text-center md:border-r border-white/10">
            <div className="text-2xl font-display font-bold text-white mb-1">Jährliche</div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Weiterbildungen & IHK-reguliert</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-secondary mb-1">Spezialisiert</div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">auf Startup-Risikoprofile</div>
          </div>
        </div>
      </section>

      {/* 2. WARUM FOUNDERSCOVER EXISTIERT */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <SectionTitle title="Warum FoundersCover existiert" />
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                <p>
                  Versicherung für Startups war lange Zeit entweder "Standard-Pauschalpaket" von der Stange oder kompliziertes Fachchinesisch, das niemand versteht. Das Problem: Startups bewegen sich schneller als herkömmliche Strukturen.
                </p>
                <p>
                  Wir haben uns entschieden, das zu ändern. Aus der Erfahrung von über 1.000 verwalteten Verträgen entstand FoundersCover als Online-Service der VersiFlex Versicherungsmakler GmbH – in der Sprache des Startup-Ökosystems und mit konsequent optimierten Prozessen, damit Absicherung kein Hindernis für Wachstum ist.
                </p>
                <p>
                  Heute sind wir Teil des Risk-Managements unserer Mandate. Wir sorgen dafür, dass Kapitalgeber zufrieden sind, Enterprise-Kunden ihre Nachweise erhalten und Gründer ruhig schlafen können.
                </p>
              </div>
              <Button to="https://outlook.office.com/book/Lassunssprechen@versiflex.de/" variant="primary">Jetzt kennenlernen</Button>
            </div>
            <div className="relative">
              <div className="aspect-square glass rounded-[4rem] border-primary/20 p-12 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10 text-primary pointer-events-none"><Shield size={240} /></div>
                <h3 className="text-3xl font-display font-bold text-white mb-6 italic leading-tight">
                  "Unsere Vision ist es, die Versicherungsthemen von Startups so weit zu übernehmen, dass sie sich voll auf ihr Startup und Innovation konzentrieren können."
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white/60">
                    <Star size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Team FoundersCover</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">Mülheim an der Ruhr · Deutschland</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRAND ARCHITECTURE */}
      <section className="py-16 md:py-32 px-6 bg-surface/20 border-y border-white/5">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 glass p-10 rounded-[3rem] border-white/10">
              <div className="flex items-center gap-6 mb-12">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary border-primary/30">
                    <Shield size={32} />
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase">FoundersCover</span>
                </div>
                <div className="h-px w-12 bg-white/10"></div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-white/40 border-white/10">
                    <Star size={32} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-600 uppercase">VersiFlex</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Maximale Transparenz</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                FoundersCover ist ein Online-Service der VersiFlex Versicherungsmakler GmbH. FoundersCover bildet die Schnittstelle für Startups und fungiert als Marketingkanal – mit passenden Inhalten, Prozessen und Startup-Tempo. VersiFlex liefert im Hintergrund das Know-how und die rechtliche Sicherheit eines etablierten Maklerhauses.
              </p>
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                <p className="text-xs text-primary font-medium flex gap-2">
                  <Info size={16} /> Operativ im Hintergrund unterstützt durch VersiFlex Versicherungsmakler GmbH.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <SectionTitle title="Hinter den Kulissen: FoundersCover x VersiFlex" />
              <p className="text-slate-400 text-lg leading-relaxed">
                Hinter FoundersCover steckt eine bewusste strategische Entscheidung von VersiFlex: Der Aufbau spezialisierter Online-Services.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Wir glauben nicht an "einer für alles". Jede Branche hat eigene Risiken. Durch die Konzentration auf Startups können wir Research und Prozess-Design so abstimmen, dass ihr keine Standardlösungen bekommt, sondern exakt das, was für euer Modell (SaaS, E-Com, Hardware etc.) nötig ist.
              </p>
              <div className="pt-6">
                <Button to="https://outlook.office.com/book/Lassunssprechen@versiflex.de/" variant="secondary">Lerne uns kennen</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRINZIPIEN GRID */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-content mx-auto">
          <SectionTitle
            title="Unser Prinzip: Nische statt Standard"
            subtitle="Warum wir erst recherchieren und dann beraten. Unser Weg zu eurem individuellen Risk-Management."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Search />, title: 'Intensive Recherche', desc: 'Wir analysieren laufend neue Startup-Modelle und regulatorische Anforderungen (z.B. Cyber-Haftung in Enterprise-Verträgen).' },
              { icon: <MessageSquare />, title: 'Echte Gespräche', desc: 'Wir hören unseren Startups zu. Nur wer die Schmerzpunkte kennt, kann die richtigen Prioritäten setzen.' },
              { icon: <Zap />, title: 'Laufende Optimierung', desc: 'Kein Setup ist für die Ewigkeit. Wir optimieren eure Deckung proaktiv bei jedem Meilenstein eurer Reise.' }
            ].map((p, i) => (
              <div key={i} className="glass p-10 rounded-[3rem] border-white/5 group hover:border-primary/40 transition-all">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-8 border border-white/10 group-hover:bg-primary group-hover:text-black transition-all">
                  {React.cloneElement(p.icon as React.ReactElement, { size: 28 })}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{p.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WAS STARTUPS DAVON HABEN */}
      <section className="py-16 md:py-32 px-6 bg-surface/10">
        <div className="max-w-content mx-auto">
          <SectionTitle title="Was Startups davon haben" subtitle="Zahlen sind gut, Ergebnisse sind besser. Das ist unser Versprechen an euch." centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                'Zeit zurückgewinnen für das Kerngeschäft',
                'Absolute Klarheit durch Must-have / Later Logik',
                'Maximale Geschwindigkeit',
                'Volle Nachweisfähigkeit gegenüber Enterprise-Kunden',
                'Audit-Ready Status für jede Finanzierungsrunde',
                'Persönliche Betreuung statt Callcenter-Warteschleife',
                'Digitale Dokumentenpflege in der KundenApp'
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-white font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="glass p-12 rounded-[4rem] border-white/5 flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 -z-10 blur-3xl rounded-full translate-y-1/2"></div>
              <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary mb-10 border border-primary/20">
                <Briefcase size={40} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-6 tracking-tight">Euer Risk-Management Partner</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                Wir sehen uns nicht als Verkäufer, sondern als externer Teil eures Finance- & Operations-Teams. Nachhaltigkeit in der Beziehung ist unser höchstes Gut.
              </p>
              <Button to="https://outlook.office.com/book/Lassunssprechen@versiflex.de/" variant="secondary" className="px-10">Risiko-Check buchen</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. UNSER VERSPRECHEN */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 glass rounded-[3rem] border-white/5 text-center">
              <h4 className="text-primary font-bold uppercase text-[10px] tracking-widest mb-6">Versprechen 01</h4>
              <h3 className="text-2xl font-bold text-white mb-4">Klarheit</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Kein Fachchinesisch. Wir erklären Risiken so, dass ihr fundierte Entscheidungen treffen könnt.</p>
            </div>
            <div className="p-10 glass rounded-[3rem] border-white/5 text-center">
              <h4 className="text-secondary font-bold uppercase text-[10px] tracking-widest mb-6">Versprechen 02</h4>
              <h3 className="text-2xl font-bold text-white mb-4">Tempo</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Wir arbeiten so, wie ihr es wünscht.</p>
            </div>
            <div className="p-10 glass rounded-[3rem] border-white/5 text-center">
              <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-6">Versprechen 03</h4>
              <h3 className="text-2xl font-bold text-white mb-4">Betreuung</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Von der Seed-Phase bis zum Exit sind wir an eurer Seite. Proaktiv und verlässlich.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-16 md:py-32 px-6 bg-surface/10">
        <div className="max-w-3xl mx-auto">
          <SectionTitle title="Häufige Fragen zu uns" centered />
          <div className="space-y-4">
            {aboutFaqs.map((faq, i) => (
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
              Startet eure Risiko- <br className="hidden md:block" />
              Analyse heute.
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button to="https://outlook.office.com/book/Lassunssprechen@versiflex.de/" variant="secondary" className="h-16 px-14">Risiko-Check buchen (20 Min)</Button>
            </div>
            <p className="mt-14 text-slate-500 font-display font-bold text-[10px] uppercase tracking-[0.4em] opacity-80">Qualität + Schnelligkeit · In 20 Minuten volle Klarheit</p>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default UeberUns;
