import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BasicRouterSetup = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/DevicesAndModels/Routers/BasicRouterSetup')
);
const RolesAndTypes = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/DevicesAndModels/Routers/RolesAndTypes')
);
const InterfacesAndPortTypes = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/DevicesAndModels/Routers/InterfacesAndPortTypes')
);
const RouterModels = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/DevicesAndModels/Routers/RouterModels')
);
const RoutingVsSwitching = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/DevicesAndModels/Routers/RoutingVsSwitching')
);

const Routers: RouteObject[] = [
  {
    path: '/foundations/basics/devices-and-models/routers/basic-router-setup',
    element: <BasicRouterSetup />,
  },
  {
    path: '/foundations/basics/devices-and-models/routers/roles-and-types',
    element: <RolesAndTypes />,
  },
  {
    path: '/foundations/basics/devices-and-models/routers/interfaces-and-port-types',
    element: <InterfacesAndPortTypes />,
  },
  {
    path: '/foundations/basics/devices-and-models/routers/router-models',
    element: <RouterModels />,
  },
  {
    path: '/foundations/basics/devices-and-models/routers/routing-vs-switching',
    element: <RoutingVsSwitching />,
  },
];

export default Routers;