import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BasicRouterSetup = lazy(
  () => import('@/pages/MainTabs/Networking/Foundations/Basics/DevicesAndModels/Routers/BasicRouterSetup')
);
const RolesAndTypes = lazy(
  () => import('@/pages/MainTabs/Networking/Foundations/Basics/DevicesAndModels/Routers/RolesAndTypes')
);
const Interfaces = lazy(
  () => import('@/pages/MainTabs/Networking/Foundations/Basics/DevicesAndModels/Routers/Interfaces')
);
const PortTypes = lazy(() => import('@/pages/MainTabs/Networking/Foundations/Basics/DevicesAndModels/Routers/PortTypes'));
const RoutingVsSwitching = lazy(
  () => import('@/pages/MainTabs/Networking/Foundations/Basics/DevicesAndModels/Routers/RoutingVsSwitching')
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
    path: '/foundations/basics/devices-and-models/routers/interfaces',
    element: <Interfaces />,
  },
  {
    path: '/foundations/basics/devices-and-models/routers/port-types',
    element: <PortTypes />,
  },
  {
    path: '/foundations/basics/devices-and-models/routers/routing-vs-switching',
    element: <RoutingVsSwitching />,
  },
];

export default Routers;