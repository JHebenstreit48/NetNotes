import type { Subpage } from '@/types/navigation';

const CoreConcepts: Subpage = {
  name: 'Core Concepts',
  subpages: [
    {
      name: 'Introduction',
      path: '/networking/tcp-ip-model/layers/network-access/basics/data-link/core-concepts/introduction',
    },
    {
      name: 'Encapsulation',
      path: '/networking/tcp-ip-model/layers/network-access/basics/data-link/core-concepts/encapsulation',
    },
    {
      name: 'De-encapsulation',
      path: '/networking/tcp-ip-model/layers/network-access/basics/data-link/core-concepts/de-encapsulation',
    },
    {
      name: 'Address Resolution Protocol (ARP)',
      path: '/networking/tcp-ip-model/layers/network-access/basics/data-link/core-concepts/arp',
    }
  ]
};

export default CoreConcepts;