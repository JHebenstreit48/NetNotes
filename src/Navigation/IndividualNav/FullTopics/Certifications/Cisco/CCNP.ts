import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Certifications/Cisco/CCNP/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/Certifications/Cisco/CCNP/Advanced';

const CCNP: Subpage = {
    name: "CCNP",
    subpages: [
        Basics,
        Advanced
    ]
};

export default CCNP;