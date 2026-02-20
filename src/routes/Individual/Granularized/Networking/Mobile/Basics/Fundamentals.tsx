import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Networking/Mobile/Basics/Fundamentals/Introduction'));
const RadiosAtAGlance = lazy(() => import('@/Pages/MainTabs/Networking/Mobile/Basics/Fundamentals/RadiosAtAGlance'));
const NetworkSelection = lazy(() => import('@/Pages/MainTabs/Networking/Mobile/Basics/Fundamentals/NetworkSelection'));

const Fundamentals: RouteObject[] = [
  {
    path: '/mobile/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/mobile/basics/fundamentals/radios-at-a-glance',
    element: <RadiosAtAGlance />,
  },
  {
    path: '/mobile/basics/fundamentals/network-selection',
    element: <NetworkSelection />,
  },
];

export default Fundamentals;