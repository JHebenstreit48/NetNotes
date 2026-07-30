import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FailoverAndClustering = lazy(() => import('@/pages/mainTabs/NetworkSecurity/Firewalls/Advanced/HighAvailability/FailoverAndClustering'));
const StateSyncAndHealth = lazy(() => import('@/pages/mainTabs/NetworkSecurity/Firewalls/Advanced/HighAvailability/StateSyncAndHealth'));

const HighAvailability: RouteObject[] = [
  {
    path: '/network-security/firewalls/advanced/ha/failover-clustering',
    element: <FailoverAndClustering />,
  },
  {
    path: '/network-security/firewalls/advanced/ha/state-sync-health',
    element: <StateSyncAndHealth />,
  },
];

export default HighAvailability;
