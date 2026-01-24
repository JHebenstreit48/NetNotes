import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/NetworkSecurity/NetworkControls/Basics";
import Advanced from "@/routes/Individual/Granularized/NetworkSecurity/NetworkControls/Advanced";

const NetworkControls: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default NetworkControls;
