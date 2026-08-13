import type { Subpage } from '@/types/navigation';

import NetworkServices from '@/navigation/individual/modularized/networking/TCPIPModel/Layers/Application/Advanced/NetworkServices';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    NetworkServices,
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