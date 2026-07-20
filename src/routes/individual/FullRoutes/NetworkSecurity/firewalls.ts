import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/NetworkSecurity/Firewalls/Basics";
import Advanced from "@/routes/individual/modularized/NetworkSecurity/Firewalls/Advanced";

const Firewalls: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Firewalls;
