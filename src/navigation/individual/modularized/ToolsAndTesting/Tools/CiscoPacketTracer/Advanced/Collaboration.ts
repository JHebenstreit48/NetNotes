import type { Subpage } from '@/types/navigation';

const Collaboration: Subpage = {
  name: 'Collaboration',
  subpages: [
    {
      name: 'Multiuser Links',
      path: '/tools/cisco-packet-tracer/advanced/collaboration/multiuser-links',
    },
    {
      name: 'Shared Projects',
      path: '/tools/cisco-packet-tracer/advanced/collaboration/shared-projects',
    }
  ]
};

export default Collaboration;