import type { Subpage } from '@/types/navigation';

const DynamicRouting: Subpage = {
  name: 'Dynamic Routing',
  subpages: [
    {
      name: 'Introduction',
      path: '/networking/foundations/advanced/routing-protocols/static-and-dynamic-routing/dynamic-routing/introduction',
    },
    {
      name: 'Metrics & Decision Making',
      path: '/networking/foundations/advanced/routing-protocols/static-and-dynamic-routing/dynamic-routing/metrics-and-decision-making',
    },
    {
      name: 'Configuration Scenarios',
      path: '/networking/foundations/advanced/routing-protocols/static-and-dynamic-routing/dynamic-routing/configuration-scenarios',
    },
  ],
};

export default DynamicRouting;