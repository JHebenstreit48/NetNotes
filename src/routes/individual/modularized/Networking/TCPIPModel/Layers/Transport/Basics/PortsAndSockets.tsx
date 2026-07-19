import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PortsSockets = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Transport/Basics/PortsAndSockets/PortsSockets'));
const PortRanges = lazy(() => import('@/Pages/MainTabs/Networking/TCPIPModel/Layers/Transport/Basics/PortsAndSockets/PortRanges'));

const PortsAndSockets: RouteObject[] = [
  {
    path: '/tcpip-model/layers/transport/basics/ports/ports-and-sockets',
    element: <PortsSockets />,
  },
  {
    path: '/tcpip-model/layers/transport/basics/ports/port-ranges',
    element: <PortRanges />,
  },
];

export default PortsAndSockets;
