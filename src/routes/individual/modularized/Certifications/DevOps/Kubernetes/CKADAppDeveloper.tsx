import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CKADOverview = lazy(() => import('@/pages/MainTabs/Certifications/DevOps/Kubernetes/CKADAppDeveloper/CKADOverview'));
const CKADDomains = lazy(() => import('@/pages/MainTabs/Certifications/DevOps/Kubernetes/CKADAppDeveloper/CKADDomains'));

const CKADAppDeveloper: RouteObject[] = [
  {
    path: '/certifications/devops/kubernetes/ckad/overview',
    element: <CKADOverview />,
  },
  {
    path: '/certifications/devops/kubernetes/ckad/domains',
    element: <CKADDomains />,
  },
];

export default CKADAppDeveloper;
