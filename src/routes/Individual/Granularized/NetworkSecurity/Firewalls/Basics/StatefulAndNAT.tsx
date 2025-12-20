import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StatefulInspection = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/Firewalls/Basics/StatefulAndNAT/StatefulInspection'));
const NATFundamentals = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/Firewalls/Basics/StatefulAndNAT/NATFundamentals'));

const StatefulAndNAT: RouteObject[] = [
  {
    path: '/firewalls/basics/stateful-inspection',
    element: <StatefulInspection />,
  },
  {
    path: '/firewalls/basics/nat-fundamentals',
    element: <NATFundamentals />,
  },
];

export default StatefulAndNAT;
