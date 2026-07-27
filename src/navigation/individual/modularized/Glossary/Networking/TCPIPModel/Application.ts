import type { Subpage } from '@/types/navigation';

const Application: Subpage = {
  name: 'Application',
  subpages: [
    {
      name: 'Basics',
      path: '/glossary/networking/tcp-ip-model/application/basics',
    },
    {
      name: 'DNS (Domain Name System)',
      path: '/glossary/networking/tcp-ip-model/application/dns',
    },
    {
      name: 'HTTP / HTTPS',
      path: '/glossary/networking/tcp-ip-model/application/http-https',
    },
  ],
};

export default Application;