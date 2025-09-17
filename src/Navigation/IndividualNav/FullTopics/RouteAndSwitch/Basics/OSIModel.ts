import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Overview from '@/Navigation/IndividualNav/Granularized/RouteAndSwitch/Legacy/OSIModel/Overview';
import GlossaryAndResources from '@/Navigation/IndividualNav/Granularized/RouteAndSwitch/Legacy/OSIModel/GlossaryAndResources';

const OSIModel: Subpage = {
  name: 'OSI Model',
  subpages: [
  Overview,
  GlossaryAndResources
  ]
};

export default OSIModel;