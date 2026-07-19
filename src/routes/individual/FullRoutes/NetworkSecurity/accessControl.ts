import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/NetworkSecurity/AccessControl/Basics";
import Advanced from "@/routes/individual/modularized/NetworkSecurity/AccessControl/Advanced";

const AccessControl: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default AccessControl;
