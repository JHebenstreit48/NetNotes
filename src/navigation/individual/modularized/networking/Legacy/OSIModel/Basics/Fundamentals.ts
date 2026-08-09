import type { Subpage } from '@/types/navigation';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    {
      name: 'Introduction',
      path: '/networking/legacy/osi-model/basics/fundamentals/introduction',
    },
    {
      name: 'Services vs Protocols',
      path: '/networking/legacy/osi-model/basics/fundamentals/services-vs-protocols',
    },
    {
      name: 'Model & Layer Comparison',
      path: '/networking/legacy/osi-model/basics/fundamentals/layer-comparison',
    }
  ]
};

export default Fundamentals;