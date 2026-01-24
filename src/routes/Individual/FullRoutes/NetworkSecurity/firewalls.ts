import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/NetworkSecurity/Firewalls/Basics";
import Advanced from "@/routes/Individual/Granularized/NetworkSecurity/Firewalls/Advanced";

const Firewalls: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Firewalls;
