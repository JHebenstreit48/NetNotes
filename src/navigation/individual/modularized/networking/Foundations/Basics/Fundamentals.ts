import type { Subpage } from '@/types/navigation';

import NetworkScope from '@/navigation/individual/modularized/networking/Foundations/Basics/Fundamentals/NetworkScope';
import DevicesAndCommunication from '@/navigation/individual/modularized/networking/Foundations/Basics/Fundamentals/DevicesAndCommunication';
import CLI from '@/navigation/individual/modularized/networking/Foundations/Basics/Fundamentals/CLI';

const Fundamentals: Subpage = {
  name: 'Fundamentals',
  subpages: [
    NetworkScope,
    DevicesAndCommunication,
    CLI
  ],
};

export default Fundamentals;