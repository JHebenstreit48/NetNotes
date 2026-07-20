import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FragmentationAndTTLTricks = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/IDSAndIPS/Advanced/EvasionAndResilience/FragmentationAndTTLTricks'));
const PerformanceAndLatency = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/IDSAndIPS/Advanced/EvasionAndResilience/PerformanceAndLatency'));

const EvasionAndResilience: RouteObject[] = [
  {
    path: '/ids-ips/advanced/evasion/fragmentation-ttl',
    element: <FragmentationAndTTLTricks />,
  },
  {
    path: '/ids-ips/advanced/resilience/performance-latency',
    element: <PerformanceAndLatency />,
  },
];

export default EvasionAndResilience;
