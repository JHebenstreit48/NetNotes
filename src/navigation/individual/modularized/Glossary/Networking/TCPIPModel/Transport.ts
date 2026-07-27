import type { Subpage } from '@/types/navigation';

const Transport: Subpage = {
  name: 'Transport',
  subpages: [
    {
      name: 'Basics',
      path: '/glossary/networking/tcp-ip-model/transport/basics',
    },
    {
      name: 'TCP vs UDP',
      path: '/glossary/networking/tcp-ip-model/transport/tcp-vs-udp',
    },
    {
      name: 'Ports (Ephemeral & Well-Known)',
      path: '/glossary/networking/tcp-ip-model/transport/ports',
    },
  ],
};

export default Transport;