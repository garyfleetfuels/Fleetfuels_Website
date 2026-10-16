export interface FuelCard {
  id: string;
  name: string;
  network: string;
  badge: string;
  sitesCount: string;
  bestFor: string;
  pricingType: 'Fixed Wholesale Weekly' | 'Pump Price Discount' | 'Hybrid Commercial';
  highlight: string;
  features: string[];
  vehicleTypes: ('HGVs' | 'Vans' | 'Cars' | 'Coaches')[];
  accentColor: string;
}

export const fuelCards: FuelCard[] = [
  {
    id: 'keyfuels',
    name: 'Keyfuels Commercial Card',
    network: 'Keyfuels Network',
    badge: 'Best for HGVs & Heavy Fleets',
    sitesCount: '3,500+ UK Sites',
    bestFor: 'Haulage operators, heavy HGVs, rigid trucks, and high-mileage van fleets.',
    pricingType: 'Fixed Wholesale Weekly',
    highlight: 'Save up to 10p/litre at key commercial bunker sites nationwide.',
    features: [
      'Fixed weekly commercial diesel pricing across the UK',
      'Over 3,500 forecourts with high-speed commercial pumps',
      'Dedicated HGV access lanes with raised canopies & wide turning circles',
      'Comprehensive HMRC-compliant weekly VAT consolidated invoices',
      'Zero surcharge at bunkered network locations',
    ],
    vehicleTypes: ['HGVs', 'Vans', 'Coaches'],
    accentColor: '#469B26',
  },
  {
    id: 'uk-fuels',
    name: 'UK Fuels Fleet Card',
    network: 'UK Fuels Multi-Brand Network',
    badge: 'Most Versatile UK Coverage',
    sitesCount: '3,500+ UK Sites',
    bestFor: 'Mixed fleets, light commercial vehicles (LCVs), couriers, and regional service vans.',
    pricingType: 'Fixed Wholesale Weekly',
    highlight: 'Multi-brand access including independent forecourts and major supermarkets.',
    features: [
      'Fixed wholesale prices notified in advance every Friday',
      'Supermarket acceptance across Morrisons, Tesco, and partner stations',
      'Detailed PIN protection and odometer mileage tracking per transaction',
      'Online portal to instantly freeze, cancel, or re-order fleet cards',
      'No minimum fuel spend or transaction threshold penalties',
    ],
    vehicleTypes: ['Vans', 'Cars', 'HGVs'],
    accentColor: '#2D3136',
  },
  {
    id: 'esso-commercial',
    name: 'Esso Commercial Card',
    network: 'Esso National Network',
    badge: 'Premium Fuel & Motorways',
    sitesCount: '1,200+ Esso & 2,000+ Partner Sites',
    bestFor: 'Trunk road transport, sales representative fleets, and high-frequency motorway travellers.',
    pricingType: 'Pump Price Discount',
    highlight: 'Synergy fuel technology keeping fleet engines cleaner for higher MPG.',
    features: [
      'Access to Esso, Shell, and BP cross-acceptance partner forecourts',
      'Esso Synergy fuels (diesel & unleaded) engineered for maximum engine economy',
      '24/7 service on major UK motorways (M1, M6, M25, M4, A1(M))',
      'Costa Express, Greggs, and driver rest stop amenities',
      'Flexible credit terms with custom direct debit scheduling',
    ],
    vehicleTypes: ['Cars', 'Vans', 'Coaches'],
    accentColor: '#377d1d',
  },
  {
    id: 'shell-fleet',
    name: 'Shell Fleet & CRT Card',
    network: 'Shell Commercial Road Transport',
    badge: 'Strategic Trunk Routes',
    sitesCount: '1,100+ Shell & 2,500+ Partner Sites',
    bestFor: 'Long-haul UK logistics, dual carriageway transit, and corporate fleets.',
    pricingType: 'Hybrid Commercial',
    highlight: 'Extensive motorway corridor presence with Shell FuelSave formulas.',
    features: [
      'Shell FuelSave diesel formulated to help reduce fuel consumption up to 3%',
      'Unrivalled presence across motorway service areas and UK ports',
      'AdBlue at the pump across prime commercial transport hubs',
      'API integration with major fleet management and telematics software',
      'Fraud alert triggers based on tank capacity and geo-location',
    ],
    vehicleTypes: ['HGVs', 'Vans', 'Cars'],
    accentColor: '#469B26',
  },
  {
    id: 'bp-plus',
    name: 'BP Plus Fleet Card',
    network: 'BP National Forecourt Network',
    badge: 'Driver Convenience & Quality',
    sitesCount: '1,200+ BP & 2,000+ Partner Sites',
    bestFor: 'Executive fleets, light commercial vehicles, and nationwide field engineers.',
    pricingType: 'Pump Price Discount',
    highlight: 'BP ACTIVE technology diesel helping protect engines against dirt build-up.',
    features: [
      '1,200+ BP forecourts with premium M&S Simply Food and Wild Bean Cafe amenities',
      'High-speed diesel pumps for fast turnarounds on commercial vans',
      'Cross-network acceptance at Esso and Texaco sites for maximum convenience',
      'Detailed CO2 emissions reporting to assist ESG and corporate compliance',
      'Individual card security with driver name and vehicle registration embossed',
    ],
    vehicleTypes: ['Cars', 'Vans'],
    accentColor: '#2D3136',
  },
  {
    id: 'texaco-fastfuel',
    name: 'Texaco Fastfuel Card',
    network: 'Texaco & UK Fuels Combined',
    badge: 'Competitive Regional Value',
    sitesCount: '2,000+ Forecourts',
    bestFor: 'Regional distribution, trade vans, and local service fleets.',
    pricingType: 'Fixed Wholesale Weekly',
    highlight: 'Excellent local town density and highly competitive wholesale commercial rates.',
    features: [
      'Wholesale fixed commercial price for diesel and pump-related petrol rates',
      'Strong coverage in rural and suburban UK towns alongside trunk routes',
      'Straightforward single itemised HMRC statement for all transactions',
      'Free mobile site-locator app for drivers on the road',
      'No card issuance fees on standard account approvals',
    ],
    vehicleTypes: ['Vans', 'Cars', 'HGVs'],
    accentColor: '#469B26',
  },
];
