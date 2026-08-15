import type { Subpage } from '@/types/navigation';

import SimulationAnalysis from '@/navigation/individual/modularized/Tools/CiscoPacketTracer/Advanced/SimulationAnalysis';
import ActivitiesAndAssessment from '@/navigation/individual/modularized/Tools/CiscoPacketTracer/Advanced/ActivitiesAndAssessment';
import TemplatesAndFiles from '@/navigation/individual/modularized/Tools/CiscoPacketTracer/Advanced/TemplatesAndFiles';
import Collaboration from '@/navigation/individual/modularized/Tools/CiscoPacketTracer/Advanced/Collaboration';
import PerformanceAndLimits from '@/navigation/individual/modularized/Tools/CiscoPacketTracer/Advanced/PerformanceAndLimits';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    SimulationAnalysis,
    ActivitiesAndAssessment,
    TemplatesAndFiles,
    Collaboration,
    PerformanceAndLimits
  ]
};

export default Advanced;