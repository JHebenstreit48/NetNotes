import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const WebexCalling: Subpage = {
  name: 'Webex Calling',
  subpages: [
    {
      name: 'Overview',
      path: '/tools/platforms/webex-calling/overview',
    },
    {
      name: 'Provisioning & Numbers',
      path: '/tools/platforms/webex-calling/provisioning',
    },
  ],
};

export default WebexCalling;