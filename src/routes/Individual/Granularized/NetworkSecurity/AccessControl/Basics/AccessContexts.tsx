import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NetworkAccess = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/AccessControl/Basics/AccessContexts/NetworkAccess'));
const DeviceAdmin = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/AccessControl/Basics/AccessContexts/DeviceAdmin'));

const AccessContexts: RouteObject[] = [
  {
    path: '/access/basics/contexts/network-access-8021x',
    element: <NetworkAccess />,
  },
  {
    path: '/access/basics/contexts/device-admin',
    element: <DeviceAdmin />,
  },
];

export default AccessContexts;
