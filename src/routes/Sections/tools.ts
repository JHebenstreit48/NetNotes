import { RouteObject } from "react-router-dom";

import CiscoPacketTracer from '@/routes/individual/FullRoutes/ToolsAndTesting/Tools/ciscoPacketTracer';

import Wireshark from '@/routes/individual/FullRoutes/ToolsAndTesting/Tools/wireshark';
import PuTTy from '@/routes/individual/FullRoutes/ToolsAndTesting/Tools/putty';

const tools: RouteObject[] = [
  ...CiscoPacketTracer,

  ...Wireshark,
  ...PuTTy,

];

export default tools;