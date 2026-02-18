import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Topics/RouteAndSwitch/Fundamentals';
import TCPIPModel from '@/Navigation/Individual/Topics/RouteAndSwitch/TCPIPModel';
import Switching from '@/Navigation/Individual/Topics/RouteAndSwitch/Switching';
import RoutingProtocols from '@/Navigation/Individual/Topics/RouteAndSwitch/RoutingProtocols';
import Wireless from '@/Navigation/Individual/Topics/RouteAndSwitch/Wireless';
import Mobile from '@/Navigation/Individual/Topics/RouteAndSwitch/Mobile';
import Cloud from '@/Navigation/Individual/Topics/RouteAndSwitch/Cloud';
import Legacy from '@/Navigation/Individual/Topics/RouteAndSwitch/Legacy';

const networking: Subpage = {
  name: 'Networking',
  subpages: [
    Fundamentals,
    TCPIPModel,
    Switching,
    RoutingProtocols,
    Wireless,
    Mobile,
    Cloud, 
    Legacy
  ],
};

export default networking;