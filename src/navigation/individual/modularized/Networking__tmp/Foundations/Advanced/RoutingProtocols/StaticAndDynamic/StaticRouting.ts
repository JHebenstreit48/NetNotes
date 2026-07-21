import type { Subpage } from '@/types/navigation';

const StaticRouting: Subpage = {
  name: 'Static Routing',
  subpages: [
    {
      name: 'Introduction',
      path: '/foundations/advanced/routing-protocols/static-and-dynamic/static/introduction',
    },
    {
      name: 'Configuration & Use Cases',
      path: '/foundations/advanced/routing-protocols/static-and-dynamic/static-routing/configuration-and-use-cases',
    },
    {
      name: 'Troubleshooting & Best Practices',
      path: '/foundations/advanced/routing-protocols/static-and-dynamic/static/troubleshooting-and-best-practices',
    },
  ],
};

export default StaticRouting;