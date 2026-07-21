import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/networking/Legacy/ProtocolsAndStatuses/Basics';
import Advanced from '@/navigation/individual/modularized/networking/Legacy/ProtocolsAndStatuses/Advanced';

const ProtocolsAndStatuses: Subpage = {
  name: 'Protocols & Statuses',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default ProtocolsAndStatuses;