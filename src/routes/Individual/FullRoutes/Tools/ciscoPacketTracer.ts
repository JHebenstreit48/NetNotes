import { RouteObject } from "react-router-dom";

import Basics from '@/routes/Individual/Granularized/Tools/CiscoPacketTracer/Basics';
// import Advanced from '@/routes/Individual/Granularized/Tools/CiscoPacketTracer/Advanced';

const CiscoPacketTracer: RouteObject[] = [
  ...Basics,
//   ...Advanced,
];
export default CiscoPacketTracer;