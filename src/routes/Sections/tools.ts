import { RouteObject } from "react-router-dom";

import CiscoPacketTracer from '@/routes/Individual/FullRoutes/Tools/ciscoPacketTracer';

import Wireshark from '@/routes/Individual/FullRoutes/Tools/wireshark';

const tools: RouteObject[] = [
  ...CiscoPacketTracer,

  ...Wireshark,
];

export default tools;