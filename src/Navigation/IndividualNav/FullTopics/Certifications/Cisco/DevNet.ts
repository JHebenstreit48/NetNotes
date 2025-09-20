import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/Certifications/Cisco/DevNet/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/Certifications/Cisco/DevNet/Advanced';

const DevNet: Subpage = {
    name: "DevNet",
    subpages: [
        Basics,
        Advanced
    ]
};

export default DevNet;