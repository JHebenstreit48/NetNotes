import { RouteObject } from "react-router-dom";

import Telnet from "@/routes/individual/modularized/Networking/Legacy/ProtocolsAndStatuses/Basics/Telnet";
import POP3 from "@/routes/individual/modularized/Networking/Legacy/ProtocolsAndStatuses/Basics/POP3";
import RIP from "@/routes/individual/modularized/Networking/Legacy/ProtocolsAndStatuses/Basics/RIP";
import ISIS from "@/routes/individual/modularized/Networking/Legacy/ProtocolsAndStatuses/Basics/ISIS";
import TFTP from "@/routes/individual/modularized/Networking/Legacy/ProtocolsAndStatuses/Basics/TFTP";
import FTPFTPS from "@/routes/individual/modularized/Networking/Legacy/ProtocolsAndStatuses/Basics/FTPFTPS";

const Basics: RouteObject[] = [
  ...Telnet,
  ...POP3,
  ...RIP,
  ...ISIS,
  ...TFTP,
  ...FTPFTPS,
];

export default Basics;
