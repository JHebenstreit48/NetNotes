import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const RoutingProtocols: Subpage = {
  name: 'Routing Protocols',
  subpages: [
    {
      name: 'Core Concepts',
      subpages: [
        {
          name: 'Routing Comparisons',
          path: '/corenetworking/intermediate/routingprotocols/coreconcepts/routingcomparisons'
        },
        {
          name: 'Static vs Dynamic',
          path: '/corenetworking/intermediate/routingprotocols/coreconcepts/staticvsdynamic'
        }
      ]
    },
    {
      name: 'Static Routing',
      subpages: [
        {
          name: 'Static Routing',
          path: '/corenetworking/intermediate/routingprotocols/staticrouting/static'
        },
        {
          name: 'Use Cases & Configuration',
          path: '/corenetworking/intermediate/routingprotocols/staticrouting/config'
        }
      ]
    },
    {
      name: 'Dynamic Routing',
      subpages: [
        {
          name: 'Dynamic Routing',
          path: '/corenetworking/intermediate/routingprotocols/dynamicrouting/dynamic'
        },
        {
          name: 'Protocol Types (RIP, OSPF, etc.)',
          path: '/corenetworking/intermediate/routingprotocols/dynamicrouting/protocoltypes'
        }
      ]
    }
  ]
};

export default RoutingProtocols;