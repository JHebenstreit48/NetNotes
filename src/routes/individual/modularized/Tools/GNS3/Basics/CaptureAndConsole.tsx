import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AddWiresharkTShark = lazy(() => import('@/Pages/MainTabs/Tools/GNS3/Basics/CaptureAndConsole/AddWiresharkTShark'));
const ConsoleAccess = lazy(() => import('@/Pages/MainTabs/Tools/GNS3/Basics/CaptureAndConsole/ConsoleAccess'));

const CaptureAndConsole: RouteObject[] = [
  {
    path: '/gns3/basics/capture-and-console/add-wireshark-and-tshark',
    element: <AddWiresharkTShark />,
  },
  {
    path: '/gns3/basics/capture-and-console/console-access-telnet-serial-vnc',
    element: <ConsoleAccess />,
  },
];

export default CaptureAndConsole;
