import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/VoIP/Foundations/Basics/Fundamentals/Introduction'));
const CoreComponents = lazy(() => import('@/Pages/MainTabs/VoIP/Foundations/Basics/Fundamentals/CoreComponents'));

const Fundamentals: RouteObject[] = [
  {
    path: '/voip/introduction/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/voip/introduction/basics/fundamentals/core-components',
    element: <CoreComponents />,
  },
];

export default Fundamentals;
