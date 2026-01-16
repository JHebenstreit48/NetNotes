import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Application/Basics/ClientServerConcepts/Introduction'));
const ClientServerRoles = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Application/Basics/ClientServerConcepts/ClientServerRoles'));
const P2PVsClientServer = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Application/Basics/ClientServerConcepts/P2PVsClientServer'));
const Examples = lazy(() => import('@/Pages/MainTabs/RouteAndSwitch/TCPIPModel/Layers/Application/Basics/ClientServerConcepts/Examples'));

const ClientServerConcepts: RouteObject[] = [
  {
    path: '/tcpip-model/layers/application/basics/client-server/introduction',
    element: <Introduction />,
  },
  {
    path: '/tcpip-model/layers/application/basics/client-server/client-vs-server',
    element: <ClientServerRoles />,
  },
  {
    path: '/tcpip-model/layers/application/basics/client-server/p2p-vs-client-server',
    element: <P2PVsClientServer />,
  },
  {
    path: '/tcpip-model/layers/application/basics/client-server/examples',
    element: <Examples />,
  },
];

export default ClientServerConcepts;
