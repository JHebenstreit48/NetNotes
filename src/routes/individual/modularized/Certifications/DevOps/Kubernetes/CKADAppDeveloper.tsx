import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CKADOverview = lazy(() => import('@/Pages/MainTabs/Certifications/DevOps/Kubernetes/CKADAppDeveloper/CKADOverview'));
const CKADDomains = lazy(() => import('@/Pages/MainTabs/Certifications/DevOps/Kubernetes/CKADAppDeveloper/CKADDomains'));

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
