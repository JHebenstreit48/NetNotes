import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ErrorLog = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Advanced/WeakAreasAndRetros/ErrorLog'));
const ObjectiveHeatmap = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Advanced/WeakAreasAndRetros/ObjectiveHeatmap'));

const WeakAreasAndRetros: RouteObject[] = [
  {
    path: '/certifications/cisco/ccna/advanced/weak-areas-and-retros/error-log',
    element: <ErrorLog />,
  },
  {
    path: '/certifications/cisco/ccna/advanced/weak-areas-and-retros/objective-heatmap',
    element: <ObjectiveHeatmap />,
  },
];

export default WeakAreasAndRetros;
