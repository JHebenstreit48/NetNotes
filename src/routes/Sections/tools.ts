import { RouteObject } from "react-router-dom";

import CiscoPacketTracer from '@routes/individual/FullRoutes/Tools/ciscoPacketTracer';

import Wireshark from '@routes/individual/FullRoutes/Tools/wireshark';

const tools: RouteObject[] = [
  ...CiscoPacketTracer,

  ...Wireshark,
];

export default tools;