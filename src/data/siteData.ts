export interface NavItem {
  name: string;
  href: string;
  badge?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  companyNumber?: string;
  vatNumber?: string;
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
  tagline: 'Commercial Fuel Cards & Nationwide Fleet Management',
  description:
    'Reduce fleet refuelling costs with Fleet Fuels commercial fuel cards. Fixed wholesale pricing, HMRC-compliant VAT reporting, and access to over 8,000+ UK forecourts.',
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
    line1: 'Fleet Fuels Business Park',
    city: 'London',
    country: 'United Kingdom',
    postcode: 'EC2A 4NE',
  },
  nav: [
    { name: 'Fuel Cards', href: '#fuel-cards' },
    { name: 'Coverage Network', href: '#network' },
    { name: 'Cost Savings', href: '#savings' },
    { name: 'Bulk Fuel & AdBlue', href: '#bulk-fuel' },
    { name: 'About Us', href: '#about' },
  ],
  footerNav: [
    {
      title: 'Fuel Card Networks',
      items: [
        { name: 'Keyfuels Card', href: '#fuel-cards' },
        { name: 'UK Fuels Card', href: '#fuel-cards' },
        { name: 'Esso Commercial Card', href: '#fuel-cards' },
        { name: 'Shell Fleet Card', href: '#fuel-cards' },
        { name: 'BP Plus Card', href: '#fuel-cards' },
        { name: 'Texaco Fastfuel', href: '#fuel-cards' },
      ],
    },
    {
      title: 'Fleet Solutions',
      items: [
        { name: 'Fixed Wholesale Pricing', href: '#savings' },
        { name: 'HMRC VAT Consolidation', href: '#benefits' },
        { name: 'Bulk Fuel & HVO', href: '#bulk-fuel' },
        { name: 'AdBlue Solutions', href: '#bulk-fuel' },
        { name: 'Forecourt Network Map', href: '#network' },
      ],
    },
    {
      title: 'Company & Legal',
      items: [
        { name: 'About Fleet Fuels', href: '#about' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'LLM Search Index (/llms.txt)', href: '/llms.txt' },
      ],
    },
  ],
};
