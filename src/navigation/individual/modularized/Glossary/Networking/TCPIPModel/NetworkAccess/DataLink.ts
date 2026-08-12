import type { Subpage } from '@/types/navigation';

const DataLink: Subpage = {
  name: 'Data Link',
  subpages: [
    {
      name: 'MAC Address',
      path: '/glossary/networking/tcp-ip-model/networkaccess/data-link/mac-address',
    },
    {
      name: 'ARP (Address Resolution Protocol)',
      path: '/glossary/networking/tcp-ip-model/networkaccess/data-link/arp',
    },
    {
      name: 'Frame',
      path: '/glossary/networking/tcp-ip-model/networkaccess/data-link/frame',
    },
  ],
};

export default DataLink;