import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/NetworkSecurity/AccessControl/Basics';
import Advanced from '@/navigation/individual/modularized/NetworkSecurity/AccessControl/Advanced';

const AccessControl: Subpage = {
  name: 'Access Control',
  subpages: [
    Basics,
    Advanced
  ],
};

export default AccessControl;