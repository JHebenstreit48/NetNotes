import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(
  () => import('@/Pages/MainTabs/CoreConcepts/Basics/OSIModel/Overview/Fundamentals')
);
const LayerComparison = lazy(
  () => import('@/Pages/MainTabs/CoreConcepts/Basics/OSIModel/Overview/LayerComparison')
);

const OSIOverview: RouteObject[] = [
  {
    path: '/coreconcepts/basics/osimodel/fundamentals',
    element: <Overview />
  },
  {
    path: '/coreconcepts/basics/osimodel/layercomparison',
    element: <LayerComparison />
  }
];

export default OSIOverview;