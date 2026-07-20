import type { Subpage } from '@/types/navigation/dropdownState';

import Basics from '@/navigation/individual/modularized/NetworkSecurity/ACLs/Basics';
import Advanced from '@/navigation/individual/modularized/NetworkSecurity/ACLs/Advanced';

const ACLs: Subpage = {
  name: 'ACLs',
  subpages: [
    Basics,
    Advanced
  ],
};

export default ACLs;