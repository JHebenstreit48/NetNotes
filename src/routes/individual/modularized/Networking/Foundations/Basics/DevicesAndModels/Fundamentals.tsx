import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NetworkInfrastructure = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/DevicesAndModels/Fundamentals/NetworkInfrastructure')
);

const NetworkDevices = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/DevicesAndModels/Fundamentals/NetworkDevices')
);
const HomeNetworkArchitecture = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/DevicesAndModels/Fundamentals/HomeNetworkArchitecture')
);
const NetworkModels = lazy(
  () => import('@/pages/mainTabs/Networking/Foundations/Basics/DevicesAndModels/Fundamentals/NetworkModels')
);

const DevicesAndModels: RouteObject[] = [
  {
    path: '/networking/foundations/basics/devices-and-models/fundamentals/network-infrastructure',
    element: <NetworkInfrastructure />,
  },
  {
    path: '/networking/foundations/basics/devices-and-models/fundamentals/network-devices',
    element: <NetworkDevices />,
  },
  {
    path: '/networking/foundations/basics/devices-and-models/fundamentals/home-network-architecture',
    element: <HomeNetworkArchitecture />,
  },
  {
    path: '/networking/foundations/basics/devices-and-models/fundamentals/network-models',
    element: <NetworkModels />,
  },
];

export default DevicesAndModels;