import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/FullTopics/RouteAndSwitch/Fundamentals';
import Legacy from '@/Navigation/IndividualNav/FullTopics/RouteAndSwitch/Legacy';
import TCPIPModel from '@/Navigation/IndividualNav/FullTopics/RouteAndSwitch/TCPIPModel';
import Switching from '@/Navigation/IndividualNav/FullTopics/RouteAndSwitch/Switching';

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