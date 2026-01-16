import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CertificationOverview = lazy(() => import('@/Pages/MainTabs/Certifications/DevOps/AzureDevOps/AZ400/CertificationOverview'));
const SkillsMeasured = lazy(() => import('@/Pages/MainTabs/Certifications/DevOps/AzureDevOps/AZ400/SkillsMeasured'));

const AZ400: RouteObject[] = [
  {
    path: '/certifications/devops/azuredevops/overview',
    element: <CertificationOverview />,
  },
  {
    path: '/certifications/devops/azuredevops/domains',
    element: <SkillsMeasured />,
  },
];

export default AZ400;
