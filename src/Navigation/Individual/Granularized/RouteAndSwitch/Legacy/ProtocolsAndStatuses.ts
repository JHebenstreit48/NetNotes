import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/RouteAndSwitch/Legacy/ProtocolsAndStatuses/Basics';
import Advanced from '@/Navigation/Individual/Granularized/RouteAndSwitch/Legacy/ProtocolsAndStatuses/Advanced';

const ProtocolsAndStatuses: Subpage = {
  name: 'Protocols & Statuses',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default ProtocolsAndStatuses;