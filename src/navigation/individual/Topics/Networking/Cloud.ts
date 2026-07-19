import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Networking/Cloud/Basics';
import Advanced from '@/navigation/individual/modularized/Networking/Cloud/Advanced';

const Cloud: Subpage = {
  name: 'Cloud',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Cloud;