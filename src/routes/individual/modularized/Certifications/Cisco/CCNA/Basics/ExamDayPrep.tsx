import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PearsonVUEChecklist = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Basics/ExamDayPrep/PearsonVUEChecklist'));
const EnvironmentAndID = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Basics/ExamDayPrep/EnvironmentAndID'));

const ExamDayPrep: RouteObject[] = [
  {
    path: '/certifications/cisco/ccna/basics/exam-day-prep/pearson-vue-checklist',
    element: <PearsonVUEChecklist />,
  },
  {
    path: '/certifications/cisco/ccna/basics/exam-day-prep/environment-and-id',
    element: <EnvironmentAndID />,
  },
];

export default ExamDayPrep;
