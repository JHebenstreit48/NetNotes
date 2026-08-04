import type { Subpage } from '@/types/navigation';

const Routers: Subpage = {
  name: 'Routers',
  subpages: [
    {
      name: 'Gateways & Default Gateway',
      path: '/glossary/networking/foundations/routers/gateways-and-default-gateway',
    },
    {
      name: 'Router Interfaces & Wireless Features',
      path: '/glossary/networking/foundations/routers/router-interfaces-and-wireless-features',
    },
    {
      name: 'Routing Basics',
      path: '/glossary/networking/foundations/routers/routing-basics',
    },
  ],
};

export default Routers;