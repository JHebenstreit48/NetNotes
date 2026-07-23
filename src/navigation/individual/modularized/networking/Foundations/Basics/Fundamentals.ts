import type { Subpage } from '@/types/navigation';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    {
      name: 'Network Scope & Devices',
      subpages: [
        {
          name: 'Introduction',
          path: '/foundations/basics/fundamentals/network-scope-and-devices/introduction',
        },
        {
          name: 'Internet/Networks',
          path: '/foundations/basics/fundamentals/network-scope-and-devices/internet',
        },
        {
          name: 'Local Networks',
          path: '/foundations/basics/fundamentals/network-scope-and-devices/local-networks',
        },
        {
          name: 'Connected Devices',
          path: '/foundations/basics/fundamentals/network-scope-and-devices/connected-devices',
        },
      ],
    },
    {
      name: 'Protocols & Standards',
      subpages: [
        {
          name: 'Communication Protocols',
          path: '/foundations/basics/fundamentals/protocols-and-standards/communication-protocols',
        },
        {
          name: 'Standards & Organizations',
          path: '/foundations/basics/fundamentals/protocols-and-standards/standards-and-organizations',
        },
      ],
    },
  ],
};

export default Fundamentals;