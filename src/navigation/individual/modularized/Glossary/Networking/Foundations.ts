import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/Glossary/Networking/Foundations/Fundamentals';
import DevicesAndModels from '@/navigation/individual/modularized/Glossary/Networking/Foundations/DevicesAndModels';
import Routers from '@/navigation/individual/modularized/Glossary/Networking/Foundations/Routers';


const Foundations: Subpage = {
  name: 'Foundations',
  subpages: [
    Fundamentals,
    DevicesAndModels,
    Routers,
  ],
};

export default Foundations;