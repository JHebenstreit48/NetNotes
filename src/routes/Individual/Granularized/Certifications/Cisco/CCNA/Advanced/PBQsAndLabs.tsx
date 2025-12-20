import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PacketTracerLabs = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Advanced/PBQsAndLabs/PacketTracerLabs'));
const TroubleshootingScenarios = lazy(() => import('@/Pages/MainTabs/Certifications/Cisco/CCNA/Advanced/PBQsAndLabs/TroubleshootingScenarios'));

const PBQsAndLabs: RouteObject[] = [
  {
    path: '/certifications/cisco/ccna/advanced/pbqs-and-labs/packet-tracer-labs',
    element: <PacketTracerLabs />,
  },
  {
    path: '/certifications/cisco/ccna/advanced/pbqs-and-labs/troubleshooting-scenarios',
    element: <TroubleshootingScenarios />,
  },
];

export default PBQsAndLabs;
