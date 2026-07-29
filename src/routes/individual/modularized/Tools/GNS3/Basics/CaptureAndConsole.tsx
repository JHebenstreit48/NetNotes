import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AddWiresharkTShark = lazy(() => import('@/pages/mainTabs/Tools/GNS3/Basics/CaptureAndConsole/AddWiresharkTShark'));
const ConsoleAccess = lazy(() => import('@/pages/mainTabs/Tools/GNS3/Basics/CaptureAndConsole/ConsoleAccess'));

const CaptureAndConsole: RouteObject[] = [
  {
    path: '/tools/gns3/basics/capture-and-console/add-wireshark-and-tshark',
    element: <AddWiresharkTShark />,
  },
  {
    path: '/tools/gns3/basics/capture-and-console/console-access-telnet-serial-vnc',
    element: <ConsoleAccess />,
  },
];

export default CaptureAndConsole;
