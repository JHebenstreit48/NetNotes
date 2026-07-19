import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/Networking/TCPIPModel/Layers/Internet/Basics";
import Advanced from "@/routes/individual/modularized/Networking/TCPIPModel/Layers/Internet/Advanced";

const Internet: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default Internet;
