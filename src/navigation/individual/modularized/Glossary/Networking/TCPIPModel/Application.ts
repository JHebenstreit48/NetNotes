import type { Subpage } from '@/types/navigation';

const Application: Subpage = {
  name: 'Application',
  subpages: [
    {
      name: 'Basics',
      path: '/glossary/networking/tcp-ip-model/application/basics',
    },
    {
      name: 'Web & DNS',
      path: '/glossary/networking/tcp-ip-model/application/web-and-dns',
    },
    {
      name: 'Messaging',
      path: '/glossary/networking/tcp-ip-model/application/messaging',
    },
  ],
};

export default Application;