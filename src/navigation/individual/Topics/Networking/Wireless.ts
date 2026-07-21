import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/networking/Wireless/Basics';
import Advanced from '@/navigation/individual/modularized/networking/Wireless/Advanced';

const Wireless: Subpage = {
  name: 'Wireless',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default Wireless;