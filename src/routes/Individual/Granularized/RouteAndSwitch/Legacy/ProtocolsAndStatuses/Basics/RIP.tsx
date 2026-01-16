import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RIPOverview = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/ProtocolsAndStatuses/Basics/RIP/RIPOverview'));
const DistanceVectorOps = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/ProtocolsAndStatuses/Basics/RIP/DistanceVectorOps'));

const RIP: RouteObject[] = [
  {
    path: '/legacy/protocols-and-statuses/rip/overview',
    element: <RIPOverview />,
  },
  {
    path: '/legacy/protocols-and-statuses/rip/distance-vector-ops',
    element: <DistanceVectorOps />,
  },
];

export default RIP;
