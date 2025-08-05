import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const IPAddressing: Subpage = {
  name: 'IP Addressing/Routing',
  subpages: [
    {
      name: 'Introduction',
      path: '/corenetworking/tcpipmodel/internetlayer/iprouting/introduction',
    },
    {
      name: 'IPv4 vs IPv6',
      path: '/corenetworking/tcpipmodel/internetlayer/iprouting/ipv4vsipv6',
    },
    {
      name: 'Subnet Masking & Gateways',
      path: '/corenetworking/tcpipmodel/internetlayer/iprouting/subnetandgateway',
    },
    {
      name: 'Default Gateway & Routing Tables',
      path: '/corenetworking/tcpipmodel/internetlayer/iprouting/routingtables',
    },
  ],
};

export default IPAddressing;