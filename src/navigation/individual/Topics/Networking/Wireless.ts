import type { Subpage } from '@/types/navigation/dropdownState';

import Basics from '@/navigation/individual/modularized/Networking/Wireless/Basics';
import Advanced from '@/navigation/individual/modularized/Networking/Wireless/Advanced';

const Wireless: Subpage = {
  name: 'Wireless',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default Wireless;