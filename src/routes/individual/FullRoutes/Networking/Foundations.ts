import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/Networking/Foundations/Basics";
import Advanced from "@/routes/individual/modularized/Networking/Foundations/Advanced";

const Foundations: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Foundations;