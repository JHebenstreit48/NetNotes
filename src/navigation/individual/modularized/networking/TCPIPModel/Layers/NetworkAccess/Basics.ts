import type { Subpage } from '@/types/navigation';

import DataLink from '@/navigation/individual/modularized/networking/TCPIPModel/Layers/NetworkAccess/Basics/DataLink';
import Physical from '@/navigation/individual/modularized/networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    DataLink,
    Physical,
  ],
};

export default Basics;