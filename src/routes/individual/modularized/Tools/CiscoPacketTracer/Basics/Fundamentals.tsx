import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Tools/CiscoPacketTracer/Basics/Fundamentals/Introduction'));
const InstallAndInterface = lazy(() => import('@/pages/mainTabs/Tools/CiscoPacketTracer/Basics/Fundamentals/InstallAndInterface'));
const ProjectsAndSaves = lazy(() => import('@/pages/mainTabs/Tools/CiscoPacketTracer/Basics/Fundamentals/ProjectsAndSaves'));

const Fundamentals: RouteObject[] = [
  {
    path: '/tools/cisco-packet-tracer/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/tools/cisco-packet-tracer/basics/fundamentals/install-and-interface',
    element: <InstallAndInterface />,
  },
  {
    path: '/tools/cisco-packet-tracer/basics/fundamentals/projects-and-saves',
    element: <ProjectsAndSaves />,
  },
];

export default Fundamentals;