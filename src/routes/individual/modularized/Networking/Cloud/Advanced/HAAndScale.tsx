import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RedundancyAndFailover = lazy(() => import('@/pages/mainTabs/Networking/Cloud/Advanced/HAAndScale/RedundancyAndFailover'));
const RegionsAndLatency = lazy(() => import('@/pages/mainTabs/Networking/Cloud/Advanced/HAAndScale/RegionsAndLatency'));

const HAAndScale: RouteObject[] = [
  {
    path: '/networking/cloud/advanced/ha-and-scale/redundancy-and-failover',
    element: <RedundancyAndFailover />,
  },
  {
    path: '/networking/cloud/advanced/ha-and-scale/regions-and-latency',
    element: <RegionsAndLatency />,
  },
];

export default HAAndScale;
