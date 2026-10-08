import { ProgramTier, PricingPlan, CoachProfile, AchievementItem, Testimonial } from '@/lib/types';

/**
 * Authentic data from Tennisschule Amir (ts-amir.de),
 * curated with modern presentation hierarchy inspired by Living For Tennis.
 */

export const COACH_DATA: CoachProfile = {
  name: "Amir Reza",
  role: "Cheftrainer & Gründer der Tennisschule Amir",
  experience: "Über 20 Jahre Tour- & Coaching-Erfahrung",
  bio: "Amir ist ehemaliger Davis-Cup-Spieler und tourerfahrener Profi mit ATP-Weltranglistenplatzierung. Auf internationalen Challenger-Turnieren spielte er gegen Weltklassespieler wie Thomas Johansson (ATP 7), Andrej Pavel (ATP 13), Sjeng Schalken (ATP 11) und Hernan Gumy (ATP 39). Mit der höchsten internationalen Trainerlizenz GPTCA/ATP A-Level sowie der USTA A-Lizenz bringt er Spitzenkompetenz direkt auf die Plätze der SG Weiterstadt und der Region Darmstadt.",
  philosophy: "Erfolg entsteht durch Leidenschaft: Ohne echte Freude am Sport bleibt die Motivation auf der Strecke. Unser Anspruch ist es, jedem Schüler – vom 5-jährigen Anfänger in der Ballschule bis zum leistungsorientierten Meden- und Turnierspieler – die optimale Balance aus moderner Schlagtechnik, athletischer Koordination und mentaler Spielintelligenz zu vermitteln.",
  qualifications: [
    "GPTCA / ATP A-Level zertifiziert (Präsident Alberto Castellani)",
    "USTA A-Lizenz & USTA Diplom Trainer (USA)",
    "DTB / HTV C-Trainer Leistungssport",
    "GPTCA B-Level ATP Coach",
    "Zertifizierter Übungsleiter der Heidelberger Ballschule",
    "Ehemaliger Spieler der Oberliga & Regionalliga Herren (TSV Schott Mainz)"
  ],
  achievements: [
    "Ehemaliges Mitglied des iranischen Davis-Cup-Teams",
    "ATP Weltranglistenspieler (Profierfahrung auf internationalen Turnieren)",
    "Offizieller Talent Scout der Rafa Nadal Academy (Mallorca)",
    "Erfolgreicher Cheftrainer beim TC Pfungstadt und Kooperationspartner der SG Weiterstadt"
  ],
  partnerships: [
    "Rafa Nadal Academy (Offizieller Talent Scout & Partner)",
    "Alexander Waske Tennis-University",
    "SG Weiterstadt (Offizieller Trainingsbetrieb)",
    "Yonex (Offizieller Ausrüster)",
    "Global Professional Tennis Coach Association (GPTCA / ATP)"
  ],
  image: "/images/amir.png"
};

export const PROGRAMS: ProgramTier[] = [
  {
    id: "group-lessons",
    title: "Gruppentraining & Ballschule",
    subtitle: "Gemeinsam wachsen mit Gleichgesinnten",
    ageGroup: "Kinder ab 5 J. • Jugend • Erwachsene",
    description: "Ideal abgestimmte Kleingruppen (maximal 4 Spieler pro Platz). Erlernen moderner Schlagtechniken (Topspin, Slice, Aufschlagbiomechanik) in dynamischen Spielsituationen und ab 5 Teilnehmern mit 2 Trainern für maximale Ballkontakte.",
    features: [
      "Feste Kleingruppen: maximal 4 Spieler/innen pro Platz",
      "Ab 5 Spielern automatisch 2 Trainer im Einsatz",
      "Methodik nach moderner Heidelberger Ballschule",
      "Technik-, Taktik- und Matchtraining für Medenrunde",
      "Inklusive Hallenplatzgebühr bei SG Weiterstadt"
    ],
    badge: "Beliebtestes Format",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80",
    category: "group"
  },
  {
    id: "private-lessons",
    title: "Privat- & Einzeltraining",
    subtitle: "Maximale Intensität & individuelle Analyse",
    ageGroup: "Alle Spielstärken (Hobby bis LK)",
    description: "100% Fokus auf Ihr Spiel. Gezielte Video- und Bewegungsanalyse, Korrektur von Schlagrhythmus und Beinarbeit, strategische Spielmuster sowie Matchvorbereitung mit Cheftrainer Amir Reza oder lizenzierten Co-Trainern.",
    features: [
      "1-zu-1 Intensivbetreuung oder Semi-Privat (2 Personen)",
      "Flexibel buchbare 10er-Karte mit Trainerwunsch",
      "Detaillierte Video- & Biomechanik-Analyse",
      "Bevorzugte Trainer-Hallenkonditionen",
      "Gezielte Turnier- und LK-Punkte-Vorbereitung"
    ],
    badge: "Schnellste Fortschritte",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80",
    category: "private"
  },
  {
    id: "camps-clinics",
    title: "Feriencamps & Intensivtage",
    subtitle: "Ferien voller Tennis, Athletik & Teamgeist",
    ageGroup: "Jugend (6–17 J.) & Erwachsene",
    description: "Legendäre Sommer-, Oster- und Herbstcamps auf der Anlage der SG Weiterstadt. Mit über 100 Teilnehmern pro Saison bieten unsere Camps tägliches Techniktraining, Kondition, Matchpraxis, Mittagessen und Abschlussturnier.",
    features: [
      "Mehrtägige Feriencamps in den Oster- & Sommerferien",
      "Vollzeit-Betreuung inklusive Mittagessen & Getränke",
      "Intensivtage mit Gasttrainern & Nachwuchstalenten",
      "Abschlussturnier mit Pokalen & Sachpreisen",
      "Exklusive Sichtung für Rafa Nadal Academy Camps"
    ],
    badge: "Über 100 Camp-Teilnehmer jährlich",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=800&q=80",
    category: "camp"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  // Winter 2026/2027 (SG Weiterstadt)
  {
    id: "winter-kids",
    title: "Kids Ballschule (5–8 Jahre)",
    season: "winter",
    price: "295",
    period: "Saisonkurs",
    targetGroup: "Kinder von 5 bis 8 Jahren",
    groupSize: "4 Spieler/innen pro Gruppe",
    trainerRatio: "Ab 5 Personen: 2 Trainer",
    courtFeeIncluded: true,
    location: "SG Weiterstadt Tennishalle",
    includedDetails: [
      "Preis pro Kind für den gesamten Saisonzeitraum",
      "Feste Kleingruppe (4 Kinder pro Platz)",
      "Ab 5 Kindern sind 2 Trainer parallel im Einsatz",
      "Komplette Hallengebühr bereits enthalten",
      "Leihschläger und Trainingsbälle inklusive"
    ]
  },
  {
    id: "winter-youth",
    title: "Jugendtraining (9–17 Jahre)",
    season: "winter",
    price: "395",
    period: "Saisonkurs",
    targetGroup: "Jugendliche & Turniereinsteiger",
    groupSize: "4 Spieler/innen pro Gruppe",
    trainerRatio: "Ab 5 Personen: 2 Trainer",
    featured: true,
    courtFeeIncluded: true,
    location: "SG Weiterstadt Tennishalle",
    includedDetails: [
      "Preis pro Person für den gesamten Saisonzeitraum",
      "Feste 4er-Trainingsgruppe nach Spielstärke",
      "Taktikschulung & Matchsituationen",
      "Komplette Hallengebühr bereits enthalten",
      "Begleitung zu Jugend-Medenrunden"
    ]
  },
  {
    id: "winter-adults",
    title: "Erwachsenentraining",
    season: "winter",
    price: "415",
    period: "Saisonkurs",
    targetGroup: "Erwachsene (Anfänger bis Mannschaft)",
    groupSize: "4 Spieler/innen pro Gruppe",
    trainerRatio: "Ab 5 Personen: 2 Trainer",
    courtFeeIncluded: true,
    location: "SG Weiterstadt Tennishalle",
    includedDetails: [
      "Preis pro Person für den Saisonkurs",
      "Homogene Gruppen nach Leistungsniveau",
      "Kombination aus Technik & Matchpraxis",
      "Komplette Hallengebühr bereits enthalten",
      "Wöchentlicher fester Trainingsslot"
    ]
  },

  // Sommer 2026 (SG Weiterstadt)
  {
    id: "summer-kids",
    title: "Kids Ballschule (5–8 Jahre)",
    season: "summer",
    price: "150",
    period: "Sommersaison",
    targetGroup: "Kinder von 5 bis 8 Jahren",
    groupSize: "4 Spieler/innen pro Gruppe",
    trainerRatio: "Ab 5 Personen: 2 Trainer",
    courtFeeIncluded: true,
    location: "SG Weiterstadt Freiplätze",
    includedDetails: [
      "Preis pro Kind für die gesamte Sommersaison",
      "Spitzentraining an der frischen Luft",
      "Ab 5 Kindern sind 2 Trainer parallel im Einsatz",
      "Hallengebühr bei schlechtem Wetter abgedeckt",
      "Vorbereitung auf Vereinssport & Turniere"
    ]
  },
  {
    id: "summer-youth",
    title: "Jugendtraining (9–17 Jahre)",
    season: "summer",
    price: "220",
    period: "Sommersaison",
    targetGroup: "Jugendliche & Medenspieler",
    groupSize: "4 Spieler/innen pro Gruppe",
    trainerRatio: "Ab 5 Personen: 2 Trainer",
    featured: true,
    courtFeeIncluded: true,
    location: "SG Weiterstadt Freiplätze",
    includedDetails: [
      "Preis pro Person für die gesamte Sommersaison",
      "Feste 4er-Gruppe nach LK und Spielniveau",
      "Fokus auf Wettkampfvorbereitung und LK-Rennen",
      "Hallenabsicherung bei Regen inklusive",
      "Enger Austausch mit Mannschaftsführern"
    ]
  },
  {
    id: "summer-adults",
    title: "Erwachsenentraining",
    season: "summer",
    price: "250",
    period: "Sommersaison",
    targetGroup: "Erwachsene & Medenmannschaften",
    groupSize: "4 Spieler/innen pro Gruppe",
    trainerRatio: "Ab 5 Personen: 2 Trainer",
    courtFeeIncluded: true,
    location: "SG Weiterstadt Freiplätze",
    includedDetails: [
      "Preis pro Person für die Sommersaison",
      "Optimierung von Topspin, Slice & Netzangriff",
      "Doppel- und Einzeltaktik für Punktspiele",
      "Hallenabsicherung bei Regen inklusive",
      "Vereinsleben & After-Tennis Networking"
    ]
  },

  // Privattraining & Specials
  {
    id: "private-card-10",
    title: "Privattraining 10er-Karte",
    season: "private",
    price: "550",
    period: "10 Stunden Einzeltraining",
    targetGroup: "Alle Spielstärken (Individuell)",
    groupSize: "1-zu-1 Cheftrainer / Coach",
    trainerRatio: "1:1 Exklusiv",
    featured: true,
    courtFeeIncluded: false,
    location: "SG Weiterstadt / Pfungstadt",
    includedDetails: [
      "10 Einheiten à 60 Minuten individuelle Intensivbetreuung",
      "Inklusive Trainerwunsch (Cheftrainer Amir Reza)",
      "Bevorzugte Trainer-Hallenkonditionen",
      "Video-Schlaganalyse & individueller Trainingsplan",
      "Gültig über 12 Monate für maximale Flexibilität"
    ]
  },
  {
    id: "trial-session",
    title: "Schnuppertraining",
    season: "private",
    price: "Kostenlos",
    period: "Erste Kennenlernstunde",
    targetGroup: "Neueinsteiger & Wiedereinsteiger",
    groupSize: "Individuell oder Kleingruppe",
    trainerRatio: "Persönliche Betreuung",
    courtFeeIncluded: true,
    location: "SG Weiterstadt Tennisanlage",
    includedDetails: [
      "Unverbindliche 45-minütige Einstufungsstunde",
      "Ermittlung des aktuellen Leistungsstands",
      "Kostenloser Leihschläger bei Bedarf",
      "Beratung zur passenden Trainingsgruppe oder Mitgliedschaft",
      "Termin nach individueller Vereinbarung"
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "patrice-bezirksmeister",
    title: "3. Platz Bezirksmeisterschaften",
    player: "Patrice Flügge",
    tournament: "Bezirksmeisterschaften Sommer (Jungen U13)",
    placement: "3. Platz",
    year: "Sommer 2021",
    category: "Jugend",
    image: "/images/bezirksmeister2021.png"
  },
  {
    id: "patrice-dtb",
    title: "2. Platz DTB Ranglisten-Turnier",
    player: "Patrice Flügge",
    tournament: "Offizielles DTB Ranglisten Turnier in Schriesheim (U13)",
    placement: "2. Platz",
    year: "August 2021",
    category: "DTB Rangliste",
    image: "/images/dtb2.png"
  },
  {
    id: "david-medic-pokal",
    title: "Kreispokalsieger U14 & Kreismeister",
    player: "David Medic",
    tournament: "Kreispokal & Kreismeisterschaften TC Pfungstadt",
    placement: "1. Platz & Pokalsieger",
    year: "Kreismeisterschaften",
    category: "Jugend"
  },
  {
    id: "anton-schiavon",
    title: "Gesamtsieg Sweet Spot Cup",
    player: "Anton Schiavon",
    tournament: "Sweet Spot Cup in Eschborn (U16)",
    placement: "1. Platz Gesamtsieger",
    year: "Turniersieg",
    category: "U16"
  },
  {
    id: "stella-merck",
    title: "U12 Pokal Halbfinale nach nur 12 Monaten",
    player: "Stella Schweizer",
    tournament: "MERCK-Cup & DTB Ranglistenturnier Halbfinaleinzug",
    placement: "Halbfinale U12",
    year: "Nachwuchstalent",
    category: "U12"
  },
  {
    id: "sam-pazoki",
    title: "1. Platz ITF Turnier Kish & Junior Davis Cup",
    player: "Sam Pazoki",
    tournament: "ITF Junior Tour & 1. Platz Junior Davis Cup Vorqualifikation",
    placement: "1. Platz ITF",
    year: "International",
    category: "Pro / ITF"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Familie Flügge",
    role: "Eltern von Patrice (DTB Ranglistenspieler)",
    content: "Amir versteht es meisterhaft, sportlichen Ehrgeiz mit Begeisterung zu verbinden. Die technischen Grundlagen, die er Patrice vermittelt hat, führten direkt zum Podest bei den Bezirksmeisterschaften und im DTB Ranglistenturnier.",
    rating: 5
  },
  {
    id: "2",
    name: "Dr. Markus Weber",
    role: "Medenspieler Herren 40, SG Weiterstadt",
    content: "Durch Amirs 10er-Karte im Privattraining habe ich meine Rückhand und den Aufschlag komplett neu stabilisiert. Sein ATP-Hintergrund ist in jeder Übung spürbar – hochpräzise, aber immer mit Humor und Freude.",
    rating: 5
  },
  {
    id: "3",
    name: "Sabine & Thomas K.",
    role: "Eltern von zwei Feriencamp-Teilnehmern",
    content: "Unsere Kinder zählen die Wochen bis zum nächsten Tenniscamp! Das Trainerteam ist jung, extrem motiviert und die Organisation auf der Anlage der SG Weiterstadt ist erstklassig. Eine echte Bereicherung für die Region.",
    rating: 5
  }
];

export const STATS = [
  { label: "Tour- & Coaching-Erfahrung", value: "20+", suffix: "Jahre" },
  { label: "Trainierte Kinder & Talente", value: "500+", suffix: "Schüler" },
  { label: "Camp-Teilnehmer pro Jahr", value: "100+", suffix: "Spieler" },
  { label: "ATP & Davis-Cup Hintergrund", value: "100%", suffix: "Qualität" },
];
