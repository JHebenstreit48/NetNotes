import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NetworkingConcepts = lazy(() => import('@/Pages/MainTabs/Certifications/CompTIA/CompTIANetwork/ExamDomains/NetworkingConcepts'));
const InfrastructureAndOperations = lazy(() => import('@/Pages/MainTabs/Certifications/CompTIA/CompTIANetwork/ExamDomains/InfrastructureAndOperations'));

const ExamDomains: RouteObject[] = [
  {
    path: '/certifications/comptia/networkplus/domains/concepts',
    element: <NetworkingConcepts />,
  },
  {
    path: '/certifications/comptia/networkplus/domains/infrastructure',
    element: <InfrastructureAndOperations />,
  },
];

export default ExamDomains;
