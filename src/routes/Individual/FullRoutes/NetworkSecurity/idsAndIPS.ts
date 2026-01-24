import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/NetworkSecurity/IDSAndIPS/Basics";
import Advanced from "@/routes/Individual/Granularized/NetworkSecurity/IDSAndIPS/Advanced";

const IDSAndIPS: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default IDSAndIPS;
