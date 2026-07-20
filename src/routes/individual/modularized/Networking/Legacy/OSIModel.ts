import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/Networking/Legacy/OSIModel/Basics";
import Advanced from "@/routes/individual/modularized/Networking/Legacy/OSIModel/Advanced";

const OSIModel: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default OSIModel;
