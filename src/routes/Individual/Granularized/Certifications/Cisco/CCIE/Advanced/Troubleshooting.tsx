import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CommonPitfalls = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCIE/Advanced/Troubleshooting/CommonPitfalls'));
const DebugWorkflow = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCIE/Advanced/Troubleshooting/DebugWorkflow'));

const Troubleshooting: RouteObject[] = [
  {
    path: '/certifications/cisco/ccie/advanced/troubleshooting/common-pitfalls',
    element: <CommonPitfalls />,
  },
  {
    path: '/certifications/cisco/ccie/advanced/troubleshooting/debug-workflow',
    element: <DebugWorkflow />,
  },
];

export default Troubleshooting;
