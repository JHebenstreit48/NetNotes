import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/RouteAndSwitch/Mobile/Basics';
import Advanced from '@/Navigation/Individual/Granularized/RouteAndSwitch/Mobile/Advanced';

const Mobile: Subpage = {
  name: 'Mobile',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Mobile;