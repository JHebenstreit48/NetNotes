import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/Networking/Wireless/Basics";
import Advanced from "@/routes/individual/modularized/Networking/Wireless/Advanced";

const Wireless: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Wireless;
