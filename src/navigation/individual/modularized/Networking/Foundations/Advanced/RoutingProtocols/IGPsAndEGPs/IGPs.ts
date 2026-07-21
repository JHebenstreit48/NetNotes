import type { Subpage } from '@/types/navigation';

const IGPs: Subpage = {
  name: 'IGPs',
  subpages: [
    {
      name: 'Introduction',
      path: '/foundations/advanced/routing-protocols/igps-and-egps/igps/introduction',
    },
    {
      name: 'OSPF',
      path: '/foundations/advanced/routing-protocols/igps-and-egps/igps/ospf',
    },
    {
      name: 'EIGRP (Cisco Proprietary)',
      path: '/foundations/advanced/routing-protocols/igps-and-egps/igps/eigrp',
    },
  ],
};

export default IGPs;