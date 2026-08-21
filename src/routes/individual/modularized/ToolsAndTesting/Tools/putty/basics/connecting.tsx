import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SerialSettings = lazy(() => import('@/pages/mainTabs/ToolsAndTesting/Tools/putty/basics/connecting/serialSettings'));

const Connecting: RouteObject[] = [
  {
    path: '/tools-and-testing/tools/terminal-emulators/putty/basics/connecting/serial-settings',
    element: <SerialSettings />,
  }
];

export default Connecting;