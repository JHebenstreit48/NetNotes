import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ScaleAndResources = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Advanced/PerformanceAndLimits/ScaleAndResources'));
const VersionCompatibility = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Advanced/PerformanceAndLimits/VersionCompatibility'));

const PerformanceAndLimits: RouteObject[] = [
  {
    path: '/packettracer/advanced/performance-and-limits/scale-and-resources',
    element: <ScaleAndResources />,
  },
  {
    path: '/packettracer/advanced/performance-and-limits/version-compatibility',
    element: <VersionCompatibility />,
  },
];

export default PerformanceAndLimits;
