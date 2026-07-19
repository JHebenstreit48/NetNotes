import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NetworkInfrastructure = lazy(
  () => import('@/Pages/MainTabs/Networking/Foundations/Basics/DevicesAndModels/Fundamentals/NetworkInfrastructure')
);

const NetworkDevices = lazy(
  () => import('@/Pages/MainTabs/Networking/Foundations/Basics/DevicesAndModels/Fundamentals/NetworkDevices')
);
const HomeNetworkArchitecture = lazy(
  () => import('@/Pages/MainTabs/Networking/Foundations/Basics/DevicesAndModels/Fundamentals/HomeNetworkArchitecture')
);
const NetworkModels = lazy(
  () => import('@/Pages/MainTabs/Networking/Foundations/Basics/DevicesAndModels/Fundamentals/NetworkModels')
);

const DevicesAndModels: RouteObject[] = [
  {
    path: '/foundations/basics/devices-and-models/fundamentals/network-infrastructure',
    element: <NetworkInfrastructure />,
  },
  {
    path: '/foundations/basics/devices-and-models/fundamentals/network-devices',
    element: <NetworkDevices />,
  },
  {
    path: '/foundations/basics/devices-and-models/fundamentals/home-network-architecture',
    element: <HomeNetworkArchitecture />,
  },
  {
    path: '/foundations/basics/devices-and-models/fundamentals/network-models',
    element: <NetworkModels />,
  },
];

export default DevicesAndModels;