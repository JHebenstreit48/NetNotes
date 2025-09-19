import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/RouteAndSwitch/Fundamentals/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/RouteAndSwitch/Fundamentals/Advanced';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Fundamentals;