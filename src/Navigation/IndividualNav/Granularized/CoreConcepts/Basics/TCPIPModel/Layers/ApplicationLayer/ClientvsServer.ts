import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const ClientvsServer: Subpage = {
  name: 'Client/Server Concepts',
  subpages: [
    {
      name: 'Introduction',
      path: '/corenetworking/tcpipmodel/applicationlayer/clientserver/introduction',
    },
    {
      name: 'Client/Server Roles',
      path: '/corenetworking/tcpipmodel/applicationlayer/clientserver/clientvsserver',
    },
    {
      name: 'P2P vs. Client/Server',
      path: '/corenetworking/tcpipmodel/applicationlayer/clientserver/p2pvsclientserver',
    },
    {
      name: 'Examples',
      path: '/corenetworking/tcpipmodel/applicationlayer/clientserver/examples',
    },
  ],
};

export default ClientvsServer;
