import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DevContainers = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/DevNet/Advanced/ToolsAndEnvironments/DevContainers'));
const CICDForLabs = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/DevNet/Advanced/ToolsAndEnvironments/CICDForLabs'));

const ToolsAndEnvironments: RouteObject[] = [
  {
    path: '/certifications/cisco/devnet/advanced/tools-and-environments/dev-containers',
    element: <DevContainers />,
  },
  {
    path: '/certifications/cisco/devnet/advanced/tools-and-environments/ci-cd-for-labs',
    element: <CICDForLabs />,
  },
];

export default ToolsAndEnvironments;
