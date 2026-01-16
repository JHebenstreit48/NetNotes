import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EightWeek = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/DevNet/Advanced/BlueprintPlans/EightWeek'));
const TwelveWeek = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/DevNet/Advanced/BlueprintPlans/TwelveWeek'));

const BlueprintPlans: RouteObject[] = [
  {
    path: '/certifications/cisco/devnet/advanced/blueprint-plans/8-week-associate',
    element: <EightWeek />,
  },
  {
    path: '/certifications/cisco/devnet/advanced/blueprint-plans/12-week-devcor',
    element: <TwelveWeek />,
  },
];

export default BlueprintPlans;
