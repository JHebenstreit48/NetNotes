import type { Subpage } from '@/types/navigation';

const NetworkServices: Subpage = {
    name: "Network Services",
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
        }
    ]
};

export default NetworkServices;