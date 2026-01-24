import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/RouteAndSwitch/Routing/Basics";
import Advanced from "@/routes/Individual/Granularized/RouteAndSwitch/Routing/Advanced";

const Routing: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Routing;
