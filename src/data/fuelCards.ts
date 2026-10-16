export interface FuelCard {
  id: string;
  name: string;
  network: string;
  badge: string;
  coverage: string;
  bestFor: string;
  summary: string;
  features: string[];
  vehicleTypes: ('HGVs' | 'Vans' | 'Cars' | 'Taxis')[];
  cardDesign: {
    gradient: string;
    textColor: string;
    accentBadge: string;
    chipColor: string;
    brandLabel: string;
  };
}

export const fuelCards: FuelCard[] = [
  {
    id: 'uk-fuels',
    name: 'UK Fuels Card',
    network: 'UK Fuels Multi-Brand Network',
    badge: 'Regional Fleets & Supermarkets',
    coverage: '3,500+ UK Multi-Brand Forecourts',
    bestFor: 'Regional delivery vans, couriers, trade contractors, and mixed commercial vehicle fleets.',
    summary: 'Extensive multi-brand coverage with widespread supermarket pump access and fixed commercial wholesale rates.',
    features: [
      'Access to over 3,500 multi-brand forecourts across town centres and major transit corridors',
      'Extensive supermarket network acceptance (Morrisons, Tesco, and partner stations)',
      'Zero weekly card usage fees and transparent, non-creeping wholesale pricing',
      'Individual driver PIN protection and odometer mileage recording at the pump',
      'Single consolidated HMRC-approved weekly VAT invoice for all transactions',
    ],
    vehicleTypes: ['Vans', 'Cars', 'Taxis', 'HGVs'],
    cardDesign: {
      gradient: 'from-[#2D3136] via-[#3a3f45] to-[#1f2226]',
      textColor: 'text-white',
      accentBadge: 'bg-[#469B26] text-white',
      chipColor: '#d4af37',
      brandLabel: 'UK FUELS',
    },
  },
  {
    id: 'fastfuel',
    name: 'Fastfuel Card',
    network: 'Texaco & UK Fuels Network',
    badge: 'Exceptional Van & Mixed Coverage',
    coverage: '3,500+ Texaco & Partner Stations',
    bestFor: 'Commercial vans, sole traders, multi-drop delivery, and local service fleets.',
    summary: 'Combining Texaco forecourts with the UK Fuels network for unbeatable regional convenience and high fuel flow rates.',
    features: [
      'Comprehensive national network combining all Texaco sites with UK Fuels partner forecourts',
      'High-speed diesel pumps for rapid turnarounds on commercial vans and light trucks',
      'Consistent commercial wholesale pricing without creeping margin markups',
      'Detailed online account portal with real-time spend limits and card freeze controls',
      'HMRC-compliant invoicing making VAT reclaim simple and totally paperless',
    ],
    vehicleTypes: ['Vans', 'Cars', 'Taxis'],
    cardDesign: {
      gradient: 'from-[#1e293b] via-[#334155] to-[#0f172a]',
      textColor: 'text-white',
      accentBadge: 'bg-[#F59E0B] text-slate-900',
      chipColor: '#e2e8f0',
      brandLabel: 'FASTFUEL',
    },
  },
  {
    id: 'shell',
    name: 'Shell Fleet Card',
    network: 'Shell Commercial & CRT Network',
    badge: 'Motorways & Premium Fuel',
    coverage: '1,100+ Shell & 2,500+ Partner Forecourts',
    bestFor: 'Long-haul transport, motorway trunking, corporate car fleets, and executive vehicles.',
    summary: 'Premium fuel formulas and commanding presence on all British motorways, dual carriageways, and ports.',
    features: [
      'Unrivalled motorway service area (MSA) presence across M1, M6, M25, M4, and A1(M)',
      'Shell FuelSave diesel technology engineered to assist engine efficiency and economy',
      'High-canopy HGV access lanes and dedicated commercial bunkered sites',
      'AdBlue at the pump at strategic commercial transit locations nationwide',
      'Consolidated HMRC weekly billing with zero creeping margin risk',
    ],
    vehicleTypes: ['HGVs', 'Vans', 'Cars'],
    cardDesign: {
      gradient: 'from-[#469B26] via-[#377d1d] to-[#2c6319]',
      textColor: 'text-white',
      accentBadge: 'bg-white text-[#2c6319]',
      chipColor: '#d4af37',
      brandLabel: 'SHELL FLEET',
    },
  },
  {
    id: 'bp',
    name: 'BP Fleet Card',
    network: 'BP National Network',
    badge: 'Trunk Road & High-Volume Fleets',
    coverage: '1,200+ BP & 2,000+ Cross-Acceptance Sites',
    bestFor: 'High-mileage transport, national distribution fleets, and drivers valuing convenience amenities.',
    summary: 'High-volume commercial fleet access across Britain’s premier motorway routes and trunk road corridors.',
    features: [
      'Access to over 1,200 BP forecourts plus extensive Esso cross-network acceptance',
      'BP ACTIVE technology diesel helping keep critical engine components clean',
      'Strategic locations featuring high-flow commercial pumps and driver rest stop amenities',
      'Clear, predictable weekly pricing with no weekly phone negotiation needed',
      'Itemised invoicing broken down by vehicle registration, driver, and date',
    ],
    vehicleTypes: ['HGVs', 'Vans', 'Cars'],
    cardDesign: {
      gradient: 'from-[#134e4a] via-[#115e59] to-[#042f2e]',
      textColor: 'text-white',
      accentBadge: 'bg-[#86ef9e] text-[#064e3b]',
      chipColor: '#d4af37',
      brandLabel: 'BP FLEET',
    },
  },
  {
    id: 'esso',
    name: 'Esso Card',
    network: 'WEX / Esso National Network',
    badge: 'Commuter & Motorway Corridors',
    coverage: '1,200+ Esso & 2,000+ Partner Forecourts',
    bestFor: 'Commuter route fleets, sales teams, taxi & private hire operators, and service engineers.',
    summary: 'Strategic arterial road and motorway coverage with Synergy fuel technology and driver convenience.',
    features: [
      'Strategic forecourt locations along key commuter corridors and major UK motorways',
      'Esso Synergy diesel and unleaded fuels formulated for responsive engine protection',
      'Cross-acceptance at partner Shell and BP forecourts for maximum flexibility',
      'Secure PIN-protected cards with custom driver spending limits and product controls',
      'Fully consolidated HMRC VAT statements with transparent wholesale margins',
    ],
    vehicleTypes: ['Cars', 'Taxis', 'Vans', 'HGVs'],
    cardDesign: {
      gradient: 'from-[#1e3a8a] via-[#1d4ed8] to-[#172554]',
      textColor: 'text-white',
      accentBadge: 'bg-[#60a5fa] text-slate-900',
      chipColor: '#e2e8f0',
      brandLabel: 'ESSO COMMERCIAL',
    },
  },
];
