import type { Subpage } from '@/types/navigation';

const Routers: Subpage = {
  name: 'Routers',
  subpages: [
    {
      name: 'Gateways & Default Gateway',
      path: '/glossary/networking/foundations/routers/gateways-and-default-gateway',
    },
    // Future additions as terms grow, e.g.:
    // { name: 'Router Interfaces', path: '...' },
    // { name: 'Wireless Router Features', path: '...' },
    // { name: 'Routing Basics', path: '...' },
  ],
};

export default Routers;