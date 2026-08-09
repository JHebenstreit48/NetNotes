import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/networking/Legacy/OSIModel/Basics/Fundamentals';
import PDUsAndSAP from '@/navigation/individual/modularized/networking/Legacy/OSIModel/Basics/PDUsAndSAP';
import ServicePrimitives from '@/navigation/individual/modularized/networking/Legacy/OSIModel/Basics/ServicePrimitives';
import Presentation from '@/navigation/individual/modularized/networking/Legacy/OSIModel/Basics/Presentation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    PDUsAndSAP,
    ServicePrimitives,
    Presentation,
    {
      name: "Session",
      subpages: [
        {
          name: "Dialog & Tokens",
          path: "/networking/legacy/osi-model/basics/session/dialog-and-tokens"
        },
        {
          name: "Sync & Recovery",
          path: "/networking/legacy/osi-model/basics/session/sync-and-recovery"
        }
      ]
    }
  ]
};

export default Basics;