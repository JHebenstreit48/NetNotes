import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Network Services',
      subpages: [
        {
          name: 'Introduction',
          path: '/networking/tcp-ip-model/layers/application/advanced/network-services/introduction',
        },
        {
          name: 'NTP',
          path: '/networking/tcp-ip-model/layers/application/advanced/network-services/ntp',
        },
        {
          name: 'SNMP',
          path: '/networking/tcp-ip-model/layers/application/advanced/network-services/snmp',
        },
        {
          name: 'FTP/SFTP',
          path: '/networking/tcp-ip-model/layers/application/advanced/network-services/ftp',
        },
      ],
    },
    {
      name: 'Remote Access',
      subpages: [
        {
          name: 'SSH',
          path: '/networking/tcp-ip-model/layers/application/advanced/remote-access/ssh',
        },
        {
          name: 'Best Practices',
          path: '/networking/tcp-ip-model/layers/application/advanced/remote-access/ssh-best-practices',
        },
      ],
    },
    {
      name: 'User Data & Privacy',
      subpages: [
        {
          name: 'Data Collection Types',
          path: '/networking/tcp-ip-model/layers/application/advanced/user-data/data-collection-types',
        },
        {
          name: 'Privacy in Application Protocols',
          path: '/networking/tcp-ip-model/layers/application/advanced/user-data/privacy-in-protocols',
        },
      ],
    },
  ],
};

export default Advanced;