import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WhatIsTheDCA = lazy(() => import('@/pages/MainTabs/Certifications/DevOps/Docker/Overview/WhatIsTheDCA'));
const ExamFormatAndRequirements = lazy(() => import('@/pages/MainTabs/Certifications/DevOps/Docker/Overview/ExamFormatAndRequirements'));

const Overview: RouteObject[] = [
  {
    path: '/certifications/devops/docker/overview',
    element: <WhatIsTheDCA />,
  },
  {
    path: '/certifications/devops/docker/exam-format',
    element: <ExamFormatAndRequirements />,
  },
];

export default Overview;
