import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Networking/TCPIPModel/Layers/Application/Basics';
import Advanced from '@/navigation/individual/modularized/Networking/TCPIPModel/Layers/Application/Advanced';

const Application: Subpage = {
  name: 'Application',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Application;