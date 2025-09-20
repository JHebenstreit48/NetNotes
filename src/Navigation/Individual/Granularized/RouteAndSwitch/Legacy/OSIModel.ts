import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel/Basics';
import Advanced from '@/Navigation/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel/Advanced';

const OSIModel: Subpage = {
  name: 'OSI Model',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default OSIModel;