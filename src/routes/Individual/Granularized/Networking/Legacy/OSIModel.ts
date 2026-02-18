import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Networking/Legacy/OSIModel/Basics";
import Advanced from "@/routes/Individual/Granularized/Networking/Legacy/OSIModel/Advanced";

const OSIModel: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default OSIModel;
