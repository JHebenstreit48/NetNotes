import type { Subpage } from '@/types/navigation/dropdownState';

import Basics from '@/navigation/individual/modularized/NetworkSecurity/NetworkControls/Basics';
import Advanced from '@/navigation/individual/modularized/NetworkSecurity/NetworkControls/Advanced';

const NetworkControls: Subpage = {
  name: 'Network Controls',
  subpages: [
    Basics,
    Advanced
  ],
};

export default NetworkControls;