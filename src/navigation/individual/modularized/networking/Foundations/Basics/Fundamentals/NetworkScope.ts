import type { Subpage } from '@/types/navigation';

const NetworkScope: Subpage = {
  name: 'Network Scope',
  subpages: [
    {
      name: 'Introduction',
      path: '/networking/foundations/basics/fundamentals/network-scope/introduction',
    },
    {
      name: 'Internet/Networks',
      path: '/networking/foundations/basics/fundamentals/network-scope/internet',
    },
    {
      name: 'Local Networks',
      path: '/networking/foundations/basics/fundamentals/network-scope/local-networks',
    },
  ],
};

export default NetworkScope;