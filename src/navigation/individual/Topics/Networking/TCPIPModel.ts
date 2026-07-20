import type { Subpage } from '@/types/navigation/dropdownState';

import Basics from '@/navigation/individual/modularized/Networking/TCPIPModel/Basics';
import Layers from '@/navigation/individual/modularized/Networking/TCPIPModel/Layers';

const TCPIPModel: Subpage = {
  name: 'TCP/IP Model',
  subpages: [
    Basics,
    Layers
  ],
};

export default TCPIPModel;