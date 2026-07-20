import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/Networking/TCPIPModel/Layers/Application/Basics";
import Advanced from "@/routes/individual/modularized/Networking/TCPIPModel/Layers/Application/Advanced";

const Application: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default Application;