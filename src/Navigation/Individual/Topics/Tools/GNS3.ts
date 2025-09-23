import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Tools/GNS3/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Tools/GNS3/Advanced';

const GNS3: Subpage = {
  name: 'GNS3',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default GNS3;