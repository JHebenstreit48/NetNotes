import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Networking/Wireless/Basics";
import Advanced from "@/routes/Individual/Granularized/Networking/Wireless/Advanced";

const Wireless: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Wireless;
