import type { Subpage } from '@/types/navigation';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    {
      name: 'Network Basics',
      path: '/glossary/networking/foundations/fundamentals/network-basics',
    },
    {
      name: 'Addressing & Subnetting Intro',
      path: '/glossary/networking/foundations/fundamentals/addressing-and-subnetting-intro',
    },
    {
      name: 'OSI vs TCP/IP Models',
      path: '/glossary/networking/foundations/fundamentals/osi-vs-tcpip-models',
    },
    // Later additions as you cover more intro material:
    // { name: 'Collision vs Broadcast Domains', path: '...' },
    // { name: 'Physical Layer Terms', path: '...' },
    // { name: 'Data Link Layer Basics', path: '...' },
  ],
};

export default Fundamentals;