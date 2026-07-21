import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/networking/Switching/Basics';
import Advanced from '@/navigation/individual/modularized/networking/Switching/Advanced';

const Switching: Subpage = {
  name: 'Switching',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default Switching;