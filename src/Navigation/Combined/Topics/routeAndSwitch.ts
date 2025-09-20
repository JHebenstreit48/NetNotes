import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Fundamentals from '@/Navigation/Individual/Topics/RouteAndSwitch/Fundamentals';
import Legacy from '@/Navigation/Individual/Topics/RouteAndSwitch/Legacy';
import TCPIPModel from '@/Navigation/Individual/Topics/RouteAndSwitch/TCPIPModel';
import Switching from '@/Navigation/Individual/Topics/RouteAndSwitch/Switching';

const routeSwitch: Subpage = {
  name: 'Routing & Switching',
  subpages: [
    Fundamentals, 
    Legacy, 
    TCPIPModel, 
    Switching,
  ],
};

export default routeSwitch;