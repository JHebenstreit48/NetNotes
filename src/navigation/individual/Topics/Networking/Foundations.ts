import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/networking/Foundations/Basics';
import Advanced from '@/navigation/individual/modularized/networking/Foundations/Advanced';

const Fundamentals: Subpage = {
  name: 'Foundations',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Fundamentals;