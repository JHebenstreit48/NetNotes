import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/NetworkSecurity/Fundamentals/Basics";
import Advanced from "@/routes/Individual/Granularized/NetworkSecurity/Fundamentals/Advanced";

const Fundamentals: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Fundamentals;
