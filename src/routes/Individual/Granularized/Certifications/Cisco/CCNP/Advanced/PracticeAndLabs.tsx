import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LabsAndPractice = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNP/Advanced/PracticeAndLabs/LabsAndPractice'));
const PBQsAndScenarios = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNP/Advanced/PracticeAndLabs/PBQsAndScenarios'));

const PracticeAndLabs: RouteObject[] = [
  {
    path: '/certifications/cisco/ccnp/advanced/practice-and-labs/labs-and-practice',
    element: <LabsAndPractice />,
  },
  {
    path: '/certifications/cisco/ccnp/advanced/practice-and-labs/pbqs-and-scenarios',
    element: <PBQsAndScenarios />,
  },
];

export default PracticeAndLabs;
