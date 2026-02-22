import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/Individual/Granularized/Tools/CiscoPacketTracer/Basics/Fundamentals';
import WorkspaceAndViews from '@/routes/Individual/Granularized/Tools/CiscoPacketTracer/Basics/WorkspaceAndViews';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...WorkspaceAndViews,
];

export default Basics;