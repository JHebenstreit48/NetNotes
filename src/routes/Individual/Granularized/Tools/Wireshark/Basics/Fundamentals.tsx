import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallAndProfiles = lazy(() => import('@/Pages/MainTabs/Tools/Wireshark/Basics/Fundamentals/InstallAndProfiles'));
const CaptureInterfaces = lazy(() => import('@/Pages/MainTabs/Tools/Wireshark/Basics/Fundamentals/CaptureInterfaces'));

const GettingStarted: RouteObject[] = [
  {
    path: '/wireshark/basics/fundamentals/install-and-profiles',
    element: <InstallAndProfiles />,
  },
  {
    path: '/wireshark/basics/fundamentals/capture-interfaces',
    element: <CaptureInterfaces />,
  },
];

export default GettingStarted;