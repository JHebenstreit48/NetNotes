import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/OSIModel/Fundamentals';

import Application7 from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/OSIModel/Layers/7-Application';
import Presentation6 from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/OSIModel/Layers/6-Presentation';
import Session5 from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/OSIModel/Layers/5-Session';
import Transport4 from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/OSIModel/Layers/4-Transport';
import Network3 from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/OSIModel/Layers/3-Network';
import DataLink2 from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/OSIModel/Layers/2-DataLink';
import Physical1 from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/OSIModel/Layers/1-Physical';

import OSIvsTCPIP from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/OSIModel/OSIvsTCPIP';
import GlossaryAndResources from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/OSIModel/GlossaryAndResources';

const OSIModel: Subpage = {
  name: 'OSI Model',
  subpages: [
    // Fundamentals (OSI-specific, avoids TCP/IP protocol overlap)
    Fundamentals,

    // All 7 OSI layers — labeled and OSI-specific only
    {
      name: 'Layers',
      subpages: [
      Application7,
      Presentation6,
      Session5,
      Transport4,
      Network3,
      DataLink2,
      Physical1],
    },

    // OSI and TCP/IP Relationship (only comparison allowed here)
    OSIvsTCPIP,

    // New top-level section just for reference material
    GlossaryAndResources,
  ],
};

export default OSIModel;
