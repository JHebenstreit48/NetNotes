import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import IPAddressing from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/InternetLayer/IPAddressAndNetwork';
import ICMPAndError from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/InternetLayer/ICMPAndError';
import RoutingProtocols from '@/Navigation/IndividualNav/Granularized/CoreConcepts/Basics/TCPIPModel/InternetLayer/RoutingProtocols';

const Internet: Subpage = {
  name: 'Internet Layer',
  subpages: [
    IPAddressing,
    ICMPAndError,
    RoutingProtocols
  ],
};

export default Internet;