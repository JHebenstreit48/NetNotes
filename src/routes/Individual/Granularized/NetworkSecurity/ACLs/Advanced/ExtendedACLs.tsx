import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/ACLs/Advanced/ExtendedACLs/Basics'));
const Syntax = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/ACLs/Advanced/ExtendedACLs/Syntax'));
const Placement = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/ACLs/Advanced/ExtendedACLs/Placement'));

const ExtendedACLs: RouteObject[] = [
  {
    path: '/acls/advanced/extended/basics',
    element: <Basics />,
  },
  {
    path: '/acls/advanced/extended/syntax',
    element: <Syntax />,
  },
  {
    path: '/acls/advanced/extended/placement',
    element: <Placement />,
  },
];

export default ExtendedACLs;
