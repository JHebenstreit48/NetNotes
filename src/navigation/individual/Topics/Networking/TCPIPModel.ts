import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/networking/TCPIPModel/Basics';
import Layers from '@/navigation/individual/modularized/networking/TCPIPModel/Layers';

const TCPIPModel: Subpage = {
  name: 'TCP/IP Model',
  subpages: [
    Basics,
    Layers
  ],
};

export default TCPIPModel;