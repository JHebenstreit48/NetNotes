import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/NetworkSecurity/VPNAndTunneling/Basics";
import Advanced from "@/routes/Individual/Granularized/NetworkSecurity/VPNAndTunneling/Advanced";

const VPNAndTunneling: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default VPNAndTunneling;
