import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const CiscoDeskPhones: Subpage = {
  name: 'Cisco Desk Phones',
  subpages: [
    {
      name: 'Overview & Families (88xx/78xx)',
      path: '/tools/endpoints/deskphones/cisco/overview-families',
    },
    {
      name: 'Models Directory',
      path: '/tools/endpoints/deskphones/cisco/models-directory',
    },
  ],
};

export default CiscoDeskPhones;