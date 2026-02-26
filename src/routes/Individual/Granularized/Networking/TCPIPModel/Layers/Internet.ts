import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Internet/Basics";
import Advanced from "@/routes/Individual/Granularized/Networking/TCPIPModel/Layers/Internet/Advanced";

const Internet: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default Internet;
