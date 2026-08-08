import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/networking/tcp-ip-model/basics/fundamentals/introduction',
        },
        {
          name: 'History',
          path: '/networking/tcp-ip-model/basics/fundamentals/history',
        },
        {
          name: 'Protocol Stack',
          path: '/networking/tcp-ip-model/basics/fundamentals/protocol-stack',
        },
      ],
    },
  ],
};

export default Basics;