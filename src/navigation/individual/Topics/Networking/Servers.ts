import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/networking/Servers/Basics';
import Advanced from '@/navigation/individual/modularized/networking/Servers/Advanced';

const Servers: Subpage = {
  name: 'Servers',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default Servers;