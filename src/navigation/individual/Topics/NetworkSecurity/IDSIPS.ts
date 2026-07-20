import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/NetworkSecurity/IDSIPS/Basics';
import Advanced from '@/navigation/individual/modularized/NetworkSecurity/IDSIPS/Advanced';

const IDSIPS: Subpage = {
  name: 'IDS & IPS',
  subpages: [
    Basics,
    Advanced
  ],
};

export default IDSIPS;