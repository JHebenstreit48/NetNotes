import type { Subpage } from '@/types/navigation/dropdownState';

import Basics from '@/navigation/individual/modularized/VoIP/Diagnostics/Basics';
import Advanced from '@/navigation/individual/modularized/VoIP/Diagnostics/Advanced';

const Diagnostics: Subpage = {
  name: 'Diagnostics',
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Diagnostics;