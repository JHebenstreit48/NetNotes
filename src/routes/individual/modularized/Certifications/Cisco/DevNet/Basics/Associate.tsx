import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ExamOverview = lazy(() => import('@/pages/MainTabs/Certifications/Cisco/DevNet/Basics/Associate/ExamOverview'));
const ExamDomains = lazy(() => import('@/pages/MainTabs/Certifications/Cisco/DevNet/Basics/Associate/ExamDomains'));

const Associate: RouteObject[] = [
  {
    path: '/certifications/cisco/devnet/basics/associate-200-901/exam-overview',
    element: <ExamOverview />,
  },
  {
    path: '/certifications/cisco/devnet/basics/associate-200-901/exam-domains',
    element: <ExamDomains />,
  },
];

export default Associate;
