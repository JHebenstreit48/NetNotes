import type { Subpage } from '@/types/navigation/dropdownState';

import Basics from '@/navigation/individual/modularized/Networking/TCPIPModel/Layers/Transport/Basics';
import Advanced from '@/navigation/individual/modularized/Networking/TCPIPModel/Layers/Transport/Advanced';

const Transport: Subpage = {
  name: 'Transport',
  subpages: [
    Basics,
    Advanced
  ],
};

export default Transport;