import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const ApplicationLayer: Subpage = {
  name: 'Application Layer',
  subpages: [
    {
      name: 'Web & Name Resolution',
      subpages: [
        {
          name: 'Introduction',
          path: '/corenetworking/tcpipmodel/applicationlayer/webname/introduction'
        },
        {
          name: 'HTTP/HTTPS',
          path: '/corenetworking/tcpipmodel/applicationlayer/webname/httphttps'
        },
        {
          name: 'DNS',
          path: '/corenetworking/tcpipmodel/applicationlayer/webname/dns'
        }
      ]
    },
    {
      name: 'Email & Communication',
      subpages: [
        {
          name: 'Email Protocols (SMTP, POP3, IMAP)',
          path: '/corenetworking/tcpipmodel/applicationlayer/emailcomm/emailprotocols'
        },
        {
          name: 'Telnet/SSH',
          path: '/corenetworking/tcpipmodel/applicationlayer/emailcomm/telnetssh'
        }
      ]
    },
    {
      name: 'Network Services',
      subpages: [
        {
          name: 'DHCP',
          path: '/corenetworking/tcpipmodel/applicationlayer/networkservices/dhcp'
        },
        {
          name: 'NTP',
          path: '/corenetworking/tcpipmodel/applicationlayer/networkservices/ntp'
        },
        {
          name: 'SNMP',
          path: '/corenetworking/tcpipmodel/applicationlayer/networkservices/snmp'
        },
        {
          name: 'FTP/SFTP',
          path: '/corenetworking/tcpipmodel/applicationlayer/networkservices/ftp'
        }
      ]
    }
  ]
};

export default ApplicationLayer;