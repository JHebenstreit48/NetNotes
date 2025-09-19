import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import OSIModel from '@/Navigation/IndividualNav/Granularized/RouteAndSwitch/Legacy/OSIModel';

const Legacy: Subpage = {
  name: 'Legacy',
  subpages: [
    OSIModel,
  ]
};

export default Legacy;