import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel/Basics";
import Advanced from "@/routes/Individual/Granularized/RouteAndSwitch/Legacy/OSIModel/Advanced";

const OSIModel: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default OSIModel;
