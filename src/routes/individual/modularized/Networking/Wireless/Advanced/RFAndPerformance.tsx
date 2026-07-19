import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RSSISNRAndMCS = lazy(() => import('@/Pages/MainTabs/Networking/Wireless/Advanced/RFAndPerformance/RSSISNRAndMCS'));
const BandSteeringAndLoadBalance = lazy(() => import('@/Pages/MainTabs/Networking/Wireless/Advanced/RFAndPerformance/BandSteeringAndLoadBalance'));

const RFAndPerformance: RouteObject[] = [
  {
    path: '/wireless/advanced/rf-performance/rssi-snr-and-mcs',
    element: <RSSISNRAndMCS />,
  },
  {
    path: '/wireless/advanced/rf-performance/band-steering-and-load-balance',
    element: <BandSteeringAndLoadBalance />,
  },
];

export default RFAndPerformance;
