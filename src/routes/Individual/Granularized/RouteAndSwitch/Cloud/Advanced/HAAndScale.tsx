import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RedundancyAndFailover = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Cloud/Advanced/HAAndScale/RedundancyAndFailover'));
const RegionsAndLatency = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Cloud/Advanced/HAAndScale/RegionsAndLatency'));

const HAAndScale: RouteObject[] = [
  {
    path: '/cloud/advanced/ha-and-scale/redundancy-and-failover',
    element: <RedundancyAndFailover />,
  },
  {
    path: '/cloud/advanced/ha-and-scale/regions-and-latency',
    element: <RegionsAndLatency />,
  },
];

export default HAAndScale;
