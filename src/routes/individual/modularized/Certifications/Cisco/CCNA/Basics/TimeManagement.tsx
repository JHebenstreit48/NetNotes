import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PacingAndTimedBlocks = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Basics/TimeManagement/PacingAndTimedBlocks'));
const ReviewWindows = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Basics/TimeManagement/ReviewWindows'));

const TimeManagement: RouteObject[] = [
  {
    path: '/certifications/cisco/ccna/basics/time-management/pacing-and-timed-blocks',
    element: <PacingAndTimedBlocks />,
  },
  {
    path: '/certifications/cisco/ccna/basics/time-management/review-windows',
    element: <ReviewWindows />,
  },
];

export default TimeManagement;
