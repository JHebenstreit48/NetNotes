import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Certifications/Cisco/CCIE/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/Certifications/Cisco/CCIE/Advanced';

const CCIE: Subpage = {
    name: "CCIE",
    subpages: [
        Basics,
        Advanced
    ]
};

export default CCIE;