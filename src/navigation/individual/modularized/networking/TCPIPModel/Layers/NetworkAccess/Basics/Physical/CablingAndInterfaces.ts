import type { Subpage } from '@/types/navigation';

const CablingAndInterfaces: Subpage = {
  name: 'Cabling & Interfaces',
  subpages: [
    {
      name: 'Ethernet Cabling Categories',
      path: '/networking/tcp-ip-model/layers/network-access/basics/physical/cabling-and-interfaces/ethernet-cabling-categories',
    },
    {
      name: 'Coaxial Cable',
      path: '/networking/tcp-ip-model/layers/network-access/basics/physical/cabling-and-interfaces/coaxial-cable',
    },
    {
      name: 'Copper Connectors (RJ45 / 8P8C)',
      path: '/networking/tcp-ip-model/layers/network-access/basics/physical/cabling-and-interfaces/copper-connectors',
    },
    {
      name: 'Fiber Connectors & Transceivers',
      path: '/networking/tcp-ip-model/layers/network-access/basics/physical/cabling-and-interfaces/fiber-connectors-and-transceivers',
    },
    {
      name: 'Powerline Networking',
      path: '/networking/tcp-ip-model/layers/network-access/basics/physical/cabling-and-interfaces/powerline-networking',
    }
  ]
};

export default CablingAndInterfaces;