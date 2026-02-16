
import React, { useState } from 'react';
import { Header, Footer, MobileStickyCTA } from '../components/Layout';
import { Button, SectionTitle } from '../components/UI';
import {
  Shield,
  Search,
  HelpCircle,
  MessageSquare,
  Zap,
  Lock,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  FileText
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Alle');

  const categories = ['Alle', 'Allgemein', 'Produkte'];

  const faqData = [
    // 3A) Tab: ALLGEMEIN
    {
      category: 'Allgemein',
      question: 'Ist FoundersCover ein Makler oder eine Versicherung?',
      answer: 'FoundersCover ist ein Online-Service der VersiFlex Versicherungsmakler GmbH. Wir vergleichen Tarife und begleiten euch als unabhängiger Makler.'
    },
    {
      category: 'Allgemein',
      question: 'Wie verdient ihr Geld – kostet mich die Beratung extra?',
      answer: 'In der Regel werden wir über die Courtage der Versicherung vergütet. Für euch entstehen dabei meist keine zusätzlichen Beratungskosten.'
    },
    {
      category: 'Allgemein',
      question: 'Wie läuft das Erstgespräch ab?',
      answer: 'In 20 Minuten klären wir euren Status, euer Modell und eure Risiken. Danach bekommt ihr eine klare Priorisierung (Must-have/Later).'
    },
    {
      category: 'Allgemein',
      question: 'Wie schnell bekomme ich Ergebnisse?',
      answer: 'Nach dem Check wisst ihr, was als Nächstes zu tun ist. Angebote/Umsetzung hängen vom Produkt ab, wir halten die Schritte so schlank wie möglich.'
    },
    {
      category: 'Allgemein',
      question: 'Seid ihr unabhängig?',
      answer: 'Ja. Wir vergleichen passende Lösungen über viele Versicherer und handeln im Auftrag eures Startups.'
    },
    {
      category: 'Allgemein',
      question: 'Welche Infos braucht ihr von uns?',
      answer: 'Kurz: Geschäftsmodell, Teamgröße, Umsatz/Runway, Kundentypen, Verträge/Deals, Länder/Expansion. Den Rest führen wir strukturiert durch.'
    },
    {
      category: 'Allgemein',
      question: 'Arbeitet ihr deutschlandweit und digital?',
      answer: 'Ja. Beratung, Dokumente und Kommunikation laufen digital; Termine nach Bedarf.'
    },
    {
      category: 'Allgemein',
      question: 'Bekomme ich einen festen Ansprechpartner?',
      answer: 'Ja. Ihr habt einen festen Kontakt für Fragen, Anpassungen und Schadenfälle.'
    },
    {
      category: 'Allgemein',
      question: 'Was passiert, wenn wir wachsen oder Funding bekommen?',
      answer: 'Dann passen wir Deckung und Bausteine an neue Anforderungen an (Team, Umsatz, Kunden, Länder, Compliance).'
    },
    {
      category: 'Allgemein',
      question: 'Wie transparent sind eure Empfehlungen?',
      answer: 'Wir erklären Optionen, Unterschiede, Ausschlüsse und Kosten klar. Ihr entscheidet informiert.'
    },
    {
      category: 'Allgemein',
      question: 'Könnt ihr bestehende Policen prüfen und optimieren?',
      answer: 'Ja. Wir prüfen Deckung, Lücken und Preis-Leistung und schlagen konkrete Verbesserungen vor.'
    },
    {
      category: 'Allgemein',
      question: 'Unterstützt ihr bei Vertragsnachweisen für Kunden (COI)?',
      answer: 'Ja. Wir helfen bei Nachweisen/Bestätigungen für B2B-Deals und Enterprise-Anforderungen.'
    },
    {
      category: 'Allgemein',
      question: 'Wie läuft Schadenmeldung und Abwicklung?',
      answer: 'Ihr meldet den Fall bei uns, wir koordinieren die Abwicklung mit Versicherer/Dienstleistern und halten euch auf dem Laufenden.'
    },
    {
      category: 'Allgemein',
      question: 'Kann ich kündigen oder wechseln?',
      answer: 'Ja. Wir unterstützen beim Wechsel und achten auf Fristen, Übergänge und nahtlosen Schutz.'
    },
    {
      category: 'Allgemein',
      question: 'Für welche Startups passt ihr besonders?',
      answer: 'Für Teams mit Wachstum, B2B-Deals, Compliance-Anforderungen oder komplexen Risiken (IT, Beratung, Daten, Haftung).'
    },

    // 3B) Tab: PRODUKTE
    {
      category: 'Produkte',
      question: 'Welche Versicherungen braucht ein Startup wirklich?',
      answer: 'Das hängt von Modell, Kunden und Phase ab. Häufig starten Teams mit Haftung, IT/PI und Cyber; Benefits kommen später.'
    },
    {
      category: 'Produkte',
      question: 'Was ist der Unterschied zwischen Betriebshaftpflicht und IT-Haftpflicht/PI?',
      answer: 'Betriebshaftpflicht deckt Personen-/Sachschäden ab. IT-Haftpflicht/PI schützt vor finanziellen Schäden durch Fehler in Software/Services.'
    },
    {
      category: 'Produkte',
      question: 'Wann brauche ich eine Vermögensschadenhaftpflicht (VSH)?',
      answer: 'Sobald ihr Beratungs-, Dienstleistungs- oder Software-Risiken habt und Kunden Vermögensschäden geltend machen können – besonders im B2B-Umfeld.'
    },
    {
      category: 'Produkte',
      question: 'Brauchen Startups eine D&O?',
      answer: 'Oft ja, spätestens mit Funding/Beirat/Investoren. D&O schützt Organe (z. B. GF) bei Management-Entscheidungen und Haftungsansprüchen.'
    },
    {
      category: 'Produkte',
      question: 'Was deckt eine Cyberversicherung ab?',
      answer: 'Typisch: Incident-Response, Forensik, Datenwiederherstellung, Benachrichtigung, Betriebsunterbrechung sowie Haftpflicht bei Datenschutzvorfällen.'
    },
    {
      category: 'Produkte',
      question: 'Welche Deckungssumme ist sinnvoll?',
      answer: 'Abhängig von Umsatz, Kundengröße, Verträgen und Risiko. Für Enterprise-Deals sind oft höhere Summen und klare Nachweise nötig.'
    },
    {
      category: 'Produkte',
      question: 'Was ist in Policen häufig ausgeschlossen?',
      answer: 'Beispielhaft: vorsätzliches Handeln, bekannte Vorschäden, bestimmte Vertragsstrafen. Wir prüfen Ausschlüsse passend zu eurem Modell.'
    },
    {
      category: 'Produkte',
      question: 'Wie wirken sich Enterprise-Verträge auf Versicherungen aus?',
      answer: 'Oft werden Mindestdeckung, Zusatzklauseln und COIs verlangt. Wir richten Deckung und Nachweise darauf aus.'
    },
    {
      category: 'Produkte',
      question: 'Wie schnell kann Schutz aktiv werden?',
      answer: 'Je nach Produkt/Underwriting unterschiedlich. Wir beschleunigen den Prozess durch vollständige Unterlagen und klare Risikodarstellung.'
    },
    {
      category: 'Produkte',
      question: 'Was ist Rechtsschutz für Startups – lohnt sich das?',
      answer: 'Er übernimmt Kosten bei Streitigkeiten (z. B. Verträge, Arbeit, IP). Sinnvoll bei Hiring, Kundenverträgen und wachsender Komplexität.'
    },
    {
      category: 'Produkte',
      question: 'Brauchen wir eine Elektronik-/Inhaltsversicherung?',
      answer: 'Relevant bei teurem Equipment, Büro/Servern oder höherem Diebstahl-/Schadenrisiko. Für reine Software-Teams oft später.'
    },
    {
      category: 'Produkte',
      question: 'Was sind bAV und bKV – ab wann lohnt sich das?',
      answer: 'Benefits werden bei Hiring/Retention wichtig. Sie erhöhen Attraktivität, oft mit planbaren Arbeitgeberkosten.'
    },
    {
      category: 'Produkte',
      question: 'Wie wirkt sich Remote-Work auf den Schutz aus?',
      answer: 'Je nach Police kann Home-Office besondere Anforderungen haben (Equipment, Haftung, Cyber-Hygiene). Wir passen die Bausteine an.'
    },
    {
      category: 'Produkte',
      question: 'Was kostet eine Startup-Versicherung?',
      answer: 'Abhängig von Branche, Umsatz, Team, Deckung und Historie. Wir vergleichen Angebote und optimieren Preis-Leistung.'
    },
    {
      category: 'Produkte',
      question: 'Können wir Produkte modular aufbauen (Must-have/Later)?',
      answer: 'Ja. Wir priorisieren nach Phase und Triggern (Funding, Hiring, Enterprise-Deal, Expansion).'
    }
  ];

  const filteredFaqs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'Alle' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* 1. HERO & SEARCH */}
      <section className="relative pt-32 pb-16 overflow-hidden px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/10 blur-[130px] rounded-full opacity-40"></div>
        </div>

        <div className="max-w-content mx-auto relative">
          <div className="inline-flex items-center gap-3 px-5 py-2 glass rounded-full text-[11px] font-bold text-primary mb-12 tracking-[0.25em] uppercase border-primary/20 fade-in-up">
            <HelpCircle size={14} fill="currentColor" /> Hilfe & FAQ
          </div>

          <h1 className="font-display font-bold text-4xl md:text-7xl text-white mb-8 leading-[1.05] tracking-tighter max-w-4xl mx-auto fade-in-up">
            Eure Fragen. <br /><span className="text-primary italic">Klare Antworten.</span>
          </h1>

          <div className="max-w-2xl mx-auto mt-12 relative fade-in-up">
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Wonach suchst du? (z.B. D&O, Kosten, B2B...)"
              className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-all text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* 2. CATEGORY CHIPS */}
      <section className="pb-16 px-6">
        <div className="max-w-content mx-auto flex flex-wrap justify-center gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${activeCategory === cat
                ? 'bg-primary text-black border-primary shadow-[0_0_15px_rgba(18,201,255,0.3)]'
                : 'text-slate-500 border-white/5 hover:border-white/20'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. FAQ LIST */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, i) => (
              <details key={i} className="group glass rounded-2xl p-8 cursor-pointer border-white/5 hover:border-primary/30 transition-all">
                <summary className="font-bold text-lg text-white flex justify-between items-center list-none">
                  <div className="flex gap-4 items-center">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest w-24 hidden sm:block">{faq.category}</span>
                    {faq.question}
                  </div>
                  <span className="transition-transform group-open:rotate-180 text-primary shrink-0 ml-4"><Zap size={20} /></span>
                </summary>
                <div className="mt-8 text-slate-400 leading-relaxed border-t border-white/5 pt-8">
                  {faq.answer}
                </div>
              </details>
            ))
          ) : (
            <div className="text-center py-20 glass rounded-3xl border-dashed border-white/10">
              <MessageSquare size={48} className="text-slate-700 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">Keine Treffer gefunden</h3>
              <p className="text-slate-500 mb-8">Probiere es mit anderen Stichworten oder buche direkt einen Call.</p>
              <Button onClick={() => setSearchQuery('')} variant="ghost">Suche zurücksetzen</Button>
            </div>
          )}
        </div>
      </section>

      {/* 4. FAST RESPONSE BLOCK */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-content mx-auto">
          <div className="glass p-12 rounded-[3rem] border-primary/20 bg-primary/5 flex flex-col justify-between max-w-xl mx-auto">
            <div>
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-8">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-6">Noch unsicher über die Prioritäten?</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Jedes Startup ist individuell. Statt dich durch endlose Texte zu wühlen, priorisieren wir im Risiko-Check live für dein Modell.
              </p>
            </div>
            <Button to="https://outlook.office.com/book/Lassunssprechen@versiflex.de/" variant="secondary" className="w-full">Risiko-Check buchen (20 Min)</Button>
          </div>
        </div>
      </section>

      {/* 5. TRUST STRIP */}
      <section className="py-16 border-y border-white/5 bg-surface/30">
        <div className="max-w-content mx-auto flex flex-wrap justify-center gap-x-20 gap-y-8 px-6 opacity-60">
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-white">100%</div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Unabhängig</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-white">100+</div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Versicherer</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-white">110%</div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Einsatz unseres Teams</div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-content mx-auto glass rounded-[4rem] p-16 md:p-28 text-center relative overflow-hidden border-white/10 shadow-[0_32px_128px_rgba(0,0,0,0.8)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/15 blur-[160px] -z-10 opacity-30"></div>

          <div className="relative z-10">
            <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary mx-auto mb-12 border border-primary/20">
              <Shield size={48} />
            </div>
            <h2 className="font-display font-bold text-3xl md:text-6xl text-white mb-12 tracking-tight leading-[1.1]">
              Keine weiteren Fragen? <br className="hidden md:block" />
              Dann los.
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button to="https://outlook.office.com/book/Lassunssprechen@versiflex.de/" variant="secondary" className="h-16 px-14">Risiko-Check buchen (20 Min)</Button>
            </div>
            <p className="mt-14 text-slate-500 font-display font-bold text-[10px] uppercase tracking-[0.4em] opacity-80">Klarer Output · Audit-Proof · Umsetzung optional</p>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default FAQ;
