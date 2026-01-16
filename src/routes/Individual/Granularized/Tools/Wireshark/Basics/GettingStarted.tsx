import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallAndProfiles = lazy(() => import('@/Pages/MainTabs/Tools/Wireshark/Basics/GettingStarted/InstallAndProfiles'));
const CaptureInterfaces = lazy(() => import('@/Pages/MainTabs/Tools/Wireshark/Basics/GettingStarted/CaptureInterfaces'));

const GettingStarted: RouteObject[] = [
  {
    path: '/wireshark/basics/getting-started/install-and-profiles',
    element: <InstallAndProfiles />,
  },
  {
    path: '/wireshark/basics/getting-started/capture-interfaces',
    element: <CaptureInterfaces />,
  },
];

export default GettingStarted;
