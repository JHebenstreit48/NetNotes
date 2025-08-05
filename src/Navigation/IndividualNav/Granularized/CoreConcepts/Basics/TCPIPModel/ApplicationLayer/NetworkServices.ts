import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const NetworkServices: Subpage = {
  name: 'Network Services',
  subpages: [
    {
      name: 'DHCP',
      path: '/corenetworking/tcpipmodel/applicationlayer/networkservices/dhcp',
    },
    {
      name: 'NTP',
      path: '/corenetworking/tcpipmodel/applicationlayer/networkservices/ntp',
    },
    {
      name: 'SNMP',
      path: '/corenetworking/tcpipmodel/applicationlayer/networkservices/snmp',
    },
    {
      name: 'FTP/SFTP',
      path: '/corenetworking/tcpipmodel/applicationlayer/networkservices/ftp',
    },
  ],
};

export default NetworkServices;