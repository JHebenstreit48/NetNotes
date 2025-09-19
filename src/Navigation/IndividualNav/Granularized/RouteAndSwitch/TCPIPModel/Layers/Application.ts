import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/RouteAndSwitch/TCPIPModel/Layers/Application/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/RouteAndSwitch/TCPIPModel/Layers/Application/Advanced';

const Application: Subpage = {
  name: 'Application Layer',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Application;