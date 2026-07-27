import type { Subpage } from '@/types/navigation';

const WebAndName: Subpage = {
  name: 'Web & Name Resolution',
  subpages: [
    {
      name: 'Introduction',
      path: '/networking/tcp-ip-model/layers/application/basics/web-and-name/introduction',
    },
    {
      name: 'HTTP/HTTPS',
      path: '/networking/tcp-ip-model/layers/application/basics/web-and-name/http-https',
    },
    {
      name: 'DNS',
      path: '/networking/tcp-ip-model/layers/application/basics/web-and-name/dns',
    },
  ],
};

export default WebAndName;