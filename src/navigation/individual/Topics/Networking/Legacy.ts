import type { Subpage } from '@/types/navigation/dropdownState';

import OSIModel from '@/navigation/individual/modularized/Networking/Legacy/OSIModel';
import ProtocolsAndStatuses from '@/navigation/individual/modularized/Networking/Legacy/ProtocolsAndStatuses';

const Legacy: Subpage = {
  name: 'Legacy',
  subpages: [
    OSIModel,
    ProtocolsAndStatuses
  ]
};

export default Legacy;