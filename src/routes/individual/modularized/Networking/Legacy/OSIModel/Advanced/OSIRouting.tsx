import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ESIS = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/OSIModel/Advanced/OSIRouting/ESIS'));
const ISIS = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/OSIModel/Advanced/OSIRouting/ISIS'));

const OSIRouting: RouteObject[] = [
  {
    path: '/coreconcepts/osimodel/advanced/osi-routing-origins/es-is',
    element: <ESIS />,
  },
  {
    path: '/coreconcepts/osimodel/advanced/osi-routing-origins/is-is-osi',
    element: <ISIS />,
  },
];

export default OSIRouting;
