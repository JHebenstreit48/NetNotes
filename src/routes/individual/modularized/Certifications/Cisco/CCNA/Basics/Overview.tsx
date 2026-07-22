import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ExamOverview = lazy(() => import('@/pages/mainTabs/Certifications/Cisco/CCNA/Basics/Fundamentals/Introduction'));
const PoliciesAndRegistration = lazy(() => import('@/pages/mainTabs/Certifications/Cisco/CCNA/Basics/Fundamentals/PoliciesAndRegistration'));

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
