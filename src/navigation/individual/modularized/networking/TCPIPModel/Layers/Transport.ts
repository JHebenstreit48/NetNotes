import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/networking/TCPIPModel/Layers/Transport/Basics';
import Advanced from '@/navigation/individual/modularized/networking/TCPIPModel/Layers/Transport/Advanced';

const Transport: Subpage = {
  name: 'Transport',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Transport;