import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LogicalVsPhysical = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Basics/WorkspaceAndViews/LogicalVsPhysical'));
const DeviceConfigTabs = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Basics/WorkspaceAndViews/DeviceConfigTabs'));

const WorkspaceAndViews: RouteObject[] = [
  {
    path: '/packettracer/basics/workspace-and-views/logical-vs-physical',
    element: <LogicalVsPhysical />,
  },
  {
    path: '/packettracer/basics/workspace-and-views/device-config-tabs',
    element: <DeviceConfigTabs />,
  },
];

export default WorkspaceAndViews;
