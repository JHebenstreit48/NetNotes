import type { Subpage } from '@/types/navigation/dropdownState';

import Basics from '@/navigation/individual/modularized/NetworkSecurity/Fundamentals/Basics';
import Advanced from '@/navigation/individual/modularized/NetworkSecurity/Fundamentals/Advanced';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Fundamentals;