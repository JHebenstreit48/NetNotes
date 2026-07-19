import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RAGuard = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/NetworkControls/Basics/IPv6FirstHop/RAGuard'));
const NDInspection = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/NetworkControls/Basics/IPv6FirstHop/NDInspection'));

const IPv6FirstHop: RouteObject[] = [
  {
    path: '/net-controls/basics/ipv6/ra-guard',
    element: <RAGuard />,
  },
  {
    path: '/net-controls/basics/ipv6/nd-inspection',
    element: <NDInspection />,
  },
];

export default IPv6FirstHop;
