import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/networking/Legacy/OSIModel/Basics';
import Advanced from '@/navigation/individual/modularized/networking/Legacy/OSIModel/Advanced';

const OSIModel: Subpage = {
  name: 'OSI Model',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default OSIModel;