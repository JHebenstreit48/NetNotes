import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CertificationOverview = lazy(() => import('@/Pages/MainTabs/Certifications/DevOps/TerraformAssociate/HashiCorpTerraform/CertificationOverview'));
const ExamDomains = lazy(() => import('@/Pages/MainTabs/Certifications/DevOps/TerraformAssociate/HashiCorpTerraform/ExamDomains'));

const HashiCorpTerraform: RouteObject[] = [
  {
    path: '/certifications/devops/terraform/overview',
    element: <CertificationOverview />,
  },
  {
    path: '/certifications/devops/terraform/domains',
    element: <ExamDomains />,
  },
];

export default HashiCorpTerraform;
