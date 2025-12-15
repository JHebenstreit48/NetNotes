import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/VoIP/Foundations/Basics';
import Advanced from '@/Navigation/Individual/Granularized/VoIP/Foundations/Advanced';

const Foundations: Subpage = {
  name: 'Foundations',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Foundations;