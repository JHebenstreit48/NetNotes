import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import WebAndName from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/Layers/ApplicationLayer/WebAndNameResolution';
import EmailAndCommunicate from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/Layers/ApplicationLayer/EmailAndCommunicate';
import NetworkServices from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/Layers/ApplicationLayer/NetworkServices';
import ClientvsServer from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/Layers/ApplicationLayer/ClientvsServer';

const Application: Subpage = {
  name: 'Application Layer',
  subpages: [
    WebAndName,
    EmailAndCommunicate,
    NetworkServices,
    ClientvsServer
  ],
};

export default Application;