import type { Subpage } from '@/types/navigation';

const Routers: Subpage = {
  name: 'Routers',
  subpages: [
    {
      name: 'Basic Router Setup',
      path: '/foundations/basics/devices-and-models/routers/basic-router-setup',
    },
    {
      name: 'Roles & Types',
      path: '/foundations/basics/devices-and-models/routers/roles-and-types',
    },
    {
      name: 'Interfaces & Port Types',
      path: '/foundations/basics/devices-and-models/routers/interfaces-and-port-types',
    },
    {
      name: 'Router Models',
      path: '/foundations/basics/devices-and-models/routers/router-models',
    },
    {
      name: 'Routing vs Switching',
      path: '/foundations/basics/devices-and-models/routers/routing-vs-switching',
    },
  ],
};

export default Routers;