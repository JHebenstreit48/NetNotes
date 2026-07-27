import type { Subpage } from '@/types/navigation';

const ClientAndServer: Subpage = {
  name: 'Client & Server Roles',
  subpages: [
    {
      name: 'Fundamentals',
      path: '/networking/tcp-ip-model/layers/application/basics/client-and-server-roles/fundamentals',
    },
    {
      name: 'P2P & Examples',
      path: '/networking/tcp-ip-model/layers/application/basics/client-and-server-roles/p2p-and-examples',
    },
  ],
};

export default ClientAndServer;