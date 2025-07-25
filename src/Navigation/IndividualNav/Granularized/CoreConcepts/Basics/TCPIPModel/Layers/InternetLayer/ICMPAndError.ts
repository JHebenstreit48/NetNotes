import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const ICMPAndError: Subpage = {
  name: 'ICMP & Error Reporting',
  subpages: [
    {
      name: 'Basics',
      path: '/corenetworking/tcpipmodel/internetlayer/icmp/basics',
    },
    {
      name: 'Ping & Traceroute',
      path: '/corenetworking/tcpipmodel/internetlayer/icmp/pingtraceroute',
    },
  ],
};

export default ICMPAndError;