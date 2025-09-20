import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/NetworkSecurity/Firewalls/Basics';
import Advanced from '@/Navigation/Individual/Granularized/NetworkSecurity/Firewalls/Advanced';

const Firewalls: Subpage = {
  name: 'Firewalls',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Firewalls;