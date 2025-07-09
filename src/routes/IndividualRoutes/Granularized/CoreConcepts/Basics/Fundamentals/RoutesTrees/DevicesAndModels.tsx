import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NetworkDevices = lazy(
  () => import('@/Pages/MainTabs/CoreConcepts/Basics/Fundamentals/DevicesAndModels/NetworkDevices')
);

const DevicesAndModels: RouteObject[] = [
  {
    path: '/coreconcepts/basics/fundamentals/devicesandmodels/networkdevices',
    element: <NetworkDevices />,
  },
];

export default DevicesAndModels;