import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/individual/modularized/Certifications/Cisco/CCNA/Basics/Fundamentals';
import StudyMethods from '@/routes/individual/modularized/Certifications/Cisco/CCNA/Basics/StudyMethods';
import TimeManagement from '@/routes/individual/modularized/Certifications/Cisco/CCNA/Basics/TimeManagement';
import ObjectiveMap from '@/routes/individual/modularized/Certifications/Cisco/CCNA/Basics/ObjectiveMap';
import Resources from '@/routes/individual/modularized/Certifications/Cisco/CCNA/Basics/Resources';
import ExamDayPrep from '@/routes/individual/modularized/Certifications/Cisco/CCNA/Basics/ExamDayPrep';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...StudyMethods,
    ...TimeManagement,
    ...ObjectiveMap,
    ...Resources,
    ...ExamDayPrep
];

export default Basics;