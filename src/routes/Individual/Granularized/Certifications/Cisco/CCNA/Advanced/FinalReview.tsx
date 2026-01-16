import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SeventyTwoHourPlan = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Advanced/FinalReview/SeventyTwoHourPlan'));
const DayBeforeChecklist = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Advanced/FinalReview/DayBeforeChecklist'));

const FinalReview: RouteObject[] = [
  {
    path: '/certifications/cisco/ccna/advanced/final-review/72-hour-plan',
    element: <SeventyTwoHourPlan />,
  },
  {
    path: '/certifications/cisco/ccna/advanced/final-review/day-before-checklist',
    element: <DayBeforeChecklist />,
  },
];

export default FinalReview;