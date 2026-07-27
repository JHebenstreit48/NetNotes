import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Transport/Basics/Fundamentals/Introduction'));
const TCPVsUDP = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Layers/Transport/Basics/Fundamentals/TCPVsUDP'));

const Fundamentals: RouteObject[] = [
  {
    path: '/networking/tcp-ip-model/layers/transport/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/networking/tcp-ip-model/layers/transport/basics/fundamentals/tcp-vs-udp',
    element: <TCPVsUDP />,
  },
];

export default Fundamentals;