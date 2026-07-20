import type { Subpage } from '@/types/navigation/dropdownState';

import Basics from '@/navigation/individual/modularized/NetworkSecurity/Firewalls/Basics';
import Advanced from '@/navigation/individual/modularized/NetworkSecurity/Firewalls/Advanced';

const Firewalls: Subpage = {
  name: 'Firewalls',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Firewalls;