import { RouteObject } from 'react-router-dom';

import Basics from '@/routes/individual/modularized/Certifications/Cisco/CCNA/Basics';
// import Advanced from '@/routes/individual/modularized/Certifications/Cisco/CCNA/Advanced';

const CCNA: RouteObject[] = [
    ...Basics,
    // ...Advanced
];

export default CCNA;