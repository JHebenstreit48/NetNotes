import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const RoutingProtocols: Subpage = {
  name: 'Routing Protocol Concepts',
  subpages: [
    {
      name: 'Routing Protocol Overview',
      path: '/corenetworking/tcpipmodel/internetlayer/routingconcepts/overview',
    },
    {
      name: 'Static vs Dynamic (Conceptual)',
      path: '/corenetworking/tcpipmodel/internetlayer/routingconcepts/staticvsdynamic',
    },
    {
      name: 'Common Protocol Families',
      path: '/corenetworking/tcpipmodel/internetlayer/routingconcepts/protocoloverview',
    },
    {
      name: 'See Intermediate for Configs',
      path: '/corenetworking/intermediate/staticvsdynamic/staticrouting/static',
    },
  ],
};

export default RoutingProtocols;