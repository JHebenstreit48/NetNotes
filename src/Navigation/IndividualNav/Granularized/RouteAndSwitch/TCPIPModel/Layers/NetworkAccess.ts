import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Advanced';

const NetworkAccess: Subpage = {
  name: "Network Access Layer",
  subpages: [
    Basics,
    Advanced
  ]
};

export default NetworkAccess;