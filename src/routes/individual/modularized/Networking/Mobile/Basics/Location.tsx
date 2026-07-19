import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Networking/Mobile/Basics/Location/Introduction'));
const AccuracyAndLimitations = lazy(() => import('@/Pages/MainTabs/Networking/Mobile/Basics/Location/AccuracyAndLimitations'));

const Location: RouteObject[] = [
  {
    path: '/mobile/basics/location/introduction',
    element: <Introduction />,
  },
  {
    path: '/mobile/basics/location/accuracy-and-limitations',
    element: <AccuracyAndLimitations />,
  },
];

export default Location;
