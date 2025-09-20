import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/NetworkSecurity/Fundamentals/Basics';
import Advanced from '@/Navigation/Individual/Granularized/NetworkSecurity/Fundamentals/Advanced';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Fundamentals;