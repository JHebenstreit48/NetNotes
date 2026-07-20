import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Certifications/Cisco/CCNA/Basics';
import Advanced from '@/navigation/individual/modularized/Certifications/Cisco/CCNA/Advanced';

const CCNA: Subpage = {
    name: "CCNA",
    subpages: [
        Basics,
        Advanced
    ]
};

export default CCNA;