import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Fundamentals = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Application/Basics/ClientServerRoles/Fundamentals'));
const P2PAndExamples = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Application/Basics/ClientServerRoles/P2PAndExamples'));

const ClientServerRoles: RouteObject[] = [
  {
    path: '/tcpip-model/layers/application/basics/client-and-server-roles/fundamentals',
    element: <Fundamentals />,
  },
  {
    path: '/tcpip-model/layers/application/basics/client-and-server-roles/p2p-and-examples',
    element: <P2PAndExamples />,
  }
];

export default ClientServerRoles;