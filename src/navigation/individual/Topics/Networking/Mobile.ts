import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Networking/Mobile/Basics';
import Advanced from '@/navigation/individual/modularized/Networking/Mobile/Advanced';

const Mobile: Subpage = {
  name: 'Mobile',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Mobile;