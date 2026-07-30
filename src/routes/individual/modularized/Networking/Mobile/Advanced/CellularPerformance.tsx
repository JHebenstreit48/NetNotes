import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CongestionAndThrottling = lazy(() => import('@/pages/mainTabs/Networking/Mobile/Advanced/CellularPerformance/CongestionAndThrottling'));
const Handoffs = lazy(() => import('@/pages/mainTabs/Networking/Mobile/Advanced/CellularPerformance/Handoffs'));

const CellularPerformance: RouteObject[] = [
  {
    path: '/networking/mobile/advanced/cellular-performance/congestion-and-throttling',
    element: <CongestionAndThrottling />,
  },
  {
    path: '/networking/mobile/advanced/cellular-performance/handoffs-concepts',
    element: <Handoffs />,
  },
];

export default CellularPerformance;
