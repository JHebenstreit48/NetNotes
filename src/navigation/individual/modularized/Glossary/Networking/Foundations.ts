import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/Glossary/Networking/Foundations/Fundamentals';
import DevicesAndModels from '@/navigation/individual/modularized/Glossary/Networking/Foundations/DevicesAndModels';


const Foundations: Subpage = {
  name: 'Foundations',
  subpages: [
    Fundamentals,
    DevicesAndModels
  ],
};

export default Foundations;