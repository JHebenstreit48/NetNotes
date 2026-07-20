import type { Subpage } from '@/types/navigation/dropdownState';

import Basics from '@/navigation/individual/modularized/Networking/Legacy/ProtocolsAndStatuses/Basics';
import Advanced from '@/navigation/individual/modularized/Networking/Legacy/ProtocolsAndStatuses/Advanced';

const ProtocolsAndStatuses: Subpage = {
  name: 'Protocols & Statuses',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default ProtocolsAndStatuses;