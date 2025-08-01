import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NetworkDevices = lazy(
  () => import('@/Pages/MainTabs/CoreConcepts/Basics/Fundamentals/DevicesAndModels/NetworkDevices')
);
const NetworkModels = lazy(
  () => import('@/Pages/MainTabs/CoreConcepts/Basics/Fundamentals/DevicesAndModels/NetworkModels')
);

const DevicesAndModels: RouteObject[] = [
  {
    path: '/coreconcepts/basics/fundamentals/devicesandmodels/networkdevices',
    element: <NetworkDevices />,
  },
  {
    path: '/coreconcepts/basics/fundamentals/devicesandmodels/networkmodels',
    element: <NetworkModels />,
  },
];

export default DevicesAndModels;