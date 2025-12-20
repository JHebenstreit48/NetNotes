import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FailoverAndClustering = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/Firewalls/Advanced/HighAvailability/FailoverAndClustering'));
const StateSyncAndHealth = lazy(() => import('@/Pages/MainTabs/NetworkSecurity/Firewalls/Advanced/HighAvailability/StateSyncAndHealth'));

const HighAvailability: RouteObject[] = [
  {
    path: '/firewalls/advanced/ha/failover-clustering',
    element: <FailoverAndClustering />,
  },
  {
    path: '/firewalls/advanced/ha/state-sync-health',
    element: <StateSyncAndHealth />,
  },
];

export default HighAvailability;
