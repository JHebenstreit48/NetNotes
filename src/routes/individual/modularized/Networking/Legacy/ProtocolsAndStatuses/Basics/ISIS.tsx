import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ISISOverview = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/ProtocolsAndStatuses/Basics/ISIS/ISISOverview'));
const LevelsAndAreas = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/ProtocolsAndStatuses/Basics/ISIS/LevelsAndAreas'));

const ISIS: RouteObject[] = [
  {
    path: '/legacy/protocols-and-statuses/isis/overview',
    element: <ISISOverview />,
  },
  {
    path: '/legacy/protocols-and-statuses/isis/levels-and-areas',
    element: <LevelsAndAreas />,
  },
];

export default ISIS;
