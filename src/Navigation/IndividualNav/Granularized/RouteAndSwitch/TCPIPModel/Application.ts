import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import WebAndName from '@/Navigation/IndividualNav/Granularized/RouteAndSwitch/TCPIPModel/ApplicationLayer/WebAndNameResolution';
import EmailAndCommunicate from '@/Navigation/IndividualNav/Granularized/RouteAndSwitch/TCPIPModel/ApplicationLayer/EmailAndCommunicate';
import NetworkServices from '@/Navigation/IndividualNav/Granularized/RouteAndSwitch/TCPIPModel/ApplicationLayer/NetworkServices';
import ClientvsServer from '@/Navigation/IndividualNav/Granularized/RouteAndSwitch/TCPIPModel/ApplicationLayer/ClientvsServer';
import UserDataAndPrivacy from '@/Navigation/IndividualNav/Granularized/RouteAndSwitch/TCPIPModel/ApplicationLayer/UserDataAndPrivacy';

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