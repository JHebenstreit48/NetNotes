import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Networking/Foundations/Basics";
import Advanced from "@/routes/Individual/Granularized/Networking/Foundations/Advanced";

const Foundations: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Foundations;
