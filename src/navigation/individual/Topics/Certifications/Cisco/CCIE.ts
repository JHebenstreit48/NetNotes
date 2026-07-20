import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Certifications/Cisco/CCIE/Basics';
import Advanced from '@/navigation/individual/modularized/Certifications/Cisco/CCIE/Advanced';

const CCIE: Subpage = {
    name: "CCIE",
    subpages: [
        Basics,
        Advanced
    ]
};

export default CCIE;