import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/ACLs/Basics/StandardACLs/Basics'));
const Syntax = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/ACLs/Basics/StandardACLs/Syntax'));
const Placement = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/ACLs/Basics/StandardACLs/Placement'));

const StandardACLs: RouteObject[] = [
  {
    path: '/acls/basics/standard/basics',
    element: <Basics />,
  },
  {
    path: '/acls/basics/standard/syntax',
    element: <Syntax />,
  },
  {
    path: '/acls/basics/standard/placement',
    element: <Placement />,
  },
];

export default StandardACLs;
