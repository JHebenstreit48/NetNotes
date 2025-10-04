import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/OSIModel/Basics/Overview/Fundamentals')
);
const LayerComparison = lazy(
  () => import('@/Pages/MainTabs/RouteAndSwitch/Legacy/OSIModel/Basics/Overview/LayerComparison')
);

const OSIOverview: RouteObject[] = [
  {
    path: '/legacy/osi-model/basics/overview/fundamentals',
    element: <Overview />
  },
  {
    path: '/legacy/osi-model/basics/overview/layer-comparison',
    element: <LayerComparison />
  }
];

export default OSIOverview;