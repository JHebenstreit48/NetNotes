import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/Networking/Foundations/Basics/DevicesAndModels/Fundamentals';
import Routers from '@/navigation/individual/modularized/Networking/Foundations/Basics/DevicesAndModels/Routers';

const DevicesAndModels: Subpage = {
  name: 'Devices & Models',
  subpages: [
    Fundamentals,
    Routers
  ],
};

export default DevicesAndModels;