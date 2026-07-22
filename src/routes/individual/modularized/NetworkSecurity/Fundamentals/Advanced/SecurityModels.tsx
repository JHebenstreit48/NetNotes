import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const KillChainVsATTAndCK = lazy(() => import('@/pages/MainTabs/NetworkSecurity/Fundamentals/Advanced/SecurityModels/KillChainVsATTAndCK'));
const ControlTypesAndMapping = lazy(() => import('@/pages/MainTabs/NetworkSecurity/Fundamentals/Advanced/SecurityModels/ControlTypesAndMapping'));

const SecurityModels: RouteObject[] = [
  {
    path: '/fundamentals/advanced/models/kill-chain-vs-attck',
    element: <KillChainVsATTAndCK />,
  },
  {
    path: '/fundamentals/advanced/models/control-types-mapping',
    element: <ControlTypesAndMapping />,
  },
];

export default SecurityModels;
