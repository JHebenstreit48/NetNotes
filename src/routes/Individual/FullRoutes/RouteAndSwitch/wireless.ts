import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/RouteAndSwitch/Wireless/Basics";
import Advanced from "@/routes/Individual/Granularized/RouteAndSwitch/Wireless/Advanced";

const Wireless: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Wireless;
