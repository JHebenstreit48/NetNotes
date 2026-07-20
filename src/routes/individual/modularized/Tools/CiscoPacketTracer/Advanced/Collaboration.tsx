import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MultiuserLinks = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Advanced/Collaboration/MultiuserLinks'));
const SharedProjects = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Advanced/Collaboration/SharedProjects'));

const Collaboration: RouteObject[] = [
  {
    path: '/packettracer/advanced/collaboration/multiuser-links',
    element: <MultiuserLinks />,
  },
  {
    path: '/packettracer/advanced/collaboration/shared-projects',
    element: <SharedProjects />,
  },
];

export default Collaboration;
