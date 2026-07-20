import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/NetworkSecurity/IDSAndIPS/Basics";
import Advanced from "@/routes/individual/modularized/NetworkSecurity/IDSAndIPS/Advanced";

const IDSAndIPS: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default IDSAndIPS;
