import type { Subpage } from '@/types/navigation';

const NetworkAccess: Subpage = {
  name: 'Network Access',
  subpages: [
    {
      name: 'Basics',
      path: '/glossary/networking/tcp-ip-model/networkaccess/basics',
    },
    {
      name: 'MAC Address',
      path: '/glossary/networking/tcp-ip-model/networkaccess/mac-address',
    },
    {
      name: 'ARP (Address Resolution Protocol)',
      path: '/glossary/networking/tcp-ip-model/networkaccess/arp',
    },
  ],
};

export default NetworkAccess;