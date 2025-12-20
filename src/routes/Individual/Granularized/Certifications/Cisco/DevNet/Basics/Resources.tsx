import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DevNetSandbox101 = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/DevNet/Basics/Resources/DevNetSandbox101'));
const APIDocsAndCollections = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/DevNet/Basics/Resources/APIDocsAndCollections'));

const Resources: RouteObject[] = [
  {
    path: '/certifications/cisco/devnet/basics/resources/devnet-sandbox-101',
    element: <DevNetSandbox101 />,
  },
  {
    path: '/certifications/cisco/devnet/basics/resources/api-docs-and-collections',
    element: <APIDocsAndCollections />,
  },
];

export default Resources;
