import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallAndInterface = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Basics/Fundamentals/InstallAndInterface'));
const ProjectsAndSaves = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Basics/Fundamentals/ProjectsAndSaves'));

const GettingStarted: RouteObject[] = [
  {
    path: '/packettracer/basics/fundamentals/install-and-interface',
    element: <InstallAndInterface />,
  },
  {
    path: '/packettracer/basics/fundamentals/projects-and-saves',
    element: <ProjectsAndSaves />,
  },
];

export default GettingStarted;
