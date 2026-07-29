import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PortSecurity = lazy(() => import('@/pages/mainTabs/Networking/Switching/Advanced/EdgeServices/PortSecurity'));
const StormControl = lazy(() => import('@/pages/mainTabs/Networking/Switching/Advanced/EdgeServices/StormControl'));

const EdgeServices: RouteObject[] = [
  {
    path: '/networking/switching/advanced/edge-services/port-security',
    element: <PortSecurity />,
  },
  {
    path: '/networking/switching/advanced/edge-services/storm-control',
    element: <StormControl />,
  },
];

export default EdgeServices;