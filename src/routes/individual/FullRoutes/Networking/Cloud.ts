import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/Networking/Cloud/Basics";
import Advanced from "@/routes/individual/modularized/Networking/Cloud/Advanced";

const Cloud: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Cloud;
