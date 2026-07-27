import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Basics/Introduction'));
const ProtocolStack = lazy(() => import('@/pages/mainTabs/Networking/TCPIPModel/Basics/ProtocolStack'));

const ClientServerRoles: RouteObject[] = [
  {
    path: '/networking/tcp-ip-model/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/networking/tcp-ip-model/basics/fundamentals/protocol-stack',
    element: <ProtocolStack />,
  }
];

export default ClientServerRoles;