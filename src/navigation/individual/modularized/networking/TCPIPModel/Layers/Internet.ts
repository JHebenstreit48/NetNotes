import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/networking/TCPIPModel/Layers/Internet/Basics';
import Advanced from '@/navigation/individual/modularized/networking/TCPIPModel/Layers/Internet/Advanced';

const Internet: Subpage = {
  name: 'Internet',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Internet;