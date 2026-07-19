import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CLIAccess = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Basics/ConfigurationBasics/CLIAccess'));
const StartupRunningFiles = lazy(() => import('@/Pages/MainTabs/Tools/CiscoPacketTracer/Basics/ConfigurationBasics/StartupRunningFiles'));

const ConfigurationBasics: RouteObject[] = [
  {
    path: '/packettracer/basics/configuration-basics/cli-access',
    element: <CLIAccess />,
  },
  {
    path: '/packettracer/basics/configuration-basics/startup-and-running-files',
    element: <StartupRunningFiles />,
  },
];

export default ConfigurationBasics;
