import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Services',
      href: '#services',
    },
    {
      text: 'Process',
      href: '#process',
    },
    {
      text: 'FAQ',
      href: '#faq',
    },
    {
      text: 'Contact',
      href: '#contact',
    },
  ],
  actions: [{ text: 'Book a Free Strategy Call', href: '#contact', variant: 'primary' as const }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'CRM Setup', href: '#services' },
        { text: 'Missed-Call Text Back', href: '#services' },
        { text: 'Appointment Booking', href: '#services' },
        { text: 'Lead Follow-Up', href: '#services' },
        { text: 'Reactivation Campaigns', href: '#services' },
        { text: 'AI Chat Automation', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Services', href: '#services' },
        { text: 'Process', href: '#process' },
        { text: 'FAQ', href: '#faq' },
        { text: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'FAQ', href: '#faq' },
        { text: 'Book a Call', href: '#contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} Cyber Safe Solutions. All rights reserved.
  `,
};
