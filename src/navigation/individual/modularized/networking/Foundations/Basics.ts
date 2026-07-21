import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/networking/Foundations/Basics/Fundamentals';
import DevicesAndModels from '@/navigation/individual/modularized/networking/Foundations/Basics/DevicesAndModels';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    DevicesAndModels
  ],
};

export default Basics;