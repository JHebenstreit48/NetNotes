import type { Subpage } from '@/types/navigation/dropdownState';

import CCNA from '@/navigation/individual/Topics/Certifications/Cisco/CCNA';
import CCNP from '@/navigation/individual/Topics/Certifications/Cisco/CCNP';
import CCIE from '@/navigation/individual/Topics/Certifications/Cisco/CCIE';
import DevNet from '@/navigation/individual/Topics/Certifications/Cisco/DevNet';

const Cisco: Subpage = {
  name: 'Cisco',
  subpages: [
    CCNA,
    CCNP,
    CCIE,
    DevNet,

  ],
};

export default Cisco;