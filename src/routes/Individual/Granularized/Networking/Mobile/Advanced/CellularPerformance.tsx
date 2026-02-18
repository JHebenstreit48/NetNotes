import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CongestionAndThrottling = lazy(() => import('@/Pages/MainTabs/Networking/Mobile/Advanced/CellularPerformance/CongestionAndThrottling'));
const Handoffs = lazy(() => import('@/Pages/MainTabs/Networking/Mobile/Advanced/CellularPerformance/Handoffs'));

const CellularPerformance: RouteObject[] = [
  {
    path: '/mobile/advanced/cellular-performance/congestion-and-throttling',
    element: <CongestionAndThrottling />,
  },
  {
    path: '/mobile/advanced/cellular-performance/handoffs-concepts',
    element: <Handoffs />,
  },
];

export default CellularPerformance;
