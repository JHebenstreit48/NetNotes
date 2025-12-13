import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PortSecurity = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Switching/Advanced/EdgeServices/PortSecurity'));
const StormControl = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Switching/Advanced/EdgeServices/StormControl'));

const EdgeServices: RouteObject[] = [
  {
    path: '/switching/advanced/edge-services/port-security',
    element: <PortSecurity />,
  },
  {
    path: '/switching/advanced/edge-services/storm-control',
    element: <StormControl />,
  },
];

export default EdgeServices;