import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/NetworkSecurity/Fundamentals/Basics";
import Advanced from "@/routes/individual/modularized/NetworkSecurity/Fundamentals/Advanced";

const Fundamentals: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Fundamentals;
