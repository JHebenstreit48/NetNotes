import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Overview from '@/Navigation/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel/Overview';
import GlossaryAndResources from '@/Navigation/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel/GlossaryAndResources';

const OSIModel: Subpage = {
  name: 'OSI Model',
  subpages: [
    Overview,
    GlossaryAndResources
  ],
};

export default OSIModel;