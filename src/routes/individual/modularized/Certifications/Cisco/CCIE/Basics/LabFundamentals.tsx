import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LabStructure = lazy(() => import('@/pages/MainTabs/Certifications/Cisco/CCIE/Basics/LabFundamentals/LabStructure'));
const SectionsAndScoring = lazy(() => import('@/pages/MainTabs/Certifications/Cisco/CCIE/Basics/LabFundamentals/SectionsAndScoring'));

const LabFundamentals: RouteObject[] = [
  {
    path: '/certifications/cisco/ccie/basics/lab-fundamentals/lab-structure',
    element: <LabStructure />,
  },
  {
    path: '/certifications/cisco/ccie/basics/lab-fundamentals/sections-and-scoring',
    element: <SectionsAndScoring />,
  },
];

export default LabFundamentals;
