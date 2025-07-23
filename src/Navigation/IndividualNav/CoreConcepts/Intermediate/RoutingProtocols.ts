import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const StaticvsDynamic: Subpage = {
  name: 'Static vs Dynamic',
  subpages: [
    {
      name: 'Static Routing',
      subpages: [
        {
          name: 'Configuration & Use Cases',
          path: '/corenetworking/intermediate/staticvsdynamic/staticrouting/config'
        },
        {
          name: 'Troubleshooting & Best Practices',
          path: '/corenetworking/intermediate/staticvsdynamic/staticrouting/troubleshooting'
        }
      ]
    },
    {
      name: 'Dynamic Routing',
      subpages: [
        {
          name: 'Metrics & Decision Making',
          path: '/corenetworking/intermediate/staticvsdynamic/dynamicrouting/metrics'
        },
        {
          name: 'Configuration Scenarios',
          path: '/corenetworking/intermediate/staticvsdynamic/dynamicrouting/scenarios'
        },
        {
          name: 'Protocol Types',
          subpages: [
            {
              name: 'Current',
              subpages: [
                {
                  name: 'RIP (Routing Information Protocol)',
                  path: '/corenetworking/intermediate/staticvsdynamic/dynamicrouting/protocoltypes/current/rip'
                },
                {
                  name: 'OSPF (Open Shortest Path First)',
                  path: '/corenetworking/intermediate/staticvsdynamic/dynamicrouting/protocoltypes/current/ospf'
                }
              ]
            },
            {
              name: 'Legacy / Supplemental',
              subpages: [
                {
                  name: 'EIGRP (Enhanced Interior Gateway Routing Protocol)',
                  path: '/corenetworking/intermediate/staticvsdynamic/dynamicrouting/protocoltypes/legacy/eigrp'
                },
                {
                  name: 'IS-IS (Intermediate System to Intermediate System)',
                  path: '/corenetworking/intermediate/staticvsdynamic/dynamicrouting/protocoltypes/legacy/isis'
                },
                {
                  name: 'BGP (Border Gateway Protocol)',
                  path: '/corenetworking/intermediate/staticvsdynamic/dynamicrouting/protocoltypes/legacy/bgp'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default StaticvsDynamic;