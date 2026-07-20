import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ExamOptions = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNP/Advanced/ConcentrationExams/ExamOptions'));
const RecommendedPaths = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNP/Advanced/ConcentrationExams/RecommendedPaths'));

const ConcentrationExams: RouteObject[] = [
  {
    path: '/certifications/cisco/ccnp/advanced/concentration-exams/exam-options',
    element: <ExamOptions />,
  },
  {
    path: '/certifications/cisco/ccnp/advanced/concentration-exams/recommended-paths',
    element: <RecommendedPaths />,
  },
];

export default ConcentrationExams;
