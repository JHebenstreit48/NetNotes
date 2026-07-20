import type { Subpage } from '@/types/navigation/dropdownState';

import Basics from '@/navigation/individual/modularized/Networking/Switching/Basics';
import Advanced from '@/navigation/individual/modularized/Networking/Switching/Advanced';

const Switching: Subpage = {
  name: 'Switching',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default Switching;