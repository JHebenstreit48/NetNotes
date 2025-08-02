import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const PerimeterProtection: Subpage = {
  name: 'Perimeter Protection',
  subpages: [
    {
      name: 'Firewalls',
      path: '/corenetworking/advanced/networksecurity/perimeter/firewalls',
    },
    {
      name: 'Access Control Strategies',
      path: '/corenetworking/advanced/networksecurity/perimeter/accesscontrol',
    },
  ],
};

export default PerimeterProtection;