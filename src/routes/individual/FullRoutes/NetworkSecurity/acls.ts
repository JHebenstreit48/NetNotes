import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/NetworkSecurity/ACLs/Basics";
import Advanced from "@/routes/individual/modularized/NetworkSecurity/ACLs/Advanced";

const ACLs: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default ACLs;
