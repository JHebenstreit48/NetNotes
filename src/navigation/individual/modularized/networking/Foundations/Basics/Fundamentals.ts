import type { Subpage } from '@/types/navigation';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    {
      name: 'Network Scope & Devices',
      subpages: [
        {
          name: 'Introduction',
          path: '/networking/foundations/basics/fundamentals/network-scope-and-devices/introduction',
        },
        {
          name: 'Internet/Networks',
          path: '/networking/foundations/basics/fundamentals/network-scope-and-devices/internet',
        },
        {
          name: 'Local Networks',
          path: '/networking/foundations/basics/fundamentals/network-scope-and-devices/local-networks',
        },
        {
          name: 'Connected Devices',
          path: '/networking/foundations/basics/fundamentals/network-scope-and-devices/connected-devices',
        },
      ],
    },
    {
      name: 'Protocols & Standards',
      subpages: [
        {
          name: 'Communication Protocols',
          path: '/networking/foundations/basics/fundamentals/protocols-and-standards/communication-protocols',
        },
        {
          name: 'Standards & Organizations',
          path: '/networking/foundations/basics/fundamentals/protocols-and-standards/standards-and-organizations',
        },
      ],
    },
  ],
};

export default Fundamentals;