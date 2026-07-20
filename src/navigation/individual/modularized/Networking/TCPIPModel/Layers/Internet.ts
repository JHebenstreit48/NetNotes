import type { Subpage } from '@/types/navigation/dropdownState';

import Basics from '@/navigation/individual/modularized/Networking/TCPIPModel/Layers/Internet/Basics';
import Advanced from '@/navigation/individual/modularized/Networking/TCPIPModel/Layers/Internet/Advanced';

const Internet: Subpage = {
  name: 'Internet',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Internet;