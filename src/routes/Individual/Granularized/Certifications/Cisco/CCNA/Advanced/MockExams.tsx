import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Timed = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Advanced/MockExams/Timed'));
const ReviewAndAnalytics = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Advanced/MockExams/ReviewAndAnalytics'));

const MockExams: RouteObject[] = [
  {
    path: '/certifications/cisco/ccna/advanced/mock-exams/timed-120-min',
    element: <Timed />,
  },
  {
    path: '/certifications/cisco/ccna/advanced/mock-exams/review-and-analytics',
    element: <ReviewAndAnalytics />,
  },
];

export default MockExams;
