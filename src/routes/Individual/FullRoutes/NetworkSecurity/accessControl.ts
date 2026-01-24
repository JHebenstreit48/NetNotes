import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/NetworkSecurity/AccessControl/Basics";
import Advanced from "@/routes/Individual/Granularized/NetworkSecurity/AccessControl/Advanced";

const AccessControl: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default AccessControl;
