import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/ToolsAndTesting/Tools/CiscoPacketTracer/Basics';
// import Advanced from '@/routes/individual/modularized/ToolsAndTesting/Tools/CiscoPacketTracer/Advanced';

const CiscoPacketTracer: RouteObject[] = [
  ...Basics,
//   ...Advanced,
];
export default CiscoPacketTracer;