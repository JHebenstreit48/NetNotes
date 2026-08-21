import type { Subpage } from '@/types/navigation';

const Internet: Subpage = {
  name: 'Internet',
  subpages: [
    {
      name: 'Basics',
      path: '/glossary/networking/tcp-ip-model/internet/basics',
    },
    {
      name: 'Addressing',
      path: '/glossary/networking/tcp-ip-model/internet/addressing',
    },
    {
      name: 'QoS & Fragmentation',
      path: '/glossary/networking/tcp-ip-model/internet/qos-and-fragmentation',
    },
    {
      name: 'Commands',
      path: '/glossary/networking/tcp-ip-model/internet/commands',
    },
  ],
};

export default Internet;