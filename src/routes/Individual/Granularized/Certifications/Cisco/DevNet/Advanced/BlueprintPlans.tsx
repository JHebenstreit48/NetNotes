import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const 8Week = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/DevNet/Advanced/BlueprintPlans/8Week'));
const 12Week = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/DevNet/Advanced/BlueprintPlans/12Week'));

const BlueprintPlans: RouteObject[] = [
  {
    path: '/certifications/cisco/devnet/advanced/blueprint-plans/8-week-associate',
    element: <8Week />,
  },
  {
    path: '/certifications/cisco/devnet/advanced/blueprint-plans/12-week-devcor',
    element: <12Week />,
  },
];

export default BlueprintPlans;
