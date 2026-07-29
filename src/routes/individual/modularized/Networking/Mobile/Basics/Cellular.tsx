import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Networking/Mobile/Basics/Cellular/Introduction'));
const CoverageAndDataPlans = lazy(() => import('@/pages/mainTabs/Networking/Mobile/Basics/Cellular/CoverageAndDataPlans'));

const Cellular: RouteObject[] = [
  {
    path: '/networking/mobile/basics/cellular/introduction',
    element: <Introduction />,
  },
  {
    path: '/networking/mobile/basics/cellular/coverage-and-data-plans',
    element: <CoverageAndDataPlans />,
  },
];

export default Cellular;
