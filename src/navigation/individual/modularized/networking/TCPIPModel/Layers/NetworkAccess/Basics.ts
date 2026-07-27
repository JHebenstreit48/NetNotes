import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Layer 2: Data Link',
      subpages: [
        {
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
            },
          ],
        },
        {
          name: 'Frames & Addressing',
          subpages: [
            {
              name: 'MAC Addressing',
              path: '/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/mac-addressing',
            },
            {
              name: 'Ethernet Frame Fields',
              path: '/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/ethernet-frame-fields',
            },
            {
              name: 'Burned-In Address (BIA)',
              path: '/networking/tcp-ip-model/layers/network-access/basics/data-link/frames-and-addressing/burned-in-address-bia',
            },
          ],
        },
      ],
    },
    {
      name: 'Layer 1: Physical',
      subpages: [
        {
          name: 'Signals & Media',
          subpages: [
            {
              name: 'Introduction',
              path: '/networking/tcp-ip-model/layers/network-access/basics/physical/signals-and-media/introduction',
            },
            {
              name: 'Bit/Digital Signals',
              path: '/networking/tcp-ip-model/layers/network-access/basics/physical/signals-and-media/bit-digital-signals',
            },
          ],
        },
        {
          name: 'Transmission Concepts',
          subpages: [
            {
              name: 'Communication Standards',
              path: '/networking/tcp-ip-model/layers/network-access/basics/physical/transmission/communication-standards',
            },
            {
              name: 'Data Transmission Methods',
              path: '/networking/tcp-ip-model/layers/network-access/basics/physical/transmission/data-transmission-methods',
            },
          ],
        },
        {
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
            },
          ],
        },
        {
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
            },
          ],
        },
        {
          name: 'Bandwidth & Throughput',
          subpages: [
            {
              name: 'Bandwidth',
              path: '/networking/tcp-ip-model/layers/network-access/basics/physical/bandwidth-and-throughput/bandwidth',
            },
            {
              name: 'Throughput',
              path: '/networking/tcp-ip-model/layers/network-access/basics/physical/bandwidth-and-throughput/throughput',
            },
          ],
        },
      ],
    },
  ],
};

export default Basics;