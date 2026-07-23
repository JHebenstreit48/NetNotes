import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/networking/Foundations/Basics/DevicesAndModels/Fundamentals';
import Routers from '@/navigation/individual/modularized/networking/Foundations/Basics/DevicesAndModels/Routers';
import EndDevices from '@/navigation/individual/modularized/networking/Foundations/Basics/DevicesAndModels/EndDevices';

const DevicesAndModels: Subpage = {
  name: 'Devices & Models',
  subpages: [
    Fundamentals,
    Routers,
    EndDevices
  ],
};

export default DevicesAndModels;