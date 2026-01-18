import type { Subpage } from '@/types/navigation';

const ClientAndServer: Subpage = {
  name: 'Client/Server Concepts',
  subpages: [
    {
      name: 'Introduction',
      path: '/tcpip-model/layers/application/basics/client-server/introduction',
    },
    {
      name: 'Client/Server Roles',
      path: '/tcpip-model/layers/application/basics/client-server/client-vs-server',
    },
    {
      name: 'P2P vs. Client/Server',
      path: '/tcpip-model/layers/application/basics/client-server/p2p-vs-client-server',
    },
    {
      name: 'Examples',
      path: '/tcpip-model/layers/application/basics/client-server/examples',
    },
  ],
};

export default ClientAndServer;