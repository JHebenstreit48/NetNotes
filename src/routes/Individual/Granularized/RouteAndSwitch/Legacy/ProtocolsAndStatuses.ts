import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/RouteAndSwitch/Legacy/ProtocolsAndStatuses/Basics";
import Advanced from "@/routes/Individual/Granularized/RouteAndSwitch/Legacy/ProtocolsAndStatuses/Advanced";

const ProtocolsAndStatuses: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default ProtocolsAndStatuses;
