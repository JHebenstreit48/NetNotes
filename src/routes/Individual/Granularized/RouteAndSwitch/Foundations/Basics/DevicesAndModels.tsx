import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NetworkInfrastructure = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Foundations/Basics/DevicesAndModels/NetworkInfrastructure')
);

const NetworkDevices = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Foundations/Basics/DevicesAndModels/NetworkDevices')
);
const NetworkModels = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Foundations/Basics/DevicesAndModels/NetworkModels')
);

const DevicesAndModels: RouteObject[] = [
  {
    path: '/foundations/basics/devices-and-models/network-infrastructure',
    element: <NetworkInfrastructure />,
  },
  {
    path: '/foundations/basics/devices-and-models/network-devices',
    element: <NetworkDevices />,
  },
  {
    path: '/foundations/basics/devices-and-models/network-models',
    element: <NetworkModels />,
  },
];

export default DevicesAndModels;