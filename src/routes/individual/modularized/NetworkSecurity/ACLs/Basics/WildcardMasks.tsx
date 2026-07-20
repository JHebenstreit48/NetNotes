import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Fundamentals = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/ACLs/Basics/WildcardMasks/Fundamentals'));
const WildcardVsSubnetMask = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/ACLs/Basics/WildcardMasks/WildcardVsSubnetMask'));
const Calculation = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/ACLs/Basics/WildcardMasks/Calculation'));

const WildcardMasks: RouteObject[] = [
  {
    path: '/acls/basics/wildcards/fundamentals',
    element: <Fundamentals />,
  },
  {
    path: '/acls/basics/wildcards/vs-subnet-mask',
    element: <WildcardVsSubnetMask />,
  },
  {
    path: '/acls/basics/wildcards/calculation',
    element: <Calculation />,
  },
];

export default WildcardMasks;
