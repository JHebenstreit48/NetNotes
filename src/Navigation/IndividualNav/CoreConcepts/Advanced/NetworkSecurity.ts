import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const NetworkSecurity: Subpage = {
  name: 'Network Security',
  subpages: [
    {
      name: 'Core Concepts',
      subpages: [
        {
          name: 'Encryption Basics',
          path: '/corenetworking/advanced/networksecurity/coreconcepts/encryptionbasics'
        },
        {
          name: 'Intrusion Detection',
          path: '/corenetworking/advanced/networksecurity/coreconcepts/intrusiondetection'
        }
      ]
    },
    {
      name: 'Perimeter Protection',
      subpages: [
        {
          name: 'Firewalls',
          path: '/corenetworking/advanced/networksecurity/perimeter/firewalls'
        },
        {
          name: 'Access Control Strategies',
          path: '/corenetworking/advanced/networksecurity/perimeter/accesscontrol'
        }
      ]
    }
  ]
};

export default NetworkSecurity;