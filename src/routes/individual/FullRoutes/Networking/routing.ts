import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/Networking/Routing/Basics";
import Advanced from "@/routes/individual/modularized/Networking/Routing/Advanced";

const Routing: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Routing;
