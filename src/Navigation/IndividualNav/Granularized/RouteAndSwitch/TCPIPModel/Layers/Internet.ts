import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/RouteAndSwitch/TCPIPModel/Layers/Internet/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/RouteAndSwitch/TCPIPModel/Layers/Internet/Advanced';

const Internet: Subpage = {
  name: 'Internet Layer',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Internet;