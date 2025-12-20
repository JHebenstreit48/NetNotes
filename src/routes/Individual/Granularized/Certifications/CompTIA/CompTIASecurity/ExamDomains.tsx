import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ThreatsAttacksAndVulnerabilities = lazy(() => import('@/Pages/MainTabs/Certifications/CompTIA/CompTIASecurity/ExamDomains/ThreatsAttacksAndVulnerabilities'));
const IdentityAndAccessManagement = lazy(() => import('@/Pages/MainTabs/Certifications/CompTIA/CompTIASecurity/ExamDomains/IdentityAndAccessManagement'));

const ExamDomains: RouteObject[] = [
  {
    path: '/certifications/comptia/securityplus/domains/threats',
    element: <ThreatsAttacksAndVulnerabilities />,
  },
  {
    path: '/certifications/comptia/securityplus/domains/iam',
    element: <IdentityAndAccessManagement />,
  },
];

export default ExamDomains;
