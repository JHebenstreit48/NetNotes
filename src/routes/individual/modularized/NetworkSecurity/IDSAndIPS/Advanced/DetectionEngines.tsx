import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SignaturesAndThresholds = lazy(() => import('@/pages/MainTabs/NetworkSecurity/IDSAndIPS/Advanced/DetectionEngines/SignaturesAndThresholds'));
const AnomalyAndBehavior = lazy(() => import('@/pages/MainTabs/NetworkSecurity/IDSAndIPS/Advanced/DetectionEngines/AnomalyAndBehavior'));

const DetectionEngines: RouteObject[] = [
  {
    path: '/ids-ips/advanced/engines/signatures-thresholds',
    element: <SignaturesAndThresholds />,
  },
  {
    path: '/ids-ips/advanced/engines/anomaly-behavior',
    element: <AnomalyAndBehavior />,
  },
];

export default DetectionEngines;
