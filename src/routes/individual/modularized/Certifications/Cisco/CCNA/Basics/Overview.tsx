import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ExamOverview = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Basics/Overview/ExamOverview'));
const PoliciesAndRegistration = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Basics/Overview/PoliciesAndRegistration'));

const Overview: RouteObject[] = [
  {
    path: '/certifications/cisco/ccna/basics/overview/exam-overview',
    element: <ExamOverview />,
  },
  {
    path: '/certifications/cisco/ccna/basics/overview/policies-and-registration',
    element: <PoliciesAndRegistration />,
  },
];

export default Overview;
