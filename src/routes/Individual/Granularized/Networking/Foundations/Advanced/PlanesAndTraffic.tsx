import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DataVsControlVsMgmt = lazy(() => import('@/Pages/MainTabs/Networking/Foundations/Advanced/PlanesAndTraffic/DataVsControlVsMgmt'));
const UnicastMulticastBroadcast = lazy(() => import('@/Pages/MainTabs/Networking/Foundations/Advanced/PlanesAndTraffic/UnicastMulticastBroadcast'));

const PlanesAndTraffic: RouteObject[] = [
  {
    path: '/foundations/advanced/planes-and-traffic/data-vs-control-vs-management',
    element: <DataVsControlVsMgmt />,
  },
  {
    path: '/foundations/advanced/planes-and-traffic/unicast-multicast-broadcast',
    element: <UnicastMulticastBroadcast />,
  },
];

export default PlanesAndTraffic;
