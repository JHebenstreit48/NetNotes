import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PipelineConcepts = lazy(() => import('@/Pages/MainTabs/Certifications/DevOps/Jenkins/JenkinsInCICD/PipelineConcepts'));
const DeclarativeVsScripted = lazy(() => import('@/Pages/MainTabs/Certifications/DevOps/Jenkins/JenkinsInCICD/DeclarativeVsScripted'));

const JenkinsInCICD: RouteObject[] = [
  {
    path: '/certifications/devops/jenkins/pipelines',
    element: <PipelineConcepts />,
  },
  {
    path: '/certifications/devops/jenkins/declarative-vs-scripted',
    element: <DeclarativeVsScripted />,
  },
];

export default JenkinsInCICD;
