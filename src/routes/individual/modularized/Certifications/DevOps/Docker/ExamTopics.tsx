import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ContainersAndImages = lazy(() => import('@/Pages/MainTabs/Certifications/DevOps/Docker/ExamTopics/ContainersAndImages'));
const OrchestrationBasics = lazy(() => import('@/Pages/MainTabs/Certifications/DevOps/Docker/ExamTopics/OrchestrationBasics'));

const ExamTopics: RouteObject[] = [
  {
    path: '/certifications/devops/docker/topics/containers',
    element: <ContainersAndImages />,
  },
  {
    path: '/certifications/devops/docker/topics/orchestration',
    element: <OrchestrationBasics />,
  },
];

export default ExamTopics;
