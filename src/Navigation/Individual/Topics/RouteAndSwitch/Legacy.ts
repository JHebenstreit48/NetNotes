import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import OSIModel from '@/Navigation/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel';

const Legacy: Subpage = {
  name: 'Legacy',
  subpages: [
    OSIModel,
  ]
};

export default Legacy;