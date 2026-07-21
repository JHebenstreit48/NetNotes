import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/networking/Cloud/Basics';
import Advanced from '@/navigation/individual/modularized/networking/Cloud/Advanced';

const Cloud: Subpage = {
  name: 'Cloud',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Cloud;