import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TimedMock = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNP/Advanced/MockExams/TimedMock'));
const ReviewAndAnalytics = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNP/Advanced/MockExams/ReviewAndAnalytics'));

const MockExams: RouteObject[] = [
  {
    path: '/certifications/cisco/ccnp/advanced/mock-exams/timed-mock',
    element: <TimedMock />,
  },
  {
    path: '/certifications/cisco/ccnp/advanced/mock-exams/review-and-analytics',
    element: <ReviewAndAnalytics />,
  },
];

export default MockExams;
