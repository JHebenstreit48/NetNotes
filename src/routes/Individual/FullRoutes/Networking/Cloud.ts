import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Networking/Cloud/Basics";
import Advanced from "@/routes/Individual/Granularized/Networking/Cloud/Advanced";

const Cloud: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Cloud;
