import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/Tools/CiscoPacketTracer/Basics/Fundamentals';
import WorkspaceAndViews from '@/routes/individual/modularized/Tools/CiscoPacketTracer/Basics/WorkspaceAndViews';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...WorkspaceAndViews,
];

export default Basics;