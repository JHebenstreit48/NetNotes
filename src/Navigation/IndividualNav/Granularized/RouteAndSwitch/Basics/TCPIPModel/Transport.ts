import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/TransportLayer/Basics';
import TCPMechanisms from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/TransportLayer/TCPMechanism';

const Transport: Subpage = {
  name: 'Transport Layer',
  subpages: [
    Basics,
    TCPMechanisms
  ],
};

export default Transport;
