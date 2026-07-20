import type { Subpage } from '@/types/navigation/dropdownState';

import Basics from '@/navigation/individual/modularized/Networking/Foundations/Basics';
import Advanced from '@/navigation/individual/modularized/Networking/Foundations/Advanced';

const Fundamentals: Subpage = {
  name: 'Foundations',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Fundamentals;