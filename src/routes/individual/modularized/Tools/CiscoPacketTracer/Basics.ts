import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/Tools/CiscoPacketTracer/Basics/Fundamentals';
import WorkspaceAndViews from '@/routes/individual/modularized/Tools/CiscoPacketTracer/Basics/WorkspaceAndViews';
import Modes from '@/routes/individual/modularized/Tools/CiscoPacketTracer/Basics/Modes';
import DevicesAndCabling from '@/routes/individual/modularized/Tools/CiscoPacketTracer/Basics/DevicesAndCabling';
import ConfigurationBasics from '@/routes/individual/modularized/Tools/CiscoPacketTracer/Basics/ConfigurationBasics';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...WorkspaceAndViews,
  ...Modes,
  ...DevicesAndCabling,
  ...ConfigurationBasics,
];

export default Basics;