import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/Certifications/Cisco/CCIE/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Certifications/Cisco/CCIE/Advanced';

const CCIE: Subpage = {
    name: "CCIE",
    subpages: [
        Basics,
        Advanced
    ]
};

export default CCIE;