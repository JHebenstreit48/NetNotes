import type { Subpage } from '@/types/navigation';

const StaticRouting: Subpage = {
  name: 'Static Routing',
  subpages: [
    {
      name: 'Introduction',
      path: '/networking/foundations/advanced/routing-protocols/static-and-dynamic/static/introduction',
    },
    {
      name: 'Configuration & Use Cases',
      path: '/networking/foundations/advanced/routing-protocols/static-and-dynamic/static-routing/configuration-and-use-cases',
    },
    {
      name: 'Troubleshooting & Best Practices',
      path: '/networking/foundations/advanced/routing-protocols/static-and-dynamic/static/troubleshooting-and-best-practices',
    },
  ],
};

export default StaticRouting;