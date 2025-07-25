import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Introduction',
      path: '/corenetworking/tcpipmodel/transportlayer/basics/introduction',
    },
    {
      name: 'TCP vs UDP',
      path: '/corenetworking/tcpipmodel/transportlayer/basics/tcpvsudp',
    },
    {
      name: 'Ports/Sockets',
      path: '/corenetworking/tcpipmodel/transportlayer/basics/portsockets',
    },
    {
      name: 'Reliable Delivery/Flow Control',
      path: '/corenetworking/tcpipmodel/transportlayer/basics/reliabilityflow',
    },
  ],
};

export default Basics;