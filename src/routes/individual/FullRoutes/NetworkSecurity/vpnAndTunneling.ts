import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/NetworkSecurity/VPNAndTunneling/Basics";
import Advanced from "@/routes/individual/modularized/NetworkSecurity/VPNAndTunneling/Advanced";

const VPNAndTunneling: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default VPNAndTunneling;
