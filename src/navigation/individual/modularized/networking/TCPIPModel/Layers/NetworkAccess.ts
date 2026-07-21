import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/networking/TCPIPModel/Layers/NetworkAccess/Basics';
import Advanced from '@/navigation/individual/modularized/networking/TCPIPModel/Layers/NetworkAccess/Advanced';

const NetworkAccess: Subpage = {
  name: "Network Access",
  subpages: [
    Basics,
    Advanced
  ]
};

export default NetworkAccess;