import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import WebAndName from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/Layers/ApplicationLayer/WebAndNameResolution';
import EmailAndCommunicate from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/Layers/ApplicationLayer/EmailAndCommunicate';
import NetworkServices from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/Layers/ApplicationLayer/NetworkServices';
import ClientvsServer from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/Layers/ApplicationLayer/ClientvsServer';
import UserDataAndPrivacy from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/Layers/ApplicationLayer/UserDataAndPrivacy';

const Application: Subpage = {
  name: 'Application Layer',
  subpages: [
    WebAndName,
    EmailAndCommunicate,
    NetworkServices,
    ClientvsServer,
    UserDataAndPrivacy
  ],
};

export default Application;