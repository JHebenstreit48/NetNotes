import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Internet/Basics';
import Advanced from '@/Navigation/Individual/Granularized/RouteAndSwitch/TCPIPModel/Layers/Internet/Advanced';

const Internet: Subpage = {
  name: 'Internet Layer',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Internet;