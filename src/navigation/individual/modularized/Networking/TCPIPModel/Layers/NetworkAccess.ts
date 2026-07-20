import type { Subpage } from '@/types/navigation/dropdownState';

import Basics from '@/navigation/individual/modularized/Networking/TCPIPModel/Layers/NetworkAccess/Basics';
import Advanced from '@/navigation/individual/modularized/Networking/TCPIPModel/Layers/NetworkAccess/Advanced';

const NetworkAccess: Subpage = {
  name: "Network Access",
  subpages: [
    Basics,
    Advanced
  ]
};

export default NetworkAccess;