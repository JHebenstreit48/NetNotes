import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/Networking/TCPIPModel/Layers/NetworkAccess/Basics";
import Advanced from "@/routes/individual/modularized/Networking/TCPIPModel/Layers/NetworkAccess/Advanced";

const NetworkAccess: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default NetworkAccess;