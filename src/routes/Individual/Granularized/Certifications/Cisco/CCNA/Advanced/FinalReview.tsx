import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const 72HourPlan = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Advanced/FinalReview/72HourPlan'));
const DayBeforeChecklist = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Advanced/FinalReview/DayBeforeChecklist'));

const FinalReview: RouteObject[] = [
  {
    path: '/certifications/cisco/ccna/advanced/final-review/72-hour-plan',
    element: <72HourPlan />,
  },
  {
    path: '/certifications/cisco/ccna/advanced/final-review/day-before-checklist',
    element: <DayBeforeChecklist />,
  },
];

export default FinalReview;
