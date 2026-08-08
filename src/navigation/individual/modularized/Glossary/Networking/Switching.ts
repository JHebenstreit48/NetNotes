import type { Subpage } from '@/types/navigation';

const Switching: Subpage = {
  name: 'Switching',
  subpages: [
    {
      name: 'Hosts & Ports',
      path: '/glossary/networking/switching/hosts-and-ports',
    },
    {
      name: 'L2 Concepts & Architecture',
      path: '/glossary/networking/switching/l2-concepts-and-architecture',
    },
    {
      name: 'Protocols',
      path: '/glossary/networking/switching/protocols',
    },
    {
      name: 'Power over Ethernet (PoE)',
      path: '/glossary/networking/switching/power-over-ethernet',
    },
  ],
};

export default Switching;