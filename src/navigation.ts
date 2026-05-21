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
        { text: 'Lead Follow-Up Automation', href: '#services' },
        { text: 'Missed-Call Recovery', href: '#services' },
        { text: 'Appointment Booking', href: '#services' },
        { text: 'Customer Reactivation', href: '#services' },
        { text: 'AI Customer Service', href: '#services' },
        { text: 'Workflow Optimization', href: '#services' },
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
