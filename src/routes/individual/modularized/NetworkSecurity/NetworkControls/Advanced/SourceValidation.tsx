import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IPSourceGuard = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/NetworkControls/Advanced/SourceValidation/IPSourceGuard'));
const URPF = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/NetworkControls/Advanced/SourceValidation/URPF'));

const SourceValidation: RouteObject[] = [
  {
    path: '/net-controls/advanced/source-validation/ip-source-guard',
    element: <IPSourceGuard />,
  },
  {
    path: '/net-controls/advanced/source-validation/urpf',
    element: <URPF />,
  },
];

export default SourceValidation;
