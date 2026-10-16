export interface NavItem {
  name: string;
  href: string;
  badge?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  slogan: string;
  description: string;
  url: string;
  phone: {
    display: string;
    raw: string;
  };
  email: {
    general: string;
    sales: string;
    support: string;
  };
  officeHours: string;
  address: {
    line1: string;
    city: string;
    country: string;
    postcode: string;
  };
  nav: NavItem[];
  footerNav: {
    title: string;
    items: { name: string; href: string }[];
  }[];
}

export const siteConfig: SiteConfig = {
  name: 'Fleet Fuels',
  shortName: 'FleetFuels',
  tagline: 'Fuelling your fleet, powering your business',
  slogan: 'Big Fleet Prices. Small Business Service.',
  description:
    'Big Fleet Prices. Whatever the Size of Your Business. Competitive commercial fuel cards with transparent pricing, zero creeping margins, and no weekly negotiations across the UK.',
  url: 'https://www.fleetfuels.co.uk',
  phone: {
    display: '0800 012 3456',
    raw: '+448000123456',
  },
  email: {
    general: 'info@fleetfuels.co.uk',
    sales: 'sales@fleetfuels.co.uk',
    support: 'support@fleetfuels.co.uk',
  },
  officeHours: 'Monday - Friday: 08:30 - 17:30 GMT',
  address: {
    line1: 'Fleet Fuels UK',
    city: 'London',
    country: 'United Kingdom',
    postcode: 'EC2A 4NE',
  },
  nav: [
    { name: 'Why Fleet Fuels', href: '#no-creeping-margins' },
    { name: 'Fuel Cards', href: '#fuel-cards' },
    { name: 'Who We Help', href: '#target-fleets' },
    { name: 'Network Coverage', href: '#network' },
    { name: 'Compare Rates', href: '#compare' },
  ],
  footerNav: [
    {
      title: 'Fuel Card Networks',
      items: [
        { name: 'UK Fuels Card', href: '#fuel-cards' },
        { name: 'Fastfuel Card', href: '#fuel-cards' },
        { name: 'Shell Card', href: '#fuel-cards' },
        { name: 'BP Card', href: '#fuel-cards' },
        { name: 'Esso Card', href: '#fuel-cards' },
      ],
    },
    {
      title: 'Target Fleets',
      items: [
        { name: 'Large HGV Fleets', href: '#target-fleets' },
        { name: 'Small Haulage & Transport', href: '#target-fleets' },
        { name: 'Delivery Vans & Couriers', href: '#target-fleets' },
        { name: 'Single Commercial Vans', href: '#target-fleets' },
        { name: 'Taxi & Private Hire', href: '#target-fleets' },
        { name: 'Trades & Contractors', href: '#target-fleets' },
      ],
    },
    {
      title: 'Company & Compliance',
      items: [
        { name: 'No Creeping Margins Guarantee', href: '#no-creeping-margins' },
        { name: 'HMRC-Compliant Invoicing', href: '#why-us' },
        { name: 'Compare Fuel Rates', href: '#compare' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'AI Machine Index (/llms.txt)', href: '/llms.txt' },
      ],
    },
  ],
};
