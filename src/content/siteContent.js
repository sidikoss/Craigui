export const PUBLIC_ROUTES = ['/', '/produits', '/a-propos', '/contact', '/mentions-legales'];

export const SITE_CONTENT = {
  company: {
    name: 'Craigui',
    legalName: 'Entreprise Craigui (a completer)',
    slogan: 'Des craies fiables pour les ecoles, universites et centres de formation.',
    heroTitle: 'La craie professionnelle pour les etablissements en Guinee',
    heroSubtitle:
      'Nous proposons des craies robustes, propres et abordables pour les structures qui cherchent un fournisseur stable.',
    mission:
      'Rendre les fournitures pedagogiques essentielles plus accessibles aux etablissements de Guinee.',
    story:
      'Craigui a ete lance pour offrir une alternative locale serieuse: une qualite constante, des prix maitrises et un service client reactif.',
    address: 'Conakry, Guinee',
    city: 'Conakry',
    country: 'Guinee',
    foundedYear: '2024',
    siteUrl: 'https://vitrine-craie.vercel.app',
    logoText: 'CG',
  },
  contacts: {
    whatsappNumber: '224661862044',
    whatsappDisplay: '+224 661 862 044',
    email: 'contact@votre-entreprise.com',
    phoneRaw: '224622000000',
    phoneDisplay: '+224 622 00 00 00',
    responseTime: 'Sous 24 heures ouvrables',
    openingHours: ['Lundi - Vendredi: 08h00 - 18h00', 'Samedi: 09h00 - 14h00'],
    serviceAreas: ['Conakry', 'Kindia', 'Boke', 'Labe', 'Kankan', 'Nzerakore'],
  },
  pricingFrom: {
    currency: 'GNF',
    baseUnitLabel: 'paquet',
    values: {
      whiteClassic: 5000,
      colorSet: 12000,
      dustReduced: 15000,
      schoolBulkKit: 45000,
    },
  },
  productRanges: [
    {
      id: 'white-classic',
      name: 'Craies blanches classiques',
      summary:
        'Craies blanches pour usage quotidien sur tableau noir, bon compromis entre prix et duree de vie.',
      useCases: ['Ecoles primaires', 'Colleges et lycees', 'Centres de soutien scolaire'],
      packaging: ['Boite 50 unites', 'Carton 20 boites'],
      fromPrice: 5000,
      highlighted: true,
    },
    {
      id: 'color-set',
      name: 'Craies colorees pedagogiques',
      summary:
        'Set de couleurs vives pour les cours visuels, les schemas et les activites en classe.',
      useCases: ['Matieres scientifiques', 'Cours de langues', 'Travaux diriges'],
      packaging: ['Set 6 couleurs', 'Set 12 couleurs'],
      fromPrice: 12000,
      highlighted: true,
    },
    {
      id: 'dust-reduced',
      name: 'Craies faible poussiere',
      summary: 'Craies concues pour limiter les particules en salle et offrir une ecriture plus nette.',
      useCases: ['Salles fermees', 'Centres de formation', 'Usage intensif'],
      packaging: ['Boite 24 unites', 'Carton 30 boites'],
      fromPrice: 15000,
      highlighted: true,
    },
    {
      id: 'school-bulk-kit',
      name: 'Kit volume etablissement',
      summary:
        'Pack combine pour etablissements qui veulent centraliser les achats et reduire les ruptures.',
      useCases: ['Directions d ecole', 'Achats trimestriels', 'Commandes multisites'],
      packaging: ['Kit 1 mois', 'Kit 1 trimestre'],
      fromPrice: 45000,
      highlighted: false,
    },
  ],
  trustStats: [
    { value: '500+', label: 'Etablissements servis' },
    { value: '150k+', label: 'Craies distribuees' },
    { value: '24h', label: 'Delai moyen de reponse' },
    { value: '98%', label: 'Clients satisfaits' },
  ],
  testimonials: [
    {
      name: 'Direction Groupe Scolaire Horizon',
      role: 'Administration scolaire',
      city: 'Conakry',
      quote:
        'La qualite est stable et les livraisons sont regulieres. Nous avons enfin un fournisseur local fiable.',
    },
    {
      name: 'Institut Progress',
      role: 'Centre de formation',
      city: 'Kindia',
      quote:
        'Le devis est clair, les prix sont adaptes a nos volumes, et le suivi WhatsApp est tres efficace.',
    },
    {
      name: 'Complexe Educatif Al Miftah',
      role: 'Responsable achats',
      city: 'Kankan',
      quote:
        'Les craies durent plus longtemps et nous avons reduit les depenses sur le trimestre.',
    },
  ],
  valueProps: [
    'Production locale avec controle qualite a chaque lot',
    'Prix de depart competitifs et remise volume',
    'Livraison organisee selon vos zones prioritaires',
    'Accompagnement commande via WhatsApp et formulaire',
  ],
  quote: {
    deliveryZones: [
      { id: 'conakry', name: 'Conakry', fee: 15000 },
      { id: 'regional', name: 'Hors Conakry', fee: 50000 },
    ],
    unitTiers: [
      { min: 1, max: 19, multiplier: 1.0, label: 'Tarif standard' },
      { min: 20, max: 99, multiplier: 0.92, label: 'Tarif volume' },
      { min: 100, max: 499, multiplier: 0.86, label: 'Tarif etablissement' },
      { min: 500, max: Number.POSITIVE_INFINITY, multiplier: 0.8, label: 'Tarif grossiste' },
    ],
  },
  legal: {
    ownerName: 'A completer',
    publicationDirector: 'A completer',
    hostingProvider: 'Vercel',
    termsUpdatedAt: '21 mai 2026',
  },
};
