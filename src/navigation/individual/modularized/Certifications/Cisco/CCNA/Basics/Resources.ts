import type { Subpage } from '@/types/navigation';

import StudyMaterials from '@/navigation/individual/modularized/Certifications/Cisco/CCNA/Basics/Resources/StudyMaterials';
import Anki from '@/navigation/individual/modularized/Certifications/Cisco/CCNA/Basics/Resources/Anki';

const Resources: Subpage = {
    name: 'Resources',
    subpages: [
        StudyMaterials,
        Anki
      ]
};

export default Resources;