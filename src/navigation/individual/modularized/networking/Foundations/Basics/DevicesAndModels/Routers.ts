import type { Subpage } from '@/types/navigation';

const Routers: Subpage = {
  name: 'Routers',
  subpages: [
    {
      name: 'Basic Router Setup',
      path: '/networking/foundations/basics/devices-and-models/routers/basic-router-setup',
    },
    {
      name: 'Roles & Types',
      path: '/networking/foundations/basics/devices-and-models/routers/roles-and-types',
    },
    {
      name: 'Interfaces & Port Types',
      path: '/networking/foundations/basics/devices-and-models/routers/interfaces-and-port-types',
    },
    {
      name: 'Router Models',
      path: '/networking/foundations/basics/devices-and-models/routers/router-models',
    },
    {
      name: 'Routing vs Switching',
      path: '/networking/foundations/basics/devices-and-models/routers/routing-vs-switching',
    },
  ],
};

export default Routers;