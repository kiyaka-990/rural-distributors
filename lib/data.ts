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
    title: 'Commercial Tower Complex',
    category: 'Building Works',
    description:
      'Multi-storey commercial development with modern architectural design, reinforced concrete structure, and premium finishing throughout.',
    year: 2023,
    location: 'Nairobi CBD',
    emoji: '🏢',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&fit=crop',
    gradient: 'from-green-brand/30 to-navy-deep',
  },
  {
    id: 2,
    title: '132/33kV Substation Installation',
    category: 'Civil & Electrical',
    description:
      'Complete substation transformer bay construction, cable trenching, equipment foundations, and electrical infrastructure for power distribution.',
    year: 2022,
    location: 'Nairobi County',
    emoji: '⚡',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80&fit=crop',
    gradient: 'from-gold/20 to-navy-deep',
  },
  {
    id: 3,
    title: 'Highway Rehabilitation',
    category: 'Road Services',
    description:
      'Full-scale road rehabilitation including asphalting, drainage improvement, and surface sealing across a major arterial corridor.',
    year: 2023,
    location: 'Central Kenya',
    emoji: '🛣️',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&fit=crop',
    gradient: 'from-navy-mid to-green-brand/20',
  },
  {
    id: 4,
    title: 'Hospital & Healthcare Facility',
    category: 'Building Works',
    description:
      'State-of-the-art healthcare facility with specialist medical infrastructure, compliance finishes, and advanced MEP systems.',
    year: 2022,
    location: 'Nairobi',
    emoji: '🏥',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80&fit=crop',
    gradient: 'from-gold/15 to-navy-mid',
  },
  {
    id: 5,
    title: '90m Telecommunications Tower',
    category: 'Civil Works',
    description:
      'Engineering and construction of a 90-metre cell tower including foundations, structural steel, access roads, and site drainage.',
    year: 2021,
    location: 'Rift Valley',
    emoji: '📡',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&fit=crop',
    gradient: 'from-green-brand/20 to-navy-deep',
  },
  {
    id: 6,
    title: 'Fuel Station Complex',
    category: 'Building Works',
    description:
      'Complete fuel station development including canopy structure, forecourt, service building, and all mechanical & electrical systems.',
    year: 2023,
    location: 'Nairobi',
    emoji: '⛽',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80&fit=crop',
    gradient: 'from-navy-mid to-green-brand/25',
  },
];

export const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&q=85&fit=crop',
    label: 'Building Works',
    headline: "Building Kenya's",
    highlight: 'Future',
    sub: 'Together',
  },
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=85&fit=crop',
    label: 'Road Services',
    headline: 'Roads That',
    highlight: 'Connect',
    sub: 'Communities',
  },
  {
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1800&q=85&fit=crop',
    label: 'Electrical Works',
    headline: 'Powering',
    highlight: 'Modern',
    sub: 'Infrastructure',
  },
  {
    image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=1800&q=85&fit=crop',
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
