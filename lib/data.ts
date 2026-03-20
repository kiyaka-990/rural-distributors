// lib/data.ts

export const COMPANY = {
  name: 'Rural Distributors Enterprises Limited',
  shortName: 'RDE Limited',
  tagline: 'General Building Contractors & Suppliers',
  founded: 2015,
  phone: '+254 722 313 131',
  email: 'ruraldist22@gmail.com',
  address: '7th Floor, Cianda House, Koinange Street, Nairobi',
  poBox: 'P.O. Box 19055 – 00500, Nairobi, Kenya',
  coordinates: { lat: -1.2841, lng: 36.8158 },
};

export const SERVICES = [
  {
    id: 'building',
    icon: '🏗️',
    title: 'Building Works',
    tagline: 'Structural excellence at every scale',
    description:
      'Over 10 years of expertise constructing high-rise residential & commercial buildings, hotel resorts, banks, laboratories, hospitals, schools, institutional buildings and fuel stations.',
    features: [
      'High-rise residential & commercial',
      'Hotel resorts & hospitality',
      'Banks & financial institutions',
      'Hospitals & healthcare facilities',
      'Schools & educational buildings',
      'Fuel stations & retail',
    ],
    color: '#1a6b3c',
  },
  {
    id: 'civil',
    icon: '🔩',
    title: 'Civil Works',
    tagline: 'Infrastructure built to last',
    description:
      'Comprehensive civil engineering spanning 132/33kV substation transformer bays, equipment foundations, access roads, cable trenches, oil pits, drainage works and cell towers up to 90 metres.',
    features: [
      '132/33kV substation bays',
      'Equipment foundations',
      'Access roads & drainage',
      'Cable trenches & oil pits',
      'Cell towers up to 90m',
      'Site civil works',
    ],
    color: '#1a4a6b',
  },
  {
    id: 'electrical',
    icon: '⚡',
    title: 'Electrical Works',
    tagline: 'Powering modern facilities',
    description:
      'Full-spectrum electrical services including 25MW power backup systems, transformer & generator installations, fire detection, alarm systems, data & voice, CCTV, TV networking, and PA systems.',
    features: [
      '25MW power backup systems',
      'Transformer & generator fit-out',
      'Fire detection & alarms',
      'CCTV security systems',
      'Data & voice infrastructure',
      'Public address systems',
    ],
    color: '#6b5a1a',
  },
  {
    id: 'road',
    icon: '🛣️',
    title: 'Road Services',
    tagline: 'Smooth, durable road solutions',
    description:
      'Expert delivery in seals, asphalting, and road rehabilitation. Highly skilled teams committed to quality work on time and within specification.',
    features: [
      'Road sealing & surface treatment',
      'Full asphalting services',
      'Road rehabilitation',
      'Drainage improvements',
      'On-time delivery',
      'Within-specification guarantee',
    ],
    color: '#3a1a6b',
  },
  {
    id: 'finishing',
    icon: '🧱',
    title: 'Specialist Finishing',
    tagline: 'Craftsmanship in every detail',
    description:
      'Meticulous specialist finishing works including brickwork, formwork, plastering, concrete floors & slabs, tiling, painting, and paving.',
    features: [
      'Brickwork & formwork',
      'Plastering',
      'Concrete floors & slabs',
      'Tiling',
      'Painting',
      'Paving',
    ],
    color: '#2a4a1a',
  },
  {
    id: 'surveying',
    icon: '📐',
    title: 'Quantity Surveying',
    tagline: 'Precision cost management',
    description:
      'Professional cost estimation, bills of quantities, value engineering, and project cost control to maximise client value without compromising quality.',
    features: [
      'Cost estimation',
      'Bill of quantities',
      'Value engineering',
      'Project cost control',
      'Procurement support',
      'Risk management',
    ],
    color: '#1a3a4a',
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Narok Stadium',
    category: 'Building Works',
    description:
      'A premier international-standard sporting facility featuring a high-capacity grandstand, professional-grade natural turf pitch, and integrated athlete changing rooms.',
    year: 2023,
    location: 'Narok County',
    emoji: '🏢',
    image: '/images/hero-4.jpg',
    gradient: 'from-green-brand/30 to-navy-deep',
  },
  {
    id: 2,
    title: 'Malindi Town Settlements Infrastructure Improvement Works',
    category: 'Civil , Roads & Drainage',
    description:
      'Construction of Malindi Town Settlements Infrastructure Improvement Works in Kibokoni, Kwa Ndomo and Sir Ali Informal Settlements (Lot 1: Roads, Footpaths and Drainage)',
    year: 2018,
    location: 'Nairobi County',
    emoji: '⚡',
    image: '/images/malindi.jpg',
    gradient: 'from-gold/20 to-navy-deep',
  },
  {
    id: 3,
    title: 'Machakos Town Settlements Infrastructure Improvement Works',
    category: 'Road Services',
    description:
      'Construction of Machakos Town Settlements Infrastructure Improvement Works (Lot 1: Roads, Footpaths and Drainage)',
    year: 2016,
    location: 'Central Kenya',
    emoji: '🛣️',
    image: '/images/machakos.jpg',
    gradient: 'from-navy-mid to-green-brand/20',
  },
  {
    id: 4,
    title: 'Kikuyu Market ,Kiambu County',
    category: 'Building Works',
    description:
      'Construction of 3 Storied Market Block; Car Park;Loading and Unloading Zones;Drilling and equipping of a Borehole',
    year: 2016,
    location: 'Nairobi',
    emoji: '🏥',
    image: '/images/kikuyu.jpg',
    gradient: 'from-gold/15 to-navy-mid',
  },
  {
    id: 5,
    title: 'Construction of industrial Sheds and associated Civil Works',
    category: 'Civil Works',
    description:
      'The Proposed Export Processing Zone (EPZ) Flagship Project in Nasewa (Busia County): Construction of Industrial Sheds and Associated Civil Works',
    year: 2024,
    location: 'Rift Valley',
    emoji: '📡',
    image: '/images/nasewa.jpg',
    gradient: 'from-green-brand/20 to-navy-deep',
  },
  {
    id: 6,
    title: 'Rehabilitation of Access roads in Korogocho slums',
    category: 'Road Works',
    description:
      'Construction & Rehabilitation of Access roads in Korogocho slums(Lot 1: Roads, Footpaths and Drainage)',
    year: 2023,
    location: 'Nairobi',
    emoji: '⛽',
    image: '/images/korogocho.jpg',
    gradient: 'from-navy-mid to-green-brand/25',
  },
];

export const HERO_SLIDES = [
  {
    image: 'images/hero-1.jpg',
    label: 'Building Works',
    headline: "Building Kenya's",
    highlight: 'Future',
    sub: 'Together',
  },
  {
    image: '/images/hero-2.jpg',
    label: 'Road Services',
    headline: 'Roads That',
    highlight: 'Connect',
    sub: 'Communities',
  },
  {
    image: '/images/hero-3.jpg',
    label: 'Electrical Works',
    headline: 'Powering',
    highlight: 'Modern',
    sub: 'Infrastructure',
  },
  {
    image: '/images/hero-4.jpg',
    label: 'Civil Works',
    headline: 'Engineering',
    highlight: 'Excellence',
    sub: 'Since 2015',
  },
];

export const STATS = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 4, suffix: '', label: 'Service Divisions' },
  { value: 100, suffix: '%', label: 'Quality Promise' },
];

export const BOT_RESPONSES: Record<string, string> = {
  greeting: "Hello! 👋 Welcome to **Rural Distributors Enterprises Limited**. I'm your virtual assistant. How can I help you today?\n\nYou can ask me about our services, location, how to get a quote, or our experience.",
  services: "We offer four main service divisions:\n\n🏗️ **Building Works** — High-rise residential & commercial, hotels, hospitals, schools\n🔩 **Civil Works** — Substations, cell towers, drainage, cable trenching\n⚡ **Electrical Works** — 25MW systems, CCTV, fire alarms, data & voice\n🛣️ **Road Services** — Asphalting, sealing, rehabilitation\n🧱 **Specialist Finishing** — Tiling, plastering, painting, paving\n\nWhich service would you like to know more about?",
  location: "📍 We're located at the **7th Floor, Cianda House, Koinange Street, Nairobi, Kenya**.\n\nPostal: P.O. Box 19055 – 00500, Nairobi\n\nVisit our Location page for a full interactive map!",
  contact: "You can reach us via:\n\n📞 **+254 722 313 131**\n✉️ **ruraldist22@gmail.com**\n📍 7th Floor, Cianda House, Koinange Street, Nairobi\n\nOr fill in the contact form on our Contact page!",
  quote: "To get a quote:\n\n1️⃣ Fill in the **Contact Form** on our Contact page\n2️⃣ Call us at **+254 722 313 131**\n3️⃣ Email **ruraldist22@gmail.com**\n\nInclude project type, location, scale, and timeline. We respond within 24 hours!",
  experience: "Rural Distributors Enterprises Limited was incorporated in **2015** in Nairobi, Kenya. With over **10 years** of experience, we have:\n\n✅ Served private companies and government institutions\n✅ Built high-rise buildings, hospitals, schools, fuel stations\n✅ Installed electrical systems including 25MW power backups\n✅ Constructed cell towers up to 90 metres\n✅ Completed road rehabilitation projects across Kenya\n\nWe're growing with ambitions across **East & Central Africa**!",
  mission: "Our **Mission**: World-class construction contracting with long-term client relationships — cost-effective, quality-driven.\n\nOur **Vision**: Leading construction company in chosen markets, sought after for reliable execution and world-class technical sophistication.\n\nOur **Values**: Safety · Professionalism · Integrity · Ingenuity",
  default: "Thank you for your question! For detailed information, please contact us:\n\n📞 **+254 722 313 131**\n✉️ **ruraldist22@gmail.com**\n\nOr visit our Contact page — we respond within 24 hours!",
};
