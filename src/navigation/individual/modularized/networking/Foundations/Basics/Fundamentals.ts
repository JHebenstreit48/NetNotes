import type { Subpage } from '@/types/navigation';

import NetworkScope from '@/navigation/individual/modularized/networking/Foundations/Basics/Fundamentals/NetworkScope';
import DevicesAndCommunication from '@/navigation/individual/modularized/networking/Foundations/Basics/Fundamentals/DevicesAndCommunication';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    NetworkScope,
    DevicesAndCommunication
  ],
};

export default Fundamentals;