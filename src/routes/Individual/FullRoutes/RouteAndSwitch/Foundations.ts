import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/RouteAndSwitch/Foundations/Basics";
import Advanced from "@/routes/Individual/Granularized/RouteAndSwitch/Foundations/Advanced";

const Foundations: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Foundations;
