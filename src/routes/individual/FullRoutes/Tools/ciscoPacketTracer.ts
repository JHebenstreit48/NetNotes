import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/Tools/CiscoPacketTracer/Basics';
// import Advanced from '@/routes/individual/modularized/Tools/CiscoPacketTracer/Advanced';

const CiscoPacketTracer: RouteObject[] = [
  ...Basics,
//   ...Advanced,
];
export default CiscoPacketTracer;