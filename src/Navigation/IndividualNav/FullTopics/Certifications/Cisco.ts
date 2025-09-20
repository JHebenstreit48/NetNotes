import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import CCNA from '@/Navigation/IndividualNav/FullTopics/Certifications/Cisco/CCNA';
import CCNP from '@/Navigation/IndividualNav/Granularized/Certifications/Cisco/CCNP';

const Cisco: Subpage = {
    name: 'Cisco',
    subpages: [
        CCNA,
        CCNP,
    ]
};

export default Cisco;