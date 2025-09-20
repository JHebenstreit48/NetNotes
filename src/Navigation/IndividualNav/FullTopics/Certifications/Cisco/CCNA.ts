import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Certifications/Cisco/CCNA/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/Certifications/Cisco/CCNA/Advanced';

const CCNA: Subpage = {
    name: "CCNA",
    subpages: [
        Basics,
        Advanced
    ]
};

export default CCNA;