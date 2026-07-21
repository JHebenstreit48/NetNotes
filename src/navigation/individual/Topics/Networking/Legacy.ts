import type { Subpage } from '@/types/navigation';

import OSIModel from '@/navigation/individual/modularized/networking/Legacy/OSIModel';
import ProtocolsAndStatuses from '@/navigation/individual/modularized/networking/Legacy/ProtocolsAndStatuses';

const Legacy: Subpage = {
  name: 'Legacy',
  subpages: [
    OSIModel,
    ProtocolsAndStatuses
  ]
};

export default Legacy;