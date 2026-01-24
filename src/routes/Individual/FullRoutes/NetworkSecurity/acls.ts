import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/NetworkSecurity/ACLs/Basics";
import Advanced from "@/routes/Individual/Granularized/NetworkSecurity/ACLs/Advanced";

const ACLs: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default ACLs;
