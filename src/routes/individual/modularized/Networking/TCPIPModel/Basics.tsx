import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import Introduction from '@/pages/mainTabs/Networking/TCPIPModel/Basics/Introduction';
import ProtocolStack from '@/pages/mainTabs/Networking/TCPIPModel/Basics/ProtocolStack';

const ClientServerRoles: RouteObject[] = [
  {
    path: '/tcpip-model/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/tcpip-model/basics/fundamentals/protocol-stack',
    element: <ProtocolStack />,
  }
];

export default ClientServerRoles;