import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/RouteAndSwitch/Switching/Basics';
import Advanced from '@/Navigation/Individual/Granularized/RouteAndSwitch/Switching/Advanced';

const Switching: Subpage = {
  name: 'Switching',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default Switching;