import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/Certifications/Cisco/CCNA/Basics/Fundamentals';
import StudyMethods from '@/navigation/individual/modularized/Certifications/Cisco/CCNA/Basics/StudyMethods';
import TimeManagement from '@/navigation/individual/modularized/Certifications/Cisco/CCNA/Basics/TimeManagement';
import ObjectiveMap from '@/navigation/individual/modularized/Certifications/Cisco/CCNA/Basics/ObjectiveMap';
import Resources from '@/navigation/individual/modularized/Certifications/Cisco/CCNA/Basics/Resources';
import ExamDayPrep from '@/navigation/individual/modularized/Certifications/Cisco/CCNA/Basics/ExamDayPrep';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    StudyMethods,
    TimeManagement,
    ObjectiveMap,
    Resources,
    ExamDayPrep
  ],
};

export default Basics;