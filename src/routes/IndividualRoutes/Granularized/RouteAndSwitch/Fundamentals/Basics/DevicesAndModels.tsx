import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NetworkDevices = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Fundamentals/DevicesAndModels/NetworkDevices')
);
const NetworkModels = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Fundamentals/DevicesAndModels/NetworkModels')
);

const DevicesAndModels: RouteObject[] = [
  {
    path: '/fundamentals/basics/devices-and-models/network-devices',
    element: <NetworkDevices />,
  },
  {
    path: '/fundamentals/basics/devices-and-models/network-models',
    element: <NetworkModels />,
  },
];

export default DevicesAndModels;