import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Certifications/Cisco/CCNP/Basics';
import Advanced from '@/navigation/individual/modularized/Certifications/Cisco/CCNP/Advanced';

const CCNP: Subpage = {
    name: "CCNP",
    subpages: [
        Basics,
        Advanced
    ]
};

export default CCNP;