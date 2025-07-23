import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const EmailAndCommunicate: Subpage = {
  name: 'Email & Communication',
  subpages: [
    {
      name: 'Email Protocols (SMTP, POP3, IMAP)',
      path: '/corenetworking/tcpipmodel/applicationlayer/emailcomm/emailprotocols',
    },
    {
      name: 'Telnet/SSH',
      path: '/corenetworking/tcpipmodel/applicationlayer/emailcomm/telnetssh',
    },
  ],
};

export default EmailAndCommunicate;
