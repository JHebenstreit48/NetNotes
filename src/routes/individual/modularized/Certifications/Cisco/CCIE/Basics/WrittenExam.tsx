import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ExamOverview = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCIE/Basics/WrittenExam/ExamOverview'));
const DomainsAndBlueprint = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCIE/Basics/WrittenExam/DomainsAndBlueprint'));

const WrittenExam: RouteObject[] = [
  {
    path: '/certifications/cisco/ccie/basics/written/exam-overview',
    element: <ExamOverview />,
  },
  {
    path: '/certifications/cisco/ccie/basics/written/domains-and-blueprint',
    element: <DomainsAndBlueprint />,
  },
];

export default WrittenExam;
