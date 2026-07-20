import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CKAOverview = lazy(() => import('@/Pages/MainTabs/Certifications/DevOps/Kubernetes/CKAKubernetesAdministrator/CKAOverview'));
const CKADomains = lazy(() => import('@/Pages/MainTabs/Certifications/DevOps/Kubernetes/CKAKubernetesAdministrator/CKADomains'));

const CKAKubernetesAdministrator: RouteObject[] = [
  {
    path: '/certifications/devops/kubernetes/cka/overview',
    element: <CKAOverview />,
  },
  {
    path: '/certifications/devops/kubernetes/cka/domains',
    element: <CKADomains />,
  },
];

export default CKAKubernetesAdministrator;
