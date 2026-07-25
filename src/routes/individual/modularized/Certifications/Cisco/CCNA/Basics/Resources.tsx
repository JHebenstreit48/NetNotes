import { RouteObject } from 'react-router-dom';

import StudyMaterials from '@/routes/individual/modularized/Certifications/Cisco/CCNA/Basics/Resources/StudyMaterials';
import Anki from '@/routes/individual/modularized/Certifications/Cisco/CCNA/Basics/Resources/Anki';

const Resources: RouteObject[] = [
    ...StudyMaterials,
    ...Anki
];

export default Resources;