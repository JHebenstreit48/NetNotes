import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Certifications/Cisco/CCNA/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Certifications/Cisco/CCNA/Advanced';

const CCNA: Subpage = {
    name: "CCNA",
    subpages: [
        Basics,
        Advanced
    ]
};

export default CCNA;