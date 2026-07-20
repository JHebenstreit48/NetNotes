import type { Subpage } from '@/types/navigation/dropdownState';

import Basics from '@/navigation/individual/modularized/Certifications/Cisco/DevNet/Basics';
import Advanced from '@/navigation/individual/modularized/Certifications/Cisco/DevNet/Advanced';

const DevNet: Subpage = {
    name: "DevNet",
    subpages: [
        Basics,
        Advanced
    ]
};

export default DevNet;