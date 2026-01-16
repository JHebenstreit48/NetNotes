import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Transport/Basics/Fundamentals/Introduction'));
const TCPVsUDP = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Transport/Basics/Fundamentals/TCPVsUDP'));

const Fundamentals: RouteObject[] = [
  {
    path: '/tcpip-model/layers/transport/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/tcpip-model/layers/transport/basics/fundamentals/tcp-vs-udp',
    element: <TCPVsUDP />,
  },
];

export default Fundamentals;
