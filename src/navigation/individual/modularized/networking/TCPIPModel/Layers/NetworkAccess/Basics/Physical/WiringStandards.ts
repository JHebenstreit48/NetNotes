import type { Subpage } from '@/types/navigation';

const WiringStandards: Subpage = {
  name: 'Wiring Standards',
  subpages: [
    {
      name: 'T568A vs T568B',
      path: '/networking/tcp-ip-model/layers/network-access/basics/physical/wiring-standards/t568a-vs-t568b',
    },
    {
      name: 'Straight-Through vs Crossover',
      path: '/networking/tcp-ip-model/layers/network-access/basics/physical/wiring-standards/straight-through-vs-crossover',
    },
    {
      name: 'Terminating Ethernet (Crimp & Punchdown)',
      path: '/networking/tcp-ip-model/layers/network-access/basics/physical/wiring-standards/terminating-ethernet',
    }
  ]
};

export default WiringStandards;