import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SpeedAndTimeMgmt = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCIE/Advanced/LabStrategy/SpeedAndTimeMgmt'));
const DocumentationAndDiagrams = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCIE/Advanced/LabStrategy/DocumentationAndDiagrams'));

const LabStrategy: RouteObject[] = [
  {
    path: '/certifications/cisco/ccie/advanced/lab-strategy/speed-and-time-management',
    element: <SpeedAndTimeMgmt />,
  },
  {
    path: '/certifications/cisco/ccie/advanced/lab-strategy/documentation-and-diagrams',
    element: <DocumentationAndDiagrams />,
  },
];

export default LabStrategy;
