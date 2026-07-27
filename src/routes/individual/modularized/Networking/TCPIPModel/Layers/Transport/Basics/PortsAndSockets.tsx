import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PortsSockets = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Transport/Basics/PortsAndSockets/PortsSockets'));
const PortRanges = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Transport/Basics/PortsAndSockets/PortRanges'));

const PortsAndSockets: RouteObject[] = [
  {
    path: '/networking/tcp-ip-model/layers/transport/basics/ports/ports-and-sockets',
    element: <PortsSockets />,
  },
  {
    path: '/networking/tcp-ip-model/layers/transport/basics/ports/port-ranges',
    element: <PortRanges />,
  },
];

export default PortsAndSockets;
