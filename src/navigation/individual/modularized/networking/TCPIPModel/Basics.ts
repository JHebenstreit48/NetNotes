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
          name: 'Protocol Stack',
          path: '/networking/tcp-ip-model/basics/fundamentals/protocol-stack',
        },
      ],
    },
  ],
};

export default Basics;