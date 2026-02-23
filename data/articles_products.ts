
import { Article } from './types';

export const PRODUCTS_ARTICLES: Article[] = [
  {
    slug: 'betriebshaftpflicht-startups',
    title: 'Betriebshaftpflicht für Startups: Was ist abgedeckt – was nicht?',
    category: 'Versicherungsprodukte',
    type: 'guide',
    excerpt: 'Personen-/Sachschäden, Mietsachen, echte Praxisfälle – kurz erklärt.',
    readingTime: '6 Min',
    updatedAt: '12.02.2026',
    author: 'FoundersCover Team',
    heroTag: 'GUIDE',
    primaryKeyword: 'Betriebshaftpflicht Startup Kosten',
    secondaryKeywords: ['Haftpflicht Startup', 'Mietsachschäden', 'Personenschäden', 'Sachschäden'],
    content: `
      
      <p>Die Betriebshaftpflicht ist das Fundament. Sie deckt alles "Physische": Jemand verletzt sich im Büro (Personenschaden) oder ihr macht etwas kaputt (Sachschaden). Sie deckt NICHT: Programmierfehler, Bugs, Datenverlust (dafür braucht ihr die IT-Haftpflicht).</p>

      <h2>Warum das Thema wichtig ist</h2>
      <p>Ohne Haftpflicht haftet die GmbH (und im Zweifel der Gründer) unbegrenzt mit dem gesamten Vermögen. Ein einziger schwerer Personenschaden kann Millionen kosten. Zudem verlangen Vermieter (Office) fast immer einen Nachweis.</p>

      <h2>Was du konkret wissen musst</h2>
      <p>Sie deckt zwei Bereiche ab:</p>
      <ul>
        <li><strong>Personenschäden:</strong> Jemand verletzt sich durch euer Tun (oder in euren Räumen).</li>
        <li><strong>Sachschäden:</strong> Ihr macht etwas kaputt (z.B. gemietetes Office, Laptop des Kunden).</li>
      </ul>
      <p>Wichtig: Sie wehrt auch unberechtigte Ansprüche ab (passiver Rechtsschutz).</p>

      <h2>Typische Fehler & Missverständnisse</h2>
      <ul>
        <li><strong>Fehler:</strong> "Ich programmiere nur, ich kann keinen verletzen." Doch. Kunde stolpert über Kabel bei Präsentation. Akku im Laptop brennt.</li>
        <li><strong>Missverständnis:</strong> "Sie zahlt bei falschem Code." Nein! "Echte" Vermögensschäden sind hier ausgeschlossen.</li>
      </ul>

      <h2>Pragmatische Empfehlung (Must-have vs. Later)</h2>
      <ul>
        <li><strong>Must-have:</strong> Deckungssumme 3-5 Mio. € pauschal für Personen/Sachschäden. Einschluss von Mietsachschäden (fürs Office).</li>
        <li><strong>Later:</strong> Umweltschaden-Haftpflicht (für Tech-Startups meist irrelevant, außer BioTech/Hardware).</li>
      </ul>

      <h2>Checkliste: Ist die Police gut?</h2>
      <ul>
        <li>Deckungssumme min. 3 Mio. €?</li>
        <li>Mietsachschäden an Immobilien (Feuer/Wasser) bis voller Summe?</li>
        <li>Tätigkeitsschäden (Schäden an Sachen, die ihr bearbeitet) eingeschlossen?</li>
        <li>Weltweite Geltung (Dienstreisen)?</li>
        <li>Abhandenkommen von Schlüsseln (Code-Cards) versichert?</li>
      </ul>

      <h2>Mini-FAQ</h2>
      <h3>Gilt sie auch im Home Office?</h3>
      <p>Ja, moderne Policen decken betriebliche Tätigkeiten auch mobil oder im Home Office ab.</p>
      <h3>Ist Produkthaftung dabei?</h3>
      <p>Basis-Produkthaftung oft ja. Wichtig für Hardware-Startups: Erweiterte Produkthaftung prüfen!</p>
      <h3>Was kostet das?</h3>
      <p>Sehr günstig. Oft ab 150-250 € im Jahr für kleine Teams.</p>
      <h3>Brauche ich Privathaftpflicht zusätzlich?</h3>
      <p>Ja! Betriebshaftpflicht zahlt nur im Job. Privathaftpflicht nur privat. Trennt das sauber.</p>
      <h3>Zahlt sie bei grober Fahrlässigkeit?</h3>
      <p>Ja, meistens. Nur Vorsatz (Absicht) ist nie versicherbar.</p>
      <h3>Deckt sie Schäden an meinen eigenen Sachen?</h3>
      <p>Nein. Eigenschäden (mein Laptop fällt runter) sind Sache der Inhaltsversicherung.</p>


      <h2>Nächste Schritte</h2>
      <p>Checkt euren Mietvertrag: Welche Summe fordert der Vermieter? Passt eure Police an.</p>

      <h2>Passende Guides</h2>
      <ul>
        <li><a href="/wissen/vermoegensschadenhaftpflicht">Vermögensschadenhaftpflicht (IT)</a></li>
        <li><a href="/wissen/produkthaftung-betriebshaftpflicht">Produkthaftung</a></li>
      </ul>
    `,
    seo: {
      metaTitle: 'Betriebshaftpflichtversicherung für Startups erklärt | Guide',
      metaDescription: 'Personenschäden, Sachschäden, Mietsachen: Was deckt die Betriebshaftpflicht ab? Guide für Gründer.'
    }
  },
  {
    slug: 'vermoegensschadenhaftpflicht',
    title: 'Vermögensschadenhaftpflicht: Der wichtigste Schutz für Digital-Startups',
    category: 'Versicherungsprodukte',
    type: 'guide',
    excerpt: 'IT-Haftpflicht vs. Berufshaftpflicht: Wann Programmierfehler teuer werden.',
    readingTime: '6 Min',
    updatedAt: '14.02.2026',
    author: 'FoundersCover Team',
    heroTag: 'MUST-HAVE',
    primaryKeyword: 'Vermögensschadenhaftpflicht IT',
    secondaryKeywords: ['IT-Haftpflichtversicherung', 'Berufshaftpflicht IT', 'Programmierfehler Versicherung', 'SaaS Haftung'],
    content: `
      
      <p>Für SaaS, Agenturen und Berater ist das die "echte" Haftpflicht. Sie zahlt, wenn euer Fehler dem Kunden Geld kostet (Umsatzaufall, Datenverlust, Rechtsverletzung). Ohne diese Police seid ihr im B2B-Geschäft faktisch nicht vertragsfähig.</p>

      <h2>Warum das Thema wichtig ist</h2>
      <p>Ein Bug im Code legt den Shop des Kunden lahm. Er verliert 50.000€ Umsatz am Black Friday. Das ist kein Sachschaden (nichts ist kaputt gegangen), sondern ein reiner Vermögensschaden. Die normale Betriebshaftpflicht zahlt hier 0€. Ihr haftet privat/mit der GmbH.</p>

      <h2>Was du konkret wissen musst</h2>
      <p>Diese Versicherung (auch IT-Haftpflicht oder Berufshaftpflicht genannt) deckt:</p>
      <ul>
        <li><strong>Programmierfehler / Beratungsfehler:</strong> Ihr liefert nicht das vereinbarte Ergebnis.</li>
        <li><strong>Rechtsverletzungen:</strong> Ihr nutzt ein Bild/Code ohne Lizenz (IP-Verstoß).</li>
        <li><strong>Verzugsschäden:</strong> Projekt wird nicht fertig, Kunde verliert Geld.</li>
        <li><strong>Datenverlust:</strong> Ihr löscht aus Versehen die Datenbank.</li>
      </ul>

      <h2>Typische Fehler & Missverständnisse</h2>
      <ul>
        <li><strong>Fehler:</strong> Denken "Ich habe ja eine Haftpflicht" (und es ist nur die Betriebshaftpflicht).</li>
        <li><strong>Missverständnis:</strong> "Ich hafte nur für das, was ich verdiene." Nein, ihr haftet für den SCHADEN, den ihr anrichtet. Der kann 100x höher sein als euer Honorar.</li>
      </ul>

      <h2>Pragmatische Empfehlung (Must-have vs. Later)</h2>
      <ul>
        <li><strong>Must-have:</strong> IT-Haftpflicht mit "Offener Deckung" (alles versichert, was nicht ausgeschlossen ist). Summe min. 250k - 500k € für Freelancer, 1-3 Mio. € für Startups.</li>
        <li><strong>Must-have:</strong> Einschluss von "Verzögerungsschäden" und "Rechtsverletzungen".</li>
      </ul>

      <h2>Checkliste: IT-Haftpflicht-Qualität</h2>
      <ul>
        <li>Offene Deckung (All-Risk) vereinbart?</li>
        <li>Verstoß gegen Geheimhaltung (NDA) versichert?</li>
        <li>Lizenzrechtsverletzungen (Urheberrecht) dabei?</li>
        <li>Subunternehmer mitversichert?</li>
        <li>Rücktritt vom Projekt (Vergebliche Aufwendungen) gedeckt?</li>
        <li>Weltweite Deckung (USA/Kanada)?</li>
      </ul>

      <h2>Mini-FAQ</h2>
      <h3>Ist Berufshaftpflicht das gleiche wie Vermögensschadenhaftpflicht?</h3>
      <p>Im IT-Bereich ja. Die Begriffe werden synonym verwendet.</p>
      <h3>Was, wenn ich Agile arbeite (kein festes Lastenheft)?</h3>
      <p>Gute Policen decken auch Fehler in agilen Projekten ("bewegliches Leistungsspektrum").</p>
      <h3>Zahlt die Versicherung mein Honorar, wenn der Kunde nicht zahlt?</h3>
      <p>Nein. Das ist unternehmerisches Risiko. Sie wehrt aber Schadenersatzforderungen ab, die Kunden als "Ausrede" nutzen.</p>
      <h3>Wie hoch sollte die Summe sein?</h3>
      <p>Orientiert euch am maximalen Schaden, den ihr beim größten Kunden anrichten könnt (nicht am Auftragswert!).</p>
      <h3>Ist Open Source Software Nutzung versichert?</h3>
      <p>Ja, Verletzung von Lizenzbedingungen (GPL etc.) sollte drin sein.</p>
      <h3>Was kostet das?</h3>
      <p>Für Freelancer ab 300 €/Jahr. Für Startups ab 600 €/Jahr je nach Umsatz.</p>

      <h2>Nächste Schritte</h2>
      <p>Prüft eure Police: Steht da explizit "Vermögensschäden"? Wenn nein -> Handlungsbedarf.</p>

      <h2>Passende Guides</h2>
      <ul>
        <li><a href="/wissen/haftung-vertraege">Vertragshaftung</a></li>
        <li><a href="/wissen/subunternehmer-freelancer">Subunternehmer</a></li>
      </ul>
    `,
    seo: {
      metaTitle: 'Vermögensschadenhaftpflicht IT: Startups & Freelancer | Guide',
      metaDescription: 'Warum die Betriebshaftpflicht für IT-Startups nicht reicht. IT-Haftpflicht für Programmierfehler, Datenverlust und IP-Verletzungen.'
    }
  },
  {
    slug: 'cyberversicherung',
    title: 'Cyberversicherung: Wann der Hype gerechtfertigt ist',
    category: 'Versicherungsprodukte',
    type: 'guide',
    excerpt: 'Drittschäden vs. Eigenschäden, Incident Response, Lösegeld.',
    readingTime: '6 Min',
    updatedAt: '14.02.2026',
    author: 'FoundersCover Team',
    heroTag: 'TREND',
    primaryKeyword: 'Cyber Versicherung Leistungen',
    secondaryKeywords: ['Hackerangriff Versicherung', 'Ransomware Versicherung', 'Betriebsunterbrechung Cyber', 'Forensik Kosten'],
    content: `
      
      <p>Cyber-Versicherung ist die "Feuerversicherung des 21. Jahrhunderts". Sie hilft, wenn ihr gehackt werdet. Wichtig ist die Unterscheidung: Zahlt sie nur den Schaden beim Kunden (Haftpflicht-Teil) oder rettet sie EURE Firma (Eigenschaden-Teil)? Ihr braucht beides.</p>

      <h2>Warum das Thema wichtig ist</h2>
      <p>Ransomware (Verschlüsselungstrojaner) ist ein Milliarden-Geschäft. Es trifft nicht nur Konzerne, sondern gerade kleine Startups ("Low Hanging Fruits"). Wenn nichts mehr geht, zahlt die Versicherung die Profis, die euch retten.</p>

      <h2>Was du konkret wissen musst</h2>
      <p>Die 3 Säulen einer Cyber-Police:</p>
      <ul>
        <li><strong>Service (Assistance):</strong> 24/7 Notfall-Hotline, IT-Forensiker, PR-Berater, Krisenmanager.</li>
        <li><strong>Eigenschaden:</strong> Kosten für Datenwiederherstellung, Betriebsunterbrechung (Gewinnausfall), Erpressungsgelder (Lösegeld).</li>
        <li><strong>Drittschaden (Haftpflicht):</strong> Schadenersatz an Kunden, die Daten verloren haben oder von euch infiziert wurden.</li>
      </ul>

      <h2>Typische Fehler & Missverständnisse</h2>
      <ul>
        <li><strong>Fehler:</strong> "Wir haben Backups." Gut, aber Backups schützen nicht vor Datendiebstahl und Erpressung ("Wir veröffentlichen die Daten, wenn ihr nicht zahlt").</li>
        <li><strong>Missverständnis:</strong> "IT-Haftpflicht reicht." Die IT-Haftpflicht zahlt oft nur Drittschäden, aber NICHT eure eigenen Kosten wochenlanger Stillstände.</li>
      </ul>

      <h2>Pragmatische Empfehlung (Must-have vs. Later)</h2>
      <ul>
        <li><strong>Must-have:</strong> Cyber-Haftpflicht-Baustein (Drittschäden) in der IT-Haftpflicht.</li>
        <li><strong>Later:</strong> Volle Cyber-Police (Eigenschäden & Assistance), sobald ihr sensible Daten in Massen verarbeitet oder >500k Umsatz macht.</li>
      </ul>

      <h2>Checkliste: Cyber-Versicherbarkeit</h2>
      <p>Ohne diese Basics bekommt ihr heute keine Police mehr:</p>
      <ul>
        <li>2-Faktor-Authentifizierung (MFA) bei Fernzugriffen und Admin-Accounts?</li>
        <li>Offline-Backups (vor Verschlüsselung geschützt)?</li>
        <li>Regelmäßige Updates (Patch Management)?</li>
        <li>Virenscanner / EDR-Lösungen auf Endgeräten?</li>
        <li>Keine "End-of-Life" Software im Einsatz?</li>
      </ul>

      <h2>Mini-FAQ</h2>
      <h3>Zahlt die Versicherung Lösegeld (Ransom)?</h3>
      <p>Viele Policen decken das ("Erpressungskosten"), wenn es legal ist. Aber: Experten raten oft vom Zahlen ab.</p>
      <h3>Was ist "Social Engineering" (CEO Fraud)?</h3>
      <p>Betrüger täuschen Identität vor ("Überweise 50k an Lieferant X"). Gute Policen decken finanzielle Schäden hieraus.</p>
      <h3>Habe ich eine Wartezeit?</h3>
      <p>Oft ja (z.B. 8-12 Stunden Stillstand), bevor die "Betriebsunterbrechung" zahlt. Die Forensik zahlt sofort.</p>
      <h3>Deckt sie DSGVO-Bußgelder?</h3>
      <p>Theoretisch oft versichert, praktisch in Deutschland rechtlich schwierig. Rechnet nicht fest damit.</p>
      <h3>Wie bereitet man sich auf einen Hack vor?</h3>
      <p>Notfallplan: Wen rufen wir an? Versicherungsscheinnummer offline speichern (!). Sonst kommt ihr nicht dran, wenn alles verschlüsselt ist.</p>
      <h3>Was ist PCI-DSS Deckung?</h3>
      <p>Wichtig für E-Commerce, wenn ihr Kreditkartendaten verarbeitet. Strafen der Kreditkartenfirmen sind oft versicherbar.</p>

      <h2>Nächste Schritte</h2>
      <p>Füllt den IT-Sicherheitsfragebogen einmale ehrlich aus. Wo ihr "Nein" ankreuzt (z.B. MFA fehlt), habt ihr eine offene Flanke.</p>

      <h2>Passende Guides</h2>
      <ul>
        <li><a href="/wissen/cyber-datenschutz">Cyber & Datenschutz Basics</a></li>
        <li><a href="/wissen/vermoegensschadenhaftpflicht">IT-Haftpflicht</a></li>
      </ul>
    `,
    seo: {
      metaTitle: 'Cyberversicherung Vergleich: Leistungen & Kosten | Guide',
      metaDescription: 'Ransomware, Hackerschäden & Forensik. Was eine gute Cyber-Versicherung leistet und warum Backups allein nicht reichen.'
    }
  },
  {
    slug: 'do-management',
    title: 'D&O-Versicherung: Schutz für Geschäftsführer (und Private Assets)',
    category: 'Versicherungsprodukte',
    type: 'guide',
    excerpt: 'Innenhaftung vs. Außenhaftung, Investoren-Schutz, Nachhaftung.',
    readingTime: '5 Min',
    updatedAt: '14.02.2026',
    author: 'FoundersCover Team',
    heroTag: 'MUST-HAVE',
    primaryKeyword: 'D&O Versicherung Geschäftsführer',
    secondaryKeywords: ['Managerhaftpflicht', 'Innenhaftung GmbH', 'Gründerhaftung Privatvermögen', 'Directors & Officers'],
    content: `
      
      <p>Die D&O (Directors & Officers) ist die "Berufshaftpflicht für Chefs". Sie schützt Geschäftsführer davor, bei Fehlentscheidungen mit ihrem Privatvermögen zu haften. Investoren fordern sie fast immer, um das Management absichern.</p>

      <h2>Warum das Thema wichtig ist</h2>
      <p>Als GmbH-Geschäftsführer haftet ihr persönlich und unbegrenzt gegenüber der Gesellschaft ("Innenhaftung"), wenn ihr die "Sorgfalt eines ordentlichen Geschäftsmanns" verletzt. Eine einfache Fehlkalkulation reicht nicht, aber Compliance-Verstöße, unbezahlte Steuern oder Insolvenzverschleppung sind Sprengstoff.</p>

      <h2>Was du konkret wissen musst</h2>
      <p>Die D&O funktionert in zwei Richtungen:</p>
      <ul>
        <li><strong>Innehverhältnis (Die Firma verklagt euch):</strong> Häufigster Fall. Neuer Gesellschafter/Investor verklagt den CEO wegen Fehlern.</li>
        <li><strong>Außenverhältnis (Dritte verklagen euch):</strong> Finanzamt (Steuern), Sozialkassen, Lieferanten greifen auf Privatvermögen zu.</li>
      </ul>

      <h2>Typische Fehler & Missverständnisse</h2>
      <ul>
        <li><strong>Fehler:</strong> Denken "Wir sind Freunde, wir verklagen uns nicht." Beim Exit oder Insolvenz entscheidet oft der Insolvenzverwalter oder neue Investor. Freunde sind dann egal.</li>
        <li><strong>Missverständnis:</strong> "Ich habe doch die GmbH-Haftungsbeschränkung." Die gilt für die Firma, nicht für den Geschäftsführer bei Pflichtverletzungen!</li>
      </ul>

      <h2>Pragmatische Empfehlung (Must-have vs. Later)</h2>
      <ul>
        <li><strong>Must-have:</strong> Ab Series A (externe Investoren) oder bei Fremdgeschäftsführern. Deckungssumme 1 Mio. €+.</li>
        <li><strong>Later:</strong> Persönliche D&O (eigene Police nur für MICH, nicht von der Firma bezahlt). Luxus-Lösung für maximale Sicherheit.</li>
      </ul>

      <h2>Checkliste: Gute D&O</h2>
      <ul>
        <li>Verzicht auf Kündigung im Schadenfall?</li>
        <li>Abwehr von Ansprüchen bei Insolvenz (Insolvenzverwalter)?</li>
        <li>Nachmeldefrist (min. 5 Jahre) nach Ausscheiden?</li>
        <li>Gehaltsfortzahlung bei Aufrechnung?</li>
        <li>Reputationsschäden (PR-Berater) gedeckt?</li>
        <li>Kein Selbstbehalt (außer gesetzlich vorgeschrieben bei AGs)?</li>
      </ul>

      <h2>Mini-FAQ</h2>
      <h3>Wer zahlt die D&O?</h3>
      <p>Die Firma zahlt den Beitrag für ihre Organe (GFs). Es ist eine Firmenversicherung.</p>
      <h3>Gibt es einen Selbstbehalt?</h3>
      <p>Für GmbH-Geschäftsführer ist 0€ Selbstbehalt Standard. (Bei AG-Vorständen sind 10% Pflicht).</p>
      <h3>Haftet die D&O bei Insolvenzverschleppung?</h3>
      <p>Heikles Thema. Die Abwehrkosten (Anwalt, Gutachter) oft ja. Der Schaden selbst oft nein (Vorsatz). Prüft das Kleingedruckte!</p>
      <h3>Schützt sie auch leitende Angestellte?</h3>
      <p>Oft sind Prokuristen und leitende Angestellte mitversichert.</p>
      <h3>Was kostet eine D&O?</h3>
      <p>Für Startups (bis 5 Mio. Umsatz) ca. 500 – 1.500 € im Jahr.</p>
      <h3>Gilt sie rückwirkend?</h3>
      <p>Ja, oft gibt es eine "Rückwärtsdeckung" für Fehler, die vor Vertragsbeginn gemacht, aber noch nicht entdeckt wurden.</p>

      <h2>Nächste Schritte</h2>
      <p>Wenn VCs das Term Sheet schicken: D&O Klausel prüfen und Angebot einholen. Nicht erst beim Notar.</p>

      <h2>Passende Guides</h2>
      <ul>
        <li><a href="/wissen/series-a-hiring">Series A & D&O</a></li>
        <li><a href="/wissen/rechtsschutz-startups">Rechtsschutz</a></li>
      </ul>
    `,
    seo: {
      metaTitle: 'D&O Versicherung erklärt: Privathaftung für Geschäftsführer? | Guide',
      metaDescription: 'Managerhaftpflicht für Startups. Wann Geschäftsführer privat haften und wie die D&O-Versicherung schützt (Innenhaftung).'
    }
  },
  {
    slug: 'rechtsschutz-startups',
    title: 'Rechtsschutz: Kostenbremse für Anwälte und Gerichte',
    category: 'Versicherungsprodukte',
    type: 'guide',
    excerpt: 'Bausteine, Wartezeiten, Ausschlüsse – was die Firmenrechtsschutz leistet.',
    readingTime: '5 Min',
    updatedAt: '14.02.2026',
    author: 'FoundersCover Team',
    heroTag: 'GUIDE',
    primaryKeyword: 'Rechtsschutzversicherung Firmen',
    secondaryKeywords: ['Arbeitsrechtsschutz Kosten', 'Firmenrechtsschutz Selbstbehalt', 'Mietrechtsschutz Gewerbe'],
    content: `
      
      <p>Recht haben und Recht bekommen kostet Geld. Die Firmenrechtsschutz übernimmt Anwalts- und Gerichtskosten für die Firma. Essenziell bei Arbeitsrecht (Kündigungen) und Mietrecht. Wichtig: Sie zahlt NICHT die Schadenersatzsumme an den Gegner!</p>

      <h2>Warum das Thema wichtig ist</h2>
      <p>Ein Kündigungsschutzprozess durch zwei Instanzen kann schnell 10.000 € kosten. Wenn ihr 5 Mitarbeiter entlassen müsst, summiert sich das. Das Prozesskostenrisiko kann junge Firmen in die Knie zwingen, selbst wenn sie im Recht sind.</p>

      <h2>Was du konkret wissen musst</h2>
      <p>Die 4 Säulen:</p>
      <ul>
        <li><strong>Arbeits-Rechtsschutz:</strong> Streit mit Mitarbeitern (Kündigung, Zeugnis).</li>
        <li><strong>Verkehrs-Rechtsschutz:</strong> Unfälle mit Firmenwagen.</li>
        <li><strong>Immobilien-Rechtsschutz:</strong> Streit mit Vermieter (Nebenkosten, Kündigung).</li>
        <li><strong>Vertrags-Rechtsschutz:</strong> Streit um Verträge (Kunde zahlt nicht, Lieferant liefert Schrott) -> Oft teures Extra!</li>
      </ul>

      <h2>Typische Fehler & Missverständnisse</h2>
      <ul>
        <li><strong>Fehler:</strong> Glauben, Markenrechtsstreitigkeiten seien gedeckt. "Apple verklagt uns wegen Logo." Fast immer ausgeschlossen!</li>
        <li><strong>Missverständnis:</strong> Keine Wartezeit. Bei fast allen Bausteinen (außer Verkehr) müsst ihr 3 Monate gewartet haben, bevor ein Streit versichert ist.</li>
      </ul>

      <h2>Pragmatische Empfehlung (Must-have vs. Later)</h2>
      <ul>
        <li><strong>Must-have:</strong> Kombipaket Arbeits-/Verkehrs-/Mietrechtsschutz.</li>
        <li><strong>Later:</strong> Straf-Rechtsschutz (Spezial-Straf-RS) für Geschäftsführer bei Vorwurf von Straftaten (Betrug, Steuerhinterziehung).</li>
      </ul>

      <h2>Checkliste: Rechtsschutz-Fallen</h2>
      <ul>
        <li>Wartezeit (3 Monate) beachtet?</li>
        <li>Selbstbehalt sinnvoll gewählt (SB 250€ spart Beitrag)?</li>
        <li>Weltweiter Schutz? (Oft auf Europa begrenzt)</li>
        <li>Inkasso-Service inklusive? (Spart Zeit bei unbezahlten Rechnungen)</li>
        <li>Sind Streitigkeiten unter Gesellschaftern ausgeschlossen? (Fast immer ja!)</li>
      </ul>

      <h2>Mini-FAQ</h2>
      <h3>Zahlt die Versicherung meine Abfindung an den Mitarbeiter?</h3>
      <p>Nein! Sie zahlt nur Anwälte und Gericht. Die Abfindung müsst ihr selbst zahlen.</p>
      <h3>Kann ich den Vertrags-Rechtsschutz weglassen?</h3>
      <p>Ja, ist oft teuer. Viele Startups versichern nur Arbeits-/Verkehrs-/Mietrecht.</p>
      <h3>Hilft sie bei DSGVO-Bußgeldern?</h3>
      <p>Sie zahlt den Anwalt, um sich gegen das Bußgeld zu wehren. Das Bußgeld selbst zahlt sie nicht.</p>
      <h3>Brauche ich Verkehrs-Rechtsschutz ohne Firmenwagen?</h3>
      <p>Ja, oft gilt er auch für Mietwagen oder Autos der Mitarbeiter auf Dienstreisen.</p>
      <h3>Was ist "Vorgerichtliche Beratung"?</h3>
      <p>Viele Versicherer zahlen schon eine Erstberatung beim Anwalt, bevor es zum Prozess kommt.</p>
      <h3>Ist Steuer-Rechtsschutz dabei?</h3>
      <p>Oft ja, für Streitigkeiten vor Finanzgerichten (nicht für die Steuerberatung selbst).</p>

      <h2>Nächste Schritte</h2>
      <p>Prüft, ob ihr eine Inkasso-Dienstleistung braucht. Wenn ja, sucht einen Tarif, der das (kostenlos) inkludiert.</p>

      <h2>Passende Guides</h2>
      <ul>
        <li><a href="/wissen/rechtsschutz-alltag">Rechtsschutz im Alltag</a></li>
        <li><a href="/wissen/do-management">D&O</a></li>
      </ul>
    `,
    seo: {
      metaTitle: 'Gewerberechtsschutz für Startups: Arbeitsrecht & Verträge | Guide',
      metaDescription: 'Was die Rechtsschutzversicherung zahlt (und was nicht). Arbeitsrecht, Abfindungen, Mietrecht und Kostenrisiko erklärt.'
    }
  },
  {
    slug: 'mitarbeiterbindung',
    title: 'Mitarbeiterbindung: Versicherungen als steuerfreier Benefit',
    category: 'Versicherungsprodukte',
    type: 'expert-insight',
    excerpt: 'Betriebliche Krankenversicherung (bKV) und Altersvorsorge (bAV) modern umsetzen.',
    readingTime: '5 Min',
    updatedAt: '14.02.2026',
    author: 'FoundersCover Team',
    heroTag: 'TREND',
    primaryKeyword: 'Mitarbeiter Benefits steuerfrei',
    secondaryKeywords: ['Betriebliche Krankenversicherung bKV', 'Betriebliche Altersvorsorge bAV', 'Sachbezug 50 Euro', 'War for Talents'],
    content: `
      
      <p>Gehalt ist vergleichbar, Gesundheit ist emotional. Betriebliche Krankenversicherung (bKV) ist der Trend-Benefit: Zahnreinigung, Brille, Facharzttermine für Mitarbeiter, vom Chef bezahlt. Steuerfrei als Sachbezug. Ein starkes Tool im Hiring.</p>

      <h2>Warum das Thema wichtig ist</h2>
      <p>Startups konkurrieren mit Konzernen um Talente. Konzerne zahlen oft mehr Gehalt. Aber Startups können mit "Caring" punkten. Eine bKV ("Chef zahlt meine neue Brille") wird im Alltag viel stärker wahrgenommen als 20€ mehr Brutto.</p>

      <h2>Was du konkret wissen musst</h2>
      <p>Zwei Hauptinstrumente:</p>
      <ul>
        <li><strong>bAV (Altersvorsorge):</strong> Gesetzliche Pflicht. Jeder Mitarbeiter hat Recht auf Entgeltumwandlung. Der Arbeitgeber MUSS 15% Zuschuss geben.</li>
        <li><strong>bKV (Krankenversicherung):</strong> Freiwilliger Benefit. Ihr kauft Budget (z.B. 300€/Jahr) für Gesundheitsleistungen für jeden Mitarbeiter. Keine Gesundheitsprüfung!</li>
      </ul>

      <h2>Typische Fehler & Missverständnisse</h2>
      <ul>
        <li><strong>Fehler:</strong> bAV ignorieren. Das kann Jahre später zu massiven Nachzahlungen führen.</li>
        <li><strong>Missverständnis:</strong> "Krankenversicherung ist zu teuer." Es gibt Budget-Tarife ab ca. 10 € pro Monat/Mitarbeiter.</li>
      </ul>

      <h2>Pragmatische Empfehlung (Must-have vs. Later)</h2>
      <ul>
        <li><strong>Must-have:</strong> bAV-Prozess aufsetzen (Standard-Anbieter wählen), um gesetzliche Pflicht zu erfüllen.</li>
        <li><strong>Later (ab 10 MA):</strong> bKV einführen als Differenzierungsmerkmal im Recruiting.</li>
      </ul>

      <h2>Checkliste: Benefits-Setup</h2>
      <ul>
        <li>Nutzen wir den 50€ Sachbezug (steuerfrei) aus?</li>
        <li>Haben wir einen bAV-Rahmenvertrag (damit nicht jeder MA eine eigene Versicherung anschleppt)?</li>
        <li>Ist das Benefit für alle gleich (Gleichbehandlungsgrundsatz)?</li>
        <li>Passt die bKV zur Zielgruppe? (Brille/Zahn zieht immer)</li>
        <li>Kommunizieren wir das im Job-Interview?</li>
      </ul>

      <h2>Mini-FAQ</h2>
      <h3>Muss ich alle Mitarbeiter versichern?</h3>
      <p>Bei bKV oft ja (oder definierte Gruppen wie "alle > 1 Jahr dabei"), um Gesundheitsprüfung zu vermeiden.</p>
      <h3>Ist das steuerfrei?</h3>
      <p>bKV Beiträge können oft über die 50€-Sachbezugsfreigrenze laufen (steuer- und sozialversicherungsfrei).</p>
      <h3>Was ist, wenn der Mitarbeiter kündigt?</h3>
      <p>Dann endet die Versicherung oder er führt sie privat fort.</p>
      <h3>Gilt bKV auch für Pre-Existing Conditions?</h3>
      <p>Ja! Das ist der Clou. Keine Gesundheitsprüfung. Jeder wird genommen, auch mit Vorerkrankungen.</p>
      <h3>Zählt das für PKV und GKV Versicherte?</h3>
      <p>Ja, es ist eine private Zusatzversicherung on top. Gilt für alle.</p>
      <h3>Wie viel Aufwand ist die Verwaltung?</h3>
      <p>Modern fast null. Digitale Portale melden Zu-/Abgänge automatisch via Lohnbuchhaltung.</p>

      <h2>Nächste Schritte</h2>
      <p>Sprecht mit eurem HR-Lead. Wenn ihr noch ungenutztes Sachbezugs-Budget habt: bKV Angebot rechnen lassen.</p>

      <h2>Passende Guides</h2>
      <ul>
        <li><a href="/wissen/series-a-hiring">Hiring & Series A</a></li>
        <li><a href="/wissen/rechtsschutz-alltag">Rechtsschutz</a></li>
      </ul>
    `,
    seo: {
      metaTitle: 'Mitarbeiter Benefits 2026: bKV & bAV für Startups | Guide',
      metaDescription: 'Steuerfreie Benefits statt Gehaltserhöhung. Wie betriebliche Krankenversicherung (bKV) beim Recruiting hilft.'
    }
  }
];
