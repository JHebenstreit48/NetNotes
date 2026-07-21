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
      name: 'Interfaces',
      path: '/foundations/basics/devices-and-models/routers/interfaces',
    },
    {
      name: 'Port Types',
      path: '/foundations/basics/devices-and-models/routers/port-types',
    },
    {
      name: 'Routing vs Switching',
      path: '/foundations/basics/devices-and-models/routers/routing-vs-switching',
    },
  ],
};

export default Routers;