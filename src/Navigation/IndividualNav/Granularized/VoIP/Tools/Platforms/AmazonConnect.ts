import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const AmazonConnect: Subpage = {
  name: 'Amazon Connect',
  subpages: [
    {
      name: 'Overview',
      path: '/tools/platforms/amazon-connect/overview',
    },
    {
      name: 'Contact Flows & Routing',
      path: '/tools/platforms/amazon-connect/contact-flows',
    },
  ],
};

export default AmazonConnect;