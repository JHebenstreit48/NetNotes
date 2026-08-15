import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/Tools/CiscoPacketTracer/Basics/Fundamentals';
import WorkspaceAndViews from '@/navigation/individual/modularized/Tools/CiscoPacketTracer/Basics/WorkspaceAndViews';
import Modes from '@/navigation/individual/modularized/Tools/CiscoPacketTracer/Basics/Modes';
import DevicesAndCabling from '@/navigation/individual/modularized/Tools/CiscoPacketTracer/Basics/DevicesAndCabling';
import ConfigurationBasics from '@/navigation/individual/modularized/Tools/CiscoPacketTracer/Basics/ConfigurationBasics';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    WorkspaceAndViews,
    Modes,
    DevicesAndCabling,
    ConfigurationBasics
  ]
};

export default Basics;