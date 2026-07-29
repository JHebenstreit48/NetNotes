import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StatefulInspection = lazy(() => import('@/pages/mainTabs/NetworkSecurity/Firewalls/Basics/StatefulAndNAT/StatefulInspection'));
const NATFundamentals = lazy(() => import('@/pages/mainTabs/NetworkSecurity/Firewalls/Basics/StatefulAndNAT/NATFundamentals'));

const StatefulAndNAT: RouteObject[] = [
  {
    path: '/network-security/firewalls/basics/stateful-inspection',
    element: <StatefulInspection />,
  },
  {
    path: '/network-security/firewalls/basics/nat-fundamentals',
    element: <NATFundamentals />,
  },
];

export default StatefulAndNAT;
