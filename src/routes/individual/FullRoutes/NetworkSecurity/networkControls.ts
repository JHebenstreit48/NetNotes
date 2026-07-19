import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/NetworkSecurity/NetworkControls/Basics";
import Advanced from "@/routes/individual/modularized/NetworkSecurity/NetworkControls/Advanced";

const NetworkControls: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default NetworkControls;
