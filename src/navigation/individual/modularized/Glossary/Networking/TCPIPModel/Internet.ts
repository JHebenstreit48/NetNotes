import type { Subpage } from '@/types/navigation';

const Internet: Subpage = {
  name: 'Internet',
  subpages: [
    {
      name: 'Basics',
      path: '/glossary/networking/tcp-ip-model/internet/basics',
    },
    {
      name: 'IPv4 Addressing',
      path: '/glossary/networking/tcp-ip-model/internet/ipv4-addressing',
    },
    {
      name: 'IPv6 Addressing',
      path: '/glossary/networking/tcp-ip-model/internet/ipv6-addressing',
    },
    {
      name: 'NAT & PAT',
      path: '/glossary/networking/tcp-ip-model/internet/nat-and-pat',
    },
    {
      name: 'QoS & Fragmentation',
      path: '/glossary/networking/tcp-ip-model/internet/qos-and-fragmentation',
    },
  ],
};

export default Internet;