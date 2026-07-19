import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Networking/Mobile/Basics/Cellular/Introduction'));
const CoverageAndDataPlans = lazy(() => import('@/Pages/MainTabs/Networking/Mobile/Basics/Cellular/CoverageAndDataPlans'));

const Cellular: RouteObject[] = [
  {
    path: '/mobile/basics/cellular/introduction',
    element: <Introduction />,
  },
  {
    path: '/mobile/basics/cellular/coverage-and-data-plans',
    element: <CoverageAndDataPlans />,
  },
];

export default Cellular;
