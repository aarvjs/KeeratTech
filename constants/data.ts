import {
  Product,
  ProductCategory,
  ServiceItem,
  IndustryItem,
  CertificateItem,
  ProjectItem,
  TestimonialItem,
  FAQItem,
  TeamMember,
} from '@/types';

export const COMPANY_INFO = {
  name: 'Keerat Electech',
  legalName: 'Keerat Electech Industrial & Fasteners Solutions Pvt. Ltd.',
  tagline: 'Building the Future with Industrial Strength',
  established: 1984,
  yearsOfExperience: 40,
  completedProjects: '2,500+',
  productsCount: '500+',
  citiesPresent: '25+',
  clientsCount: '3,000+',
  phone: '+91 72350 55577',
  tollFree: '+91 72350 55577',
  email: 'info@keeratelectech.com',
  inquiryEmail: 'sales@keeratelectech.com',
  address: 'T1, Shree Prabhu Vatika, Near Shri Ram Education Center, Panki B Block, 208020',
  workingHours: 'Mon - Sat: 8:30 AM - 6:30 PM (IST)',
  socialLinks: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    whatsapp: 'https://wa.me/917235055577',
  },
};

export const BRAND_PARTNERS = [
  { name: 'Hilti', logoText: 'HILTI', tag: 'Anchoring & Power Tools' },
  { name: 'Fischer', logoText: 'FISCHER', tag: 'Fixing Systems' },
  { name: 'DeWalt', logoText: 'DEWALT', tag: 'Industrial Tools' },
  { name: 'Milwaukee', logoText: 'MILWAUKEE', tag: 'Heavy Duty Equipment' },
  { name: 'Bosch Industrial', logoText: 'BOSCH', tag: 'Drilling Solutions' },
  { name: 'Würth', logoText: 'WÜRTH', tag: 'Assembly & Fasteners' },
  { name: 'Sika', logoText: 'SIKA', tag: 'Construction Chemicals' },
  { name: 'Fosroc', logoText: 'FOSROC', tag: 'Structural Grouting' },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'anchor-fasteners',
    name: 'Anchor Fasteners',
    description: 'High-load mechanical anchors engineered for cracked concrete, heavy structural steel connections, and seismic installations.',
    image: '/assets/images/hero_fasteners.png',
    iconName: 'ShieldAlert',
    itemCount: 142,
  },
  {
    id: 'chemical-fasteners',
    name: 'Chemical Fasteners',
    description: 'Pure epoxy and vinylester injection mortars for heavy rebar post-installation and extreme tensile stress loads.',
    image: '/assets/images/chemical_epoxy.png',
    iconName: 'FlaskConical',
    itemCount: 88,
  },
  {
    id: 'power-tools',
    name: 'Power Tools',
    description: 'Heavy-duty rotary hammers, diamond core drills, and cordless impact drivers built for severe jobsites.',
    image: '/assets/images/power_drill.png',
    iconName: 'Wrench',
    itemCount: 96,
  },
  {
    id: 'drilling-accessories',
    name: 'Drilling Accessories',
    description: 'Industrial SDS Max/Plus carbide drill bits, diamond core bits, and high-durability chisels.',
    image: '/assets/images/core_cutting.png',
    iconName: 'Disc',
    itemCount: 110,
  },
  {
    id: 'construction-chemicals',
    name: 'Construction Chemicals',
    description: 'Non-shrink epoxy grouts, structural adhesives, fire-stop sealants, and waterproofing membranes.',
    image: '/assets/images/chemical_epoxy.png',
    iconName: 'Droplet',
    itemCount: 64,
  },
  {
    id: 'fixing-systems',
    name: 'Fixing Systems',
    description: 'Modular strut channels, pipe clamps, facade sub-frame fixings, and acoustic insulation anchors.',
    image: '/assets/images/hero_fasteners.png',
    iconName: 'Grid',
    itemCount: 75,
  },
  {
    id: 'industrial-hardware',
    name: 'Industrial Hardware',
    description: 'Grade 8.8 / 10.9 high tensile bolts, stainless steel fasteners, structural washers, and heavy nuts.',
    image: '/assets/images/hero_fasteners.png',
    iconName: 'Nut',
    itemCount: 130,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'keerat-anchor-tf8',
    name: 'Keerat Heavy Duty Wedge Anchor M16',
    category: 'Anchor Fasteners',
    categoryId: 'anchor-fasteners',
    tagline: 'ETA Option 1 Approved for Cracked Concrete & Seismic Loads C1/C2',
    description: 'The Keerat Wedge Anchor is an ultra-performance expansion anchor manufactured from high-grade carbon steel with hot-dip galvanized coating. Engineered for structural steel columns, crane rails, and curtain wall brackets.',
    image: '/assets/images/hero_fasteners.png',
    gallery: [
      '/assets/images/hero_fasteners.png',
      '/assets/images/engineer_worker.png',
    ],
    specs: [
      { label: 'Material Grade', value: 'High Tensile Carbon Steel / SS316' },
      { label: 'Diameter Range', value: 'M8 to M24' },
      { label: 'Finish Coating', value: 'Hot-Dip Galvanized / Sherardized' },
      { label: 'Approval Standard', value: 'ETA-19/0421 (Option 1 Cracked Concrete)' },
      { label: 'Seismic Class', value: 'C1 & C2 Rated' },
      { label: 'Fire Resistance', value: 'R120 Tested' },
    ],
    applications: [
      'Structural steel column anchorage',
      'Heavy machinery base plate mounting',
      'High-rise building curtain wall brackets',
      'Bridge barrier and noise wall installation',
    ],
    features: [
      '3-piece expansion clip delivers uniform load distribution',
      'Impact-resistant collar prevents thread damage during installation',
      'Embossed depth rings for fast visual inspection',
      'Suitable for hammer drilling and diamond core cored holes',
    ],
    benefits: [
      'Highest shear and tensile capacities in C50/60 concrete',
      'Reduces edge distance requirement by up to 30%',
      'Corrosion warranty up to 50 years in outdoor C4 environments',
    ],
    isFeatured: true,
  },
  {
    id: 'keerat-chem-epoxy-900',
    name: 'Keerat Injection Pure Epoxy Mortar 900ml',
    category: 'Chemical Fasteners',
    categoryId: 'chemical-fasteners',
    tagline: '1:1 Pure Epoxy Mortar for Rebar Doweling & Heavy Anchoring',
    description: 'Keerat Epoxy 900 is a heavy-duty, styrene-free pure epoxy resin formulated for structural rebar connections, post-installed reinforcement, and underwater anchorage. Performs in water-filled boreholes without shrinkage.',
    image: '/assets/images/chemical_epoxy.png',
    gallery: [
      '/assets/images/chemical_epoxy.png',
    ],
    specs: [
      { label: 'Base Resin', value: 'Pure Epoxy 1:1 Mix Ratio' },
      { label: 'Cartridge Volume', value: '900ml Side-by-Side Dual Cylinder' },
      { label: 'Gel Time (25°C)', value: '30 Minutes' },
      { label: 'Full Cure Time (25°C)', value: '8 Hours' },
      { label: 'Compressive Strength', value: '110 MPa (ISO 604)' },
      { label: 'VOC Content', value: 'Zero VOC / Green Building Certified' },
    ],
    applications: [
      'Post-installed rebar connections for slab extension & beams',
      'Starter bar installation in metro rail elevated piers',
      'Heavy structural steel fixing in diamond cored holes',
      'Underwater chemical anchoring in maritime ports',
    ],
    features: [
      'Zero shrinkage formulation prevents creep under permanent dead loads',
      'High bond resistance in dynamic and seismic load applications',
      'Longer working time allows effortless deep embedment injection',
    ],
    benefits: [
      'Certified 100-year service life under EAD 330087-00-0601',
      'Works in diamond cored smooth holes with specialized roughening tools',
    ],
    isFeatured: true,
  },
  {
    id: 'keerat-hammer-rh45',
    name: 'Keerat SDS-Max Rotary Hammer 45mm',
    category: 'Power Tools',
    categoryId: 'power-tools',
    tagline: '1500W Heavy Duty Concrete Breaker & Drilling Machine',
    description: 'Designed for relentless industrial drilling and demolition. Powered by a 1500W copper brushless motor with Active Vibration Control (AVC) to protect operators while delivering 12.5 Joules of impact energy.',
    image: '/assets/images/power_drill.png',
    gallery: [
      '/assets/images/power_drill.png',
    ],
    specs: [
      { label: 'Motor Rating', value: '1500W Heavy Duty Brushless' },
      { label: 'Impact Energy', value: '12.5 Joules (EPTA)' },
      { label: 'Chuck Type', value: 'SDS-Max Quick Change' },
      { label: 'Drilling Capacity in Concrete', value: '12mm - 45mm (Solid Bit)' },
      { label: 'Vibration Level', value: '8.5 m/s² AVC Tech' },
      { label: 'Weight', value: '8.2 kg' },
    ],
    applications: [
      'Heavy anchor hole drilling in high-strength concrete',
      'Structural demolition and concrete chipping',
      'Core drilling through reinforced masonry walls',
    ],
    features: [
      'Mechanical safety clutch disengages drive if bit jams',
      'Variable speed control dial with electronic constant speed maintainer',
      'Heavy cast aluminum gear housing for maximum heat dissipation',
    ],
    benefits: [
      'Up to 40% faster penetration rates than industry standard',
      'Extends bit life through controlled impact dynamics',
    ],
    isFeatured: true,
  },
  {
    id: 'keerat-core-bit-diamond',
    name: 'Keerat Laser-Welded Diamond Core Bit 150mm',
    category: 'Drilling Accessories',
    categoryId: 'drilling-accessories',
    tagline: 'Premium Turbo Diamond Segments for Heavy Rebar Reinforced Concrete',
    description: 'Industrial grade core drill bit with 10mm laser-welded roof-type diamond segments. Specially formulated matrix bond cuts through dense rebar grids with rapid speed.',
    image: '/assets/images/core_cutting.png',
    gallery: [
      '/assets/images/core_cutting.png',
    ],
    specs: [
      { label: 'Diameter', value: '150 mm (6 Inch)' },
      { label: 'Segment Height', value: '10 mm Laser Welded' },
      { label: 'Barrel Length', value: '450 mm Useful Drilling Depth' },
      { label: 'Connection Thread', value: '1-1/4" UNC Standard' },
      { label: 'Drilling Mode', value: 'Wet Drilling Only' },
    ],
    applications: [
      'HVAC pipe penetration cored holes',
      'Electrical cable duct coring through structural beams',
      'Test cylinder concrete core extraction',
    ],
    features: [
      'Laser-welded segments guarantee zero segment drop under high RPM',
      'Turbo segment shape reduces contact friction for faster starting',
    ],
    benefits: [
      'Delivers up to 35 meters total drilling life in 40MPa reinforced concrete',
    ],
    isFeatured: false,
  },
  {
    id: 'keerat-grout-epoxy-100',
    name: 'Keerat Precision Epoxy Grout 100',
    category: 'Construction Chemicals',
    categoryId: 'construction-chemicals',
    tagline: '3-Component High-Strength Non-Shrink Foundation Grout',
    description: 'A 100% solids, 3-component epoxy grout designed for machine baseplates, crane rails, turbine foundations, and heavy structural shimming where dynamic vibration resistance is required.',
    image: '/assets/images/chemical_epoxy.png',
    gallery: [
      '/assets/images/chemical_epoxy.png',
    ],
    specs: [
      { label: 'Compressive Strength', value: '125 MPa (7 Days ASTM C579)' },
      { label: 'Tensile Strength', value: '18 MPa' },
      { label: 'Modulus of Elasticity', value: '14,000 MPa' },
      { label: 'Shrinkage', value: '0.00% Non-Shrink' },
      { label: 'Effective Bearing Area', value: '> 95%' },
    ],
    applications: [
      'Heavy compressor and generator baseplate grouting',
      'Steel mill rolling mill soleplate installation',
      'Wind turbine tower foundation anchor ring grouting',
    ],
    features: [
      'Excellent flowability fills voids beneath large area plates',
      'Resistant to industrial oils, diesel, acids, and harsh chemicals',
    ],
    benefits: [
      'Eliminates equipment downtime caused by grout fracturing',
    ],
    isFeatured: true,
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'core-cutting',
    title: 'Diamond Core Cutting & Concrete Sawing',
    shortDesc: 'Vibration-free precision circular coring up to 600mm diameter through heavily reinforced concrete walls, slabs, and bridge decks.',
    fullDesc: 'Keerat Electech specialized engineering teams execute clean diamond core cutting for MEP penetrations, structural modifications, and concrete sampling without creating structural micro-cracks.',
    image: '/assets/images/core_cutting.png',
    iconName: 'Disc',
    features: [
      'Up to 600mm diameter single coring capability',
      'Stitch drilling for unlimited rectangular openings',
      'Zero vibration preserves surrounding structural integrity',
      'Slurry containment and clean jobsite management',
    ],
    processSteps: [
      { title: 'Site Inspection & Scanning', desc: 'GPR ground penetrating radar scanning to pinpoint rebar & conduit paths.' },
      { title: 'Rig Anchor Positioning', desc: 'Securing heavy-duty core rig stands with vacuum pads or mechanical anchors.' },
      { title: 'Precision Coring', desc: 'Controlled water-cooled diamond bit drilling at target RPM.' },
      { title: 'Core Extraction & QA', desc: 'Removing concrete slug, measuring tolerances, and clean surface handover.' },
    ],
  },
  {
    id: 'wall-drilling',
    title: 'Deep Hole Concrete Drilling & Anchoring',
    shortDesc: 'Heavy-duty SDS Max and diamond core drilling for embedded steel plates, curtain wall brackets, and MEP hangers.',
    fullDesc: 'We provide specialized deep hole drilling solutions up to 2 meters depth into high-strength concrete piers, dams, and metro tunnels using state-of-the-art auto-feed drilling rigs.',
    image: '/assets/images/power_drill.png',
    iconName: 'Drill',
    features: [
      'Precision laser-guided alignment',
      'Dust-free drilling using HEPA vacuum extraction units',
      'Subsea and wet hole drilling expertise',
    ],
    processSteps: [
      { title: 'Engineering Layout', desc: 'Cad coordinates transferred directly to jobsite laser markers.' },
      { title: 'Dustless Hole Execution', desc: 'Hollow drill bits vacuum out concrete dust simultaneously.' },
      { title: 'Quality Measurement', desc: 'Hole depth, diameter, and cleanliness verification.' },
    ],
  },
  {
    id: 'anchor-installation',
    title: 'On-Site Anchor Installation & Pull-Out Testing',
    shortDesc: 'Certified mechanical and chemical anchor installation backed by calibrated hydraulic load cell tension testing.',
    fullDesc: 'Our certified installation teams ensure your anchors are set to exact manufacturer torque and embedment depth specs. We conduct on-site proof load testing up to 500 kN.',
    image: '/assets/images/hero_fasteners.png',
    iconName: 'ShieldCheck',
    features: [
      'NABL calibrated digital load cell testing up to 500 kN',
      'Destructive and non-destructive proof load testing',
      'Third-party certified engineering test reports',
      'Compliant with EOTA / ACI 355 guidelines',
    ],
    processSteps: [
      { title: 'Anchor Selection Verification', desc: 'Checking design load specs against base material strength.' },
      { title: 'Precision Installation', desc: 'Calibrated torque wrench tightening & chemical dosing.' },
      { title: 'Hydraulic Tension Test', desc: 'Applying design proof loads and recording displacement curves.' },
      { title: 'Certificate Issuance', desc: 'Delivering signed engineering test certificates for project audit.' },
    ],
  },
  {
    id: 'chemical-fixing',
    title: 'Post-Installed Rebar & Chemical Doweling',
    shortDesc: 'Structural rebar extension for slab expansion, beam-to-column connections, and retrofitting shear walls.',
    fullDesc: 'Using pure epoxy resin systems certified for 100-year service lives, our engineers perform structural rebar doweling with full load transfer equivalent to cast-in-place rebar.',
    image: '/assets/images/chemical_epoxy.png',
    iconName: 'FlaskConical',
    features: [
      'Structural design calculation support using PROFIS software',
      'Fire-rated rebar connections (R180 rating)',
      'Seismic resistant doweling solutions',
    ],
    processSteps: [
      { title: 'Structural Audit', desc: 'Reviewing rebar diameter, embedment depth, and concrete grade.' },
      { title: 'Borehole Preparation', desc: 'Blowing and brushing with steel wire brushes 3x.' },
      { title: 'Epoxy Injection', desc: 'Dispensing exact resin volume using automatic pneumatic guns.' },
      { title: 'Rebar Insertion', desc: 'Twisting rebar to position and maintaining curing lock.' },
    ],
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'commercial-buildings',
    title: 'Commercial Skyscrapers & Malls',
    description: 'Curtain wall facade brackets, glass canopy tie-rods, elevator guide rail anchoring, and heavy MEP ceiling suspension grids.',
    image: '/assets/images/skyscraper.png',
    stats: '450+ High-Rise Projects',
  },
  {
    id: 'infrastructure-bridges',
    title: 'Infrastructure, Bridges & Highways',
    description: 'Bridge expansion joint bolting, crash barrier post fixing, noise barrier wall anchors, and pre-cast segment post-tensioning.',
    image: '/assets/images/engineer_worker.png',
    stats: '180+ Bridge & Flyover Networks',
  },
  {
    id: 'airports-metro',
    title: 'Airports & Rapid Transit Metro',
    description: 'Track plinth rebar doweling, overhead catenary system (OCS) anchors, terminal steel truss splices, and security bollards.',
    image: '/assets/images/skyscraper.png',
    stats: '35 Metro Line Segments',
  },
  {
    id: 'industrial-factories',
    title: 'Heavy Industrial Plants & Steel Mills',
    description: 'Vibration-proof turbine baseplate grouting, crane runway rail bolting, chemical storage tank anchors, and pipe rack frames.',
    image: '/assets/images/hero_fasteners.png',
    stats: '600+ Manufacturing Plants',
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015 Quality Management',
    issuer: 'TÜV Rheinland International',
    year: 'Certified Since 2002',
    image: '/assets/images/engineer_worker.png',
    badge: 'Quality Standard',
  },
  {
    id: 'eta-option-1',
    title: 'ETA Option 1 (Cracked Concrete)',
    issuer: 'European Organisation for Technical Assessment',
    year: 'Active Certification',
    image: '/assets/images/hero_fasteners.png',
    badge: 'Structural Safety',
  },
  {
    id: 'ce-mark',
    title: 'CE Certificate of Conformity',
    issuer: 'European Union Construction Products Regulation',
    year: 'Global Compliance',
    image: '/assets/images/chemical_epoxy.png',
    badge: 'EU Standard',
  },
  {
    id: 'nabl-accredited',
    title: 'NABL Accredited Test Laboratory',
    issuer: 'National Accreditation Board for Testing Labs',
    year: 'In-House Testing Facility',
    image: '/assets/images/core_cutting.png',
    badge: 'Testing Excellence',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'International Financial Center Tower',
    category: 'Commercial High-Rise',
    location: 'Mumbai, India',
    year: '2024',
    image: '/assets/images/skyscraper.png',
    description: 'Supplied 15,000+ Keerat heavy duty wedge anchors for unitized aluminum curtain wall facade brackets.',
  },
  {
    id: 'proj-2',
    title: 'Metropolitan Elevated Metro Corridor Line 3',
    category: 'Infrastructure',
    location: 'Bengaluru, India',
    year: '2023',
    image: '/assets/images/chemical_epoxy.png',
    description: 'Executed 8,500 post-installed rebar connections using Keerat Epoxy 900 pure epoxy resin.',
  },
  {
    id: 'proj-3',
    title: 'Global Tech Hub Campus - Phase II',
    category: 'Commercial',
    location: 'Hyderabad, India',
    year: '2024',
    image: '/assets/images/engineer_worker.png',
    description: 'Installed 45,000 meters of modular strut support framing for overhead MEP utilities.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Vikramaditya Sharma',
    role: 'Vice President - Structural Engineering',
    company: 'Larsen & Construction EPC Corp',
    avatar: '/assets/images/engineer_worker.png',
    content: 'Keerat Electech wedge anchors and pure epoxy systems have been our primary choice across 12 high-rise tower projects. Their ETA certifications give our auditors total confidence.',
    rating: 5,
  },
  {
    id: 'test-2',
    clientName: 'Rajesh K. Nambiar',
    role: 'Chief Project Manager',
    company: 'Metro Rail Infrastructure Developers',
    avatar: '/assets/images/engineer_worker.png',
    content: 'When we needed deep borehole chemical rebar doweling for our elevated viaduct pier extensions, Keerat Electech engineers provided onsite calculations and technical supervision.',
    rating: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Are Keerat Electech anchor systems ETA Option 1 approved for cracked concrete?',
    answer: 'Yes. Our complete range of Keerat heavy-duty expansion wedge anchors and chemical injection epoxy systems carry European Technical Assessment (ETA Option 1) approvals for cracked concrete.',
  },
  {
    id: 'faq-2',
    question: 'Do you provide on-site anchor pull-out testing services?',
    answer: 'Absolutely. We deploy mobile technical teams equipped with NABL-calibrated hydraulic load cell testers up to 500 kN, delivering official engineering test certificates.',
  },
  {
    id: 'faq-3',
    question: 'How do I request a technical quote or bulk commercial pricing?',
    answer: 'You can click on the "Inquire Now" button on any product detail page or visit our Contact page. Our technical sales engineers respond within 2 business hours with technical data sheets.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Shobhit Shukla',
    role: 'Owner & Managing Director',
    image: '/assets/images/engineer_worker.png',
    experience: '35+ Years in Fastening Tech',
    bio: 'Ph.D. in Structural Engineering. Pioneer in mechanical anchor design and heavy industrial joint integrity.',
  },
  {
    id: 'team-2',
    name: 'Meera Subramanian',
    role: 'Chief Operating Officer',
    image: '/assets/images/engineer_worker.png',
    experience: '22 Years Operations Excellence',
    bio: 'Former VP of Supply Chain at global building material multinationals. Spearheads nationwide distribution network.',
  },
];
