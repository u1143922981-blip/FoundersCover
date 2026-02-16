
import { Benefit, FAQItem, Module, StartupSegment, Step } from './types';

// ... (Existing constants like BENEFITS, SEGMENTS, MODULES, etc. remain unchanged)

export const BENEFITS: Benefit[] = [
  {
    title: 'Must-have / Later Prinzip',
    description: 'Strategisches Risikomanagement: Wir priorisieren konsequent. Du erfährst, was du für die aktuelle Phase benötigst – und was dich bei Wachstum in den nächsten Startup-Phasen erwartet.',
    icon: 'Target'
  },
  {
    title: 'Startup-Tempo',
    description: 'Durch interne Prozesse, die wir laufend optimieren, reduzieren wir deine Wartezeit. Wir implementieren deine individuellen Policen digital in deiner digitalen Versicherungsakte.',
    icon: 'Zap'
  },
  {
    title: 'Audit-Proof & VC-Ready',
    description: 'Unsere Konzepte sind Due-Diligence-optimiert und erfüllen die strengen Compliance-Standards internationaler Venture Capitalists.',
    icon: 'Shield'
  },
  {
    title: 'Klartext statt Versicherungsdeutsch',
    description: 'Expertenberatung auf Augenhöhe: Wir sprechen die Sprache der Startups. Klarer Output für dein Startup.',
    icon: 'FileText'
  },
  {
    title: 'Inhouse-Effizienz',
    description: 'Durch optimierte interne Prozesse garantieren wir maximale Geschwindigkeit bei höchster Präzision in der Beratungsqualität.',
    icon: 'Zap'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Wie verdient ihr eigentlich euer Geld?',
    answer: 'Wir arbeiten als Versicherungsmakler. Das bedeutet, wir erhalten eine Courtage von den Versicherungsgesellschaften. Für dich als Startup entstehen durch unsere Beratung keine Zusatzkosten – die Prämien sind identisch mit den Direktpreisen der Versicherer.'
  },
  {
    question: 'Wie schnell geht die Umsetzung bei euch?',
    answer: 'Sobald wir uns für ein Konzept entschieden haben, dauert die digitale Policierung meist weniger als 24 Stunden. Wir wissen, dass im Startup-Tempo oft "Gestern" die Deadline war.'
  },
  {
    question: 'Macht ihr auch eine Bestandsanalyse meiner alten Versicherungen?',
    answer: 'Ja, absolut. Im Risiko-Check schauen wir uns auch bestehende Verträge an, prüfen sie auf Redundanzen oder Deckungslücken und optimieren diese im Rahmen unseres Must-have-Prinzips.'
  },
  {
    question: 'Helft ihr bei B2B-Kundenanforderungen oder Nachweisen?',
    answer: 'Das ist einer unserer Kernvorteile. Wenn dein neuer Enterprise-Kunde eine Haftpflichtbestätigung mit spezifischen Summen verlangt, erstellen wir diese oft innerhalb von Minuten direkt über die App.'
  },
  {
    question: 'Was ist wirklich Must-have in meiner Phase?',
    answer: 'Das hängt von deinem Geschäftsmodell ab. Ein Solo-Founder im E-Com braucht andere Prioritäten als ein VC-finanziertes SaaS-Team. Im Risiko-Check legen wir genau das fest.'
  },
  {
    question: 'Wie ändert Funding die Prioritäten?',
    answer: 'Mit Investoren an Bord steigt die persönliche Haftung der Geschäftsführung. Eine D&O-Versicherung wird hier meist vom Investor im Beteiligungsvertrag (SHA) zwingend gefordert.'
  },
  {
    question: 'Ab wann lohnen sich bAV/bKV als Benefits?',
    answer: 'Typischerweise ab dem Zeitpunkt, an dem das Team wächst (Phase 2/3). Es ist ein mächtiges Tool für das Recruiting und die Bindung von Top-Talenten, oft steuerlich gefördert.'
  },
  {
    question: 'Habe ich einen festen Ansprechpartner?',
    answer: 'Ja. Bei uns gibt es kein anonymes Callcenter. Du hast einen festen Berater, der dein Business-Modell kennt und dich von Seed bis Exit begleitet.'
  }
];

export const MODULES: Module[] = [
  { title: 'Betriebshaftpflicht', category: 'Haftung', description: 'Schützt dein Startup bei Personen- und Sachschäden, die im Alltag oder beim Kunden entstehen.' },
  { title: 'Vermögensschadenhaftpflicht', category: 'Haftung', description: 'Deckt finanzielle Schäden ab, die Kunden durch Beratungs-, Software- oder Dienstleistungsfehler erleiden können.' },
  { title: 'Cyber Versicherung', category: 'Eigenschutz', description: 'Schützt bei Cyberangriffen, Datenvorfällen und den Kosten für Wiederherstellung, Kommunikation und IT-Forensik.' },
  { title: 'D&O (Management)', category: 'Haftung', description: 'Sichert Geschäftsführung und Organe ab, wenn persönliche Haftungsansprüche wegen Managemententscheidungen entstehen.' },
  { title: 'Rechtsschutz', category: 'Recht', description: 'Übernimmt Anwalts- und Verfahrenskosten bei typischen Streitfällen, z. B. Verträge, Arbeit oder IP.' },
  { title: 'Betriebliche Vorsorge', category: 'Mitarbeiter', description: 'Versicherungslösungen wie bAV und bKV, um Benefits zu stärken und Mitarbeiter langfristig zu binden.' }
];

export const SEGMENTS: StartupSegment[] = [
  { title: 'SaaS & Software', description: 'IP-Schutz, SLA-Haftung und globale Skalierung.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600' },
  { title: 'Agenturen & Services', description: 'Projektverzug, Beratungsfehler und Subunternehmer-Risiken.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600' },
  { title: 'E-Commerce & Marketplaces', description: 'Logistik, Produkthaftung und Zahlungsrisiken.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600' },
  { title: 'AI & Data', description: 'Datenverarbeitung, Modellrisiken und Kunden-/Compliance-Anforderungen.', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600' }
];

export const BOOKING_STEPS: Step[] = [
  { id: 1, question: 'In welcher Phase befindet sich dein Startup?', options: ['Pre-Seed / Gründung', 'Seed Stage', 'Series A+', 'Bootstrapped & Profitable'] },
  { id: 2, question: 'Was ist dein aktueller Fokus?', options: ['VC-Requirements erfüllen', 'Haftung minimieren', 'Bestehenden Schutz prüfen', 'All-in-One Risikoanalyse'] },
  { id: 3, question: 'Teamgröße?', options: ['Nur Gründer', '1-10 Mitarbeiter', '11-50 Mitarbeiter', '50+ Mitarbeiter'] },
  { id: 4, question: 'Branche?', options: ['SaaS', 'E-Com', 'Fintech / Health', 'Service / Agentur'] },
  { id: 5, question: 'Umsatz (geschätzt p.a.)?', options: ['< 250k €', '250k - 1M €', '1M - 5M €', '> 5M €'] }
];

export const STARTUP_PHASES_DATA = [
  {
    id: 'gründung',
    title: 'Gründung',
    period: '0–24 Monate',
    desc: 'Pre-Seed bis Seed. Fokus auf Produktbau, erste Kunden und Funding-Vorbereitung.',
    mustHaves: [
      'Haftungsabsicherung (Basisschutz)',
      'D&O (Management-Haftung bei Funding)',
      'Cyber (bei datenlastigem Geschäftsmodell)',
      'IT-Haftpflicht (für erste B2B-Deals)'
    ],
    laters: [
      'Benefits für Mitarbeiter (bAV/bKV)',
      'Inventarversicherung (wenn Home Office)',
      'Hohe Deckungssummen für Ausland'
    ],
    triggers: [
      'Abschluss des Notartermins',
      'Erstes Investment von Kapitalgebern',
      'Unterschrift des ersten Kundenvertrags'
    ],
    scenarios: [
      { case: 'Solo-Founder (SaaS)', text: 'Kein Investor, Fokus auf Softwarebau. Prio: Cyber & IT-Haftpflicht, um Kunden Sicherheit zu geben.' },
      { case: 'Co-Founding Team (VC)', text: 'Mit Funding von Tag 1. Prio: D&O ist meist Pflicht im Investment-Vertrag (SHA).' }
    ]
  },
  {
    id: 'wachstum',
    title: 'Wachstum',
    period: 'Scale-up Phase',
    desc: 'Series A/B. Fokus auf Hiring, Prozess-Skalierung und größere Enterprise-Kunden.',
    mustHaves: [
      'Erweiterte D&O (höhere Summen)',
      'Umfassende Cyber & IT-Haftpflicht',
      'Rechtsschutz für Arbeitsrecht (Hiring)',
      'Elektronikversicherung für das Team'
    ],
    laters: [
      'Keyperson-Absicherung',
      'Internationale Standorte (US-Markteintritt)'
    ],
    triggers: [
      'Team wächst über 10+ Mitarbeiter',
      'Anmietung des ersten eigenen Büros',
      'Vorbereitung auf Series A Finanzierung'
    ],
    scenarios: [
      { case: 'Agentur skaliert', text: 'Mehrere Projekte gleichzeitig, Subunternehmer involviert. Prio: Vermögensschadenhaftpflicht & Projektverzug.' },
      { case: 'B2B SaaS Growth', text: 'Erste Enterprise-Kunden fordern hohe Versicherungsnachweise (Certificate of Insurance).' }
    ]
  },
  {
    id: 'scaleup',
    title: 'Scale-up / Exit',
    period: 'Series C bis Exit',
    desc: 'Hohe Verantwortung, 50+ Mitarbeiter, internationale Expansion und Exit-Vorbereitung.',
    mustHaves: [
      'Recruiting-Benefits (bAV/bKV)',
      'Komplexe Directors & Officers Deckung',
      'Globaler Schutz für IP & Daten',
      'Betriebliche Krankenversicherung (bKV)'
    ],
    laters: [
      'Individuelle Spezialrisiken (M&A Versicherungen)'
    ],
    triggers: [
      'Expansion in neue Ländermärkte',
      'Vorbereitung auf Due Diligence / Exit',
      'Fokus auf Employer Branding (Benefits)'
    ],
    scenarios: [
      { case: 'Enterprise Scale', text: '50+ Mitarbeiter. Benefits wie bAV werden zur Pflicht für die Attraktivität im War for Talent.' },
      { case: 'Exit / IPO Focus', text: 'Detaillierte Prüfung aller Policen im Rahmen der Legal Due Diligence durch Käufer.' }
    ]
  }
];

export const SERVICE_PROCESS = [
  {
    title: 'Erstgespräch',
    desc: 'Wir lernen dein Startup und eure Geschichte kennen. Wir erfassen relevante Infos und klären erste Absicherungswünsche.',
    need: 'Eure Story & aktuelle Struktur',
    get: 'Weiteren Fahrplan'
  },
  {
    title: 'Marktausschreibung',
    desc: 'Wir finden aus über 100 Versicherungsgesellschaften das passende Konzept für euer Modell.',
    need: 'Relevante KPIs (Umsatz, Team)',
    get: 'Vergleich der besten Tarife'
  },
  {
    title: 'Zweitgespräch',
    desc: 'Wir präsentieren die Lösungen, klären alle Fragen und priorisieren gemeinsam nach dem Must-have Prinzip.',
    need: '20 Min eurer Zeit',
    get: 'Klares Entscheidungsprotokoll'
  },
  {
    title: 'Zusammenarbeit',
    desc: 'Einfache Beauftragung durch Maklerdokumente. Durch Unterschrift der Maklerdokumente übernehmen wir die komplette Betreuung eurer Versicherungssysteme.',
    need: 'Unterschriebene Maklerdokumente',
    get: 'Bestätigung der Zusammenarbeit'
  },
  {
    title: 'Onboarding KundenApp',
    desc: 'Deine digitale Schaltzentrale für Dokumente, Kommunikation und schnelle Schadenmeldung.',
    need: 'App-Download',
    get: 'Zugang zu unserer App'
  },
  {
    title: 'Laufende Betreuung',
    desc: 'Dein fester Berater verwaltet alle Anliegen und passt den Schutz an euer Wachstum an.',
    need: 'Regelmäßiger KPI-Check',
    get: 'Skalierbare Sicherheit'
  }
];

export const COMPARISON = [
  { label: 'Geschwindigkeit', standard: 'Wochenlange Wartezeiten', founders: 'Policierung in 24h' },
  { label: 'Fokus', standard: 'Verkauf von Paketen', founders: 'Must-have Priorisierung' },
  { label: 'Kommunikation', standard: 'Callcenter / Papier', founders: 'Persönlich / KundenApp' },
  { label: 'Audit-Readiness', standard: 'Oft lückenhaft', founders: 'Standards erfüllt' },
  { label: 'Transparenz', standard: 'Verstecktes Jargon', founders: 'Klare Gründer-Sprache' },
  { label: 'Schadenmeldung', standard: 'Komplizierte Formulare', founders: 'Direkt via KundenApp' }
];

export const PHASE_COMPARISON = [
  { label: 'Ansatz', standard: 'Gießkannen-Prinzip', founders: 'Phasen-spezifisch' },
  { label: 'Priorisierung', standard: 'Alles oder Nichts', founders: 'Must-have / Later' },
  { label: 'Anpassung', standard: 'Statisch (jährlich)', founders: 'Dynamisch' },
  { label: 'Beratung', standard: 'Allgemein-Haftung', founders: 'Startup-zentriert' },
  { label: 'Output', standard: 'Dicke PDF-Ordner', founders: 'Alle Risiken benannt' }
];

// --- NEW KNOWLEDGE DATA ---

export const KNOWLEDGE_B2B_CLUSTER = [
  { title: 'Versicherungsnachweis für Kunden', teaser: 'Was Startups wirklich liefern müssen, wenn Enterprise-Kunden Zertifikate fordern.', label: '5 Min lesen', type: 'Guide' },
  { title: 'Vendor Questionnaires meistern', teaser: 'So antwortest du im Versicherungsteil der Sicherheits-Fragebögen sauber und VC-ready.', label: '7 Min lesen', type: 'Checkliste' },
  { title: 'Haftungs-Klauseln in SLAs', teaser: 'Was IT-Haftung und Vermögensschäden für deine B2B-Verträge bedeuten.', label: '4 Min lesen', type: 'Guide' },
  { title: 'Cyber-Anforderungen verstehen', teaser: 'Wenn Kunden Cyber-Schutz fordern: pragmatisch prüfen statt blind kaufen.', label: '6 Min lesen', type: 'Expert-Insight' },
  { title: 'Deckungssummen einordnen', teaser: '1 Mio, 5 Mio oder mehr? Wie du Kundenforderungen richtig bewertest.', label: '3 Min lesen', type: 'Guide' },
  { title: 'B2B Deals ohne Reibung', teaser: 'Dein Versicherungs-Proof als Teil des Sales-Prozesses nutzen (inkl. Vorlage).', label: 'Template', type: 'Vorlage' }
];

export const KNOWLEDGE_PHASES_CLUSTER = [
  { title: 'Gründung: Must-have vs. Later', teaser: 'Das digitale Setup, das dich schützt, aber nicht finanziell ausbremst.', label: '5 Min lesen', type: 'Guide' },
  { title: 'Wachstum & Hiring Risiken', teaser: 'Welche Versicherungen relevant werden, sobald das Team über 10 Leute wächst.', label: '4 Min lesen', type: 'Fahrplan' },
  { title: 'Scale-up Management-Risiken', teaser: 'Professionalisierung von D&O und Cyber für Audit-Readiness und Due Diligence.', label: '8 Min lesen', type: 'Expert-Insight' },
  { title: 'Solo-Founder vs. Team Funding', teaser: 'Wie sich Prioritäten verschieben, sobald Investoren an Bord sind.', label: '5 Min lesen', type: 'Guide' },
  { title: 'Remote-Team & Freelancer', teaser: 'Besonderheiten bei dezentralen Teams und Haftung externer Partner.', label: '6 Min lesen', type: 'Guide' }
];

export const KNOWLEDGE_MODULES_CLUSTER = [
  { title: 'Betriebshaftpflicht für Startups', teaser: 'Wann sie wirklich relevant ist und warum Office-Schutz erst der Anfang ist.', label: '4 Min lesen', type: 'Modul-Guide' },
  { title: 'Vermögensschaden (PI) Erklärer', teaser: 'Der Kernschutz für SaaS, Agenturen und digitale Services einfach erklärt.', label: '5 Min lesen', type: 'Modul-Guide' },
  { title: 'Cyberversicherung Check', teaser: 'Was sie typischerweise abdeckt – und was Startups oft falsch einschätzen.', label: '6 Min lesen', type: 'Checkliste' },
  { title: 'D&O: Schutz für Gründer', teaser: 'Ab wann die Absicherung deines Privatvermögens strategisch Sinn macht.', label: '5 Min lesen', type: 'Modul-Guide' },
  { title: 'Rechtsschutz: Ja oder Nein?', teaser: 'Wann sich die Übernahme von Anwaltskosten lohnt – und wann du sparen kannst.', label: '4 Min lesen', type: 'Guide' },
  { title: 'Inventar & Equipment', teaser: 'Schutz für teure Hardware-Setups und dezentrale Office-Ausstattung.', label: '3 Min lesen', type: 'Modul-Guide' }
];

export const GLOSSARY_TERMS = [
  { term: 'Betriebshaftpflicht (BHV)', definition: 'Schützt Startups vor den finanziellen Folgen von Personen- und Sachschäden, die während der Betriebstätigkeit entstehen.' },
  { term: 'Vermögensschadenhaftpflicht (IT-Haftpflicht / PI)', definition: 'Der wichtigste Schutz für IT-Startups bei finanziellen Verlusten Dritter durch Programmierfehler oder fehlerhafte Beratung.' },
  { term: 'Cyber-Versicherung', definition: 'Sichert Kosten für Forensik, Datenwiederherstellung und Betriebsunterbrechung nach Hackerangriffen oder Datenlecks.' },
  { term: 'D&O (Directors & Officers)', definition: 'Organhaftpflichtversicherung: Schirmt das Privatvermögen von Gründern und Management gegen Haftungsansprüche bei Pflichtverletzungen ab.' },
  { term: 'Rechtsschutzversicherung', definition: 'Übernimmt Prozesskosten und Anwaltshonorare bei Rechtsstreitigkeiten in Bereichen wie Arbeits- oder Vertragsrecht.' },
  { term: 'Versicherungsnachweis (CoI)', definition: 'Certificate of Insurance: Offizielles Dokument für Investoren und Enterprise-Kunden zur Bestätigung des Versicherungsschutzes.' }
];

export const KNOWLEDGE_FAQS: FAQItem[] = [
  {
    question: 'Wie nutze ich den Wissens-Hub am besten?',
    answer: 'Orientiere dich an deiner aktuellen Phase oder einer konkreten Herausforderung (z.B. Kundenforderung). Unsere Guides sind so aufgebaut, dass sie in weniger als 10 Minuten eine klare Entscheidungshilfe bieten.'
  },
  {
    question: 'Sind die Inhalte allgemein oder startup-spezifisch?',
    answer: 'Alle Inhalte sind zu 100% auf die deutsche Startup-Landschaft zugeschnitten. Wir ignorieren klassische Versicherungs-Themen, die für Tech-Unternehmen irrelevant sind.'
  },
  {
    question: 'Wie komme ich von einem Guide zur individuellen Lösung?',
    answer: 'Jeder Guide ist die Basis. Um die Theorie auf dein Startup zu übertragen, buchst du den 20-minütigen Risiko-Check. Dort priorisieren wir live für dein Modell.'
  }
];
