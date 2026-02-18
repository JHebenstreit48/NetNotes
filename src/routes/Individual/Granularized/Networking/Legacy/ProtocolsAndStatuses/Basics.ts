import { RouteObject } from "react-router-dom";

import Telnet from "@/routes/Individual/Granularized/Networking/Legacy/ProtocolsAndStatuses/Basics/Telnet";
import POP3 from "@/routes/Individual/Granularized/Networking/Legacy/ProtocolsAndStatuses/Basics/POP3";
import RIP from "@/routes/Individual/Granularized/Networking/Legacy/ProtocolsAndStatuses/Basics/RIP";
import ISIS from "@/routes/Individual/Granularized/Networking/Legacy/ProtocolsAndStatuses/Basics/ISIS";
import TFTP from "@/routes/Individual/Granularized/Networking/Legacy/ProtocolsAndStatuses/Basics/TFTP";
import FTPFTPS from "@/routes/Individual/Granularized/Networking/Legacy/ProtocolsAndStatuses/Basics/FTPFTPS";

const Basics: RouteObject[] = [
  ...Telnet,
  ...POP3,
  ...RIP,
  ...ISIS,
  ...TFTP,
  ...FTPFTPS,
];

export default Basics;
