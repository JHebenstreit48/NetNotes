import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/Networking/Switching/Basics";
import Advanced from "@/routes/individual/modularized/Networking/Switching/Advanced";

const Switching: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Switching;