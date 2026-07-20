import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/Networking/Legacy/ProtocolsAndStatuses/Basics";
import Advanced from "@/routes/individual/modularized/Networking/Legacy/ProtocolsAndStatuses/Advanced";

const ProtocolsAndStatuses: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default ProtocolsAndStatuses;
