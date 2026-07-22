import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ExamOverview = lazy(() => import('@/pages/MainTabs/Certifications/Cisco/CCNP/Basics/ENCOR350401/ExamOverview'));
const ExamTopics = lazy(() => import('@/pages/MainTabs/Certifications/Cisco/CCNP/Basics/ENCOR350401/ExamTopics'));

const ENCOR350401: RouteObject[] = [
  {
    path: '/certifications/cisco/ccnp/basics/encor/exam-overview',
    element: <ExamOverview />,
  },
  {
    path: '/certifications/cisco/ccnp/basics/encor/exam-topics',
    element: <ExamTopics />,
  },
];

export default ENCOR350401;
