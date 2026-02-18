import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Networking/Routing/Basics";
import Advanced from "@/routes/Individual/Granularized/Networking/Routing/Advanced";

const Routing: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Routing;
