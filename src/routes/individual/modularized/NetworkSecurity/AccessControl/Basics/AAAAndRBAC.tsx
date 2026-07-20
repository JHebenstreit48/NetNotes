import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Concepts = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/AccessControl/Basics/AAAAndRBAC/Concepts'));
const RADIUSVsTACACS = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/AccessControl/Basics/AAAAndRBAC/RADIUSVsTACACS'));

const AAAAndRBAC: RouteObject[] = [
  {
    path: '/access/basics/aaa-rbac/concepts',
    element: <Concepts />,
  },
  {
    path: '/access/basics/aaa-rbac/radius-vs-tacacs',
    element: <RADIUSVsTACACS />,
  },
];

export default AAAAndRBAC;
