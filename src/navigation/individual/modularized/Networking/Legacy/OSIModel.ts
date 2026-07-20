import type { Subpage } from '@/types/navigation/dropdownState';

import Basics from '@/navigation/individual/modularized/Networking/Legacy/OSIModel/Basics';
import Advanced from '@/navigation/individual/modularized/Networking/Legacy/OSIModel/Advanced';

const OSIModel: Subpage = {
  name: 'OSI Model',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default OSIModel;