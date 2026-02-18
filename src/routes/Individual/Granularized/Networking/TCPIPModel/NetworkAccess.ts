import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/NetworkAccess/Basics";
import Advanced from "@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/NetworkAccess/Advanced";

const NetworkAccess: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default NetworkAccess;