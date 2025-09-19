import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/RouteAndSwitch/TCPIPModel/Layers/Transport/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/RouteAndSwitch/TCPIPModel/Layers/Transport/Advanced';

const Transport: Subpage = {
  name: 'Transport Layer',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Transport;