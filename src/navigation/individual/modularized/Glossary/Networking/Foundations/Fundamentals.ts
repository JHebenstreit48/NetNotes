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
    {
      name: 'CLI & Commands',
      path: '/glossary/networking/foundations/fundamentals/cli-and-commands',
    },
  ],
};

export default Fundamentals;