import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Tools/GNS3/Basics';
import Advanced from '@/navigation/individual/modularized/Tools/GNS3/Advanced';

const GNS3: Subpage = {
  name: 'GNS3',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default GNS3;