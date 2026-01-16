import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallAndInterface = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Basics/GettingStarted/InstallAndInterface'));
const ProjectsAndSaves = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Basics/GettingStarted/ProjectsAndSaves'));

const GettingStarted: RouteObject[] = [
  {
    path: '/packettracer/basics/getting-started/install-and-interface',
    element: <InstallAndInterface />,
  },
  {
    path: '/packettracer/basics/getting-started/projects-and-saves',
    element: <ProjectsAndSaves />,
  },
];

export default GettingStarted;
