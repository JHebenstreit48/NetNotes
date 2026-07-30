import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Networking/Mobile/Basics/Fundamentals/Introduction'));
const RadiosAtAGlance = lazy(() => import('@/pages/mainTabs/Networking/Mobile/Basics/Fundamentals/RadiosAtAGlance'));
const NetworkSelection = lazy(() => import('@/pages/mainTabs/Networking/Mobile/Basics/Fundamentals/NetworkSelection'));

const Fundamentals: RouteObject[] = [
  {
    path: '/networking/mobile/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/networking/mobile/basics/fundamentals/radios-at-a-glance',
    element: <RadiosAtAGlance />,
  },
  {
    path: '/networking/mobile/basics/fundamentals/network-selection',
    element: <NetworkSelection />,
  },
];

export default Fundamentals;