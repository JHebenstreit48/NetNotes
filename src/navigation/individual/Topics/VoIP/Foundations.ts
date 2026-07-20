import type { Subpage } from '@/types/navigation/dropdownState';

import Basics from '@/navigation/individual/modularized/VoIP/Foundations/Basics';
import Advanced from '@/navigation/individual/modularized/VoIP/Foundations/Advanced';

const Foundations: Subpage = {
  name: 'Foundations',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Foundations;