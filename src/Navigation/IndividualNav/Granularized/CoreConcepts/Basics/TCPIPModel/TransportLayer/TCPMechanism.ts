import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const TCPMechanisms: Subpage = {
  name: 'TCP Mechanisms',
  subpages: [
    {
      name: 'Three-Way Handshake',
      path: '/corenetworking/tcpipmodel/transportlayer/tcpmechanisms/threewayhandshake',
    },
    {
      name: 'Acknowledgment/Sequencing',
      path: '/corenetworking/tcpipmodel/transportlayer/tcpmechanisms/ackandsequence',
    },
    {
      name: 'Windowing/Congestion Control',
      path: '/corenetworking/tcpipmodel/transportlayer/tcpmechanisms/windowingcongestion',
    },
  ],
};

export default TCPMechanisms;
