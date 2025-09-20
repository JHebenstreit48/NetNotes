import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/RouteAndSwitch/Fundamentals/Basics';
import Advanced from '@/Navigation/Individual/Granularized/RouteAndSwitch/Fundamentals/Advanced';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Fundamentals;