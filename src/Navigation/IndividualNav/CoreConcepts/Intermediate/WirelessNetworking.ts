import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const WirelessNetworking: Subpage = {
  name: 'Wireless Networking',
  subpages: [
    {
      name: 'Core Concepts',
      subpages: [
        {
          name: 'Wireless Standards',
          path: '/corenetworking/intermediate/wirelessnetworking/coreconcepts/standards'
        },
        {
          name: 'Frequencies & Channels',
          path: '/corenetworking/intermediate/wirelessnetworking/coreconcepts/frequencieschannels'
        }
      ]
    },
    {
      name: 'Security',
      subpages: [
        {
          name: 'Wireless Security',
          path: '/corenetworking/intermediate/wirelessnetworking/security/security'
        },
        {
          name: 'Authentication & Encryption',
          path: '/corenetworking/intermediate/wirelessnetworking/security/encryptionauth'
        }
      ]
    },
    {
      name: 'Troubleshooting',
      subpages: [
        {
          name: 'Wireless Troubleshooting',
          path: '/corenetworking/intermediate/wirelessnetworking/troubleshooting/troubleshooting'
        },
        {
          name: 'Common Issues & Fixes',
          path: '/corenetworking/intermediate/wirelessnetworking/troubleshooting/commonissues'
        }
      ]
    }
  ]
};

export default WirelessNetworking;