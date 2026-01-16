import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DataVsControlVsMgmt = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Fundamentals/Advanced/PlanesAndTraffic/DataVsControlVsMgmt'));
const UnicastMulticastBroadcast = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/Fundamentals/Advanced/PlanesAndTraffic/UnicastMulticastBroadcast'));

const PlanesAndTraffic: RouteObject[] = [
  {
    path: '/fundamentals/advanced/planes-and-traffic/data-vs-control-vs-management',
    element: <DataVsControlVsMgmt />,
  },
  {
    path: '/fundamentals/advanced/planes-and-traffic/unicast-multicast-broadcast',
    element: <UnicastMulticastBroadcast />,
  },
];

export default PlanesAndTraffic;
