import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import CCNA from '@/Navigation/IndividualNav/FullTopics/Certifications/Cisco/CCNA';
import CCNP from '@/Navigation/IndividualNav/FullTopics/Certifications/Cisco/CCNP';
import CCIE from '@/Navigation/IndividualNav/FullTopics/Certifications/Cisco/CCIE';
import DevNet from '@/Navigation/IndividualNav/FullTopics/Certifications/Cisco/DevNet';


const Cisco: Subpage = {
  name: 'Cisco',
  subpages: [
    CCNA,
    CCNP,
    CCIE,
    DevNet,

  ],
};

export default Cisco;